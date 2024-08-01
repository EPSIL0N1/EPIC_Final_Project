import streamlit as st
import os
from langchain_community.document_loaders import TextLoader
from langchain_groq import ChatGroq
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.embeddings import OllamaEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain.prompts import PromptTemplate
from langchain.chains import create_retrieval_chain
from colorthief import ColorThief
import webcolors
from langchain.memory import ChatMessageHistory, ConversationBufferMemory
from dotenv import load_dotenv
from langchain.chains.question_answering import load_qa_chain
from langchain_community.vectorstores import Chroma
import requests

load_dotenv()

groq_api_key = os.environ['GROQ_API_KEY']


if "vectors" not in st.session_state:
    st.session_state.embeddings = OllamaEmbeddings(model='nomic-embed-text')
    st.session_state.loader = WebBaseLoader("https://www.healthline.com/health/vaginal-discharge-color-guide")
    st.session_state.docs = st.session_state.loader.load()
    
    st.session_state.text_splitter = RecursiveCharacterTextSplitter(
        chunk_size = 1000, chunk_overlap = 200
    )
    
    print("Data Loaded!")
    persist_direc = 'embeddings_here'
    
    st.session_state.final_documents = st.session_state.text_splitter.split_documents(st.session_state.docs[:50])
    # st.session_state.vectors = Chroma.from_documents(st.session_state.final_documents, st.session_state.embeddings, persist_directory=persist_direc)
    # st.session_state.vectors.persist()
    st.session_state.vectors = Chroma(embedding_function=st.session_state.embeddings, persist_directory=persist_direc)
    st.session_state.vectors.get()
    
        
    print("CromaDb Ready!")
    
    
llm = ChatGroq(
    groq_api_key = groq_api_key,
    model_name = "llama3-70b-8192"
)

id = st.query_params.get("id")
# print("id = " , type(id))

# response = requests.get('http://localhost:8080/api/reports/user/' + id)
response = requests.get('http://192.168.29.108:8080/api/reports/user/' + id)
# response = requests.get('http://localhost:8080/api/reports/user/5')
response = response.json()
response = str(response)
print(response)
# print(response[0]['disease'])
# user_Name = requests.get("http://localhost:8080/api/users/" + id)
user_Name = requests.get("http://192.168.29.108:8080/api/users/" + id)
# user_Name = requests.get("http://localhost:8080/api/users/5")
user_Name = user_Name.json()

print("UserName->" , user_Name['userName'])

template = """
You are a personalized medical chatbot specializing in menstrual health. I'll do my best to provide you with personalized information and health tips.

Use Patient Report for more personalized answers

Patient Name: {username}
Patient Report: {patient_record}

Greet with her name and you may ask follow-up questions like:

"Are you experiencing any irregularities in your menstrual cycle? (e.g. heavy bleeding, light bleeding, irregular periods)"

Remember to keep your questions concise and focused on the user's specific needs. You can always use the patient record to provide more information and guidance throughout the conversation.

<context>
{context}
<context>

Chat History:
{chat_history}
Question: {user_input}
"""

print("Prompt Ready!")

# patient_name = "Reyna"

prompt = PromptTemplate(
    input_variables=["chat_history", "user_input", "context", "health_report"], template=template
).partial(patient_record=response, username = user_Name)

# prompt.partial(health_report = health_report)

print("Prompt Template Ready!")

# message_history = ChatMessageHistory()
# memory = ConversationBufferMemory(memory_key="chat_history", input_key="human_input")
print("message_history Ready!")

memory = ConversationBufferMemory(
            memory_key="chat_history",
            # output_key="answer",
            # chat_memory=message_history,
            # return_messages=True,
            input_key="user_input"
        )

print("memory Ready!")

chain = load_qa_chain(
    llm, chain_type="stuff", memory=memory, prompt=prompt
)

print("chain Ready!")

def get_blood_color(uploaded_file):

    ct = ColorThief(uploaded_file)
    dominant_color = ct.get_color(quality=1)

    def closest_color(rgb):
        differences = {}
        for color_hex, color_name in webcolors.CSS3_HEX_TO_NAMES.items():
            r, g, b = webcolors.hex_to_rgb(color_hex)
            differences[sum([(r - rgb[0]) ** 2,
                            (g - rgb[1]) ** 2,
                            (b - rgb[2]) ** 2])] = color_name
            
        return differences[min(differences.keys())]
        
    return closest_color(dominant_color)
    

st.title("FlowGPT-3.5 💖")


# def open_support_ticket():
#     react_link = "http://localhost:3000/"
#     # webbrowser.open(react_link, int=0, autoraise=False)
#     # components.iframe(react_link)
#     # st.markdown('<a href="http://localhost:3000/">...</a>', unsafe_allow_html=True)
#     st.switch_page(react_link)

# st.link_button("Check Your Profile", url="http://localhost:3000/")
# st.markdown('<a href="http://localhost:3000/" target="_self">View all</a>',unsafe_allow_html=True)

with st.sidebar:
    # st.link_button("<- Go Back", url="http://localhost:5173/track/5")
    st.link_button("<- Go Back", url=("http://192.168.29.108:5173/track/" + id))
    
    uploaded_file = st.file_uploader("Upload your Blood Color Image Here! 🩸", type=['png', 'jpg'], help="Please keep a white background")
        

if 'chat_history' not in st.session_state:
        st.session_state.chat_history = []
        
else:
    for msg in st.session_state.chat_history:
        memory.save_context({'user_input': msg['human']}, {'output': msg['AI']})

if 'messages' not in st.session_state:
    st.session_state.messages = []
    
for message in st.session_state.messages:
    st.chat_message(message['role']).markdown(message['content'])

user_input1 = st.chat_input("Pass Your Prompt Here")
user_input2 = ("My Menstrual Blood Color is: " + get_blood_color(uploaded_file)) if uploaded_file else None

if user_input1 or user_input2:
    user_input = user_input1 if user_input1 else user_input2
    st.chat_message('user').markdown(user_input)
    st.session_state.messages.append({'role':'user', 'content': user_input})
    
    docs = st.session_state.vectors.similarity_search(user_input)

    response = chain(
        {"input_documents":docs, "user_input": user_input}
        , return_only_outputs=True)
    
    answer = response["output_text"]
    
    st.chat_message('assistant').markdown(answer)
    st.session_state.messages.append({'role':'assistant', 'content': answer})
    
    msg = {'human': user_input, 'AI': answer}
    st.session_state.chat_history.append(msg)
    