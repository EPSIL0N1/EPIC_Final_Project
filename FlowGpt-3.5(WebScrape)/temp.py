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
import pickle

load_dotenv()

groq_api_key = os.environ['GROQ_API_KEY']

embeddings = OllamaEmbeddings(model='nomic-embed-text')
loader = WebBaseLoader("https://www.healthline.com/health/vaginal-discharge-color-guide")
docs = loader.load()
    
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size = 1000, chunk_overlap = 200
)
    
print("Data Loaded!")
    
final_documents = text_splitter.split_documents(docs[:5])
# vectors = Chroma.from_documents(final_documents,embeddings)
doc_embeddings = Chroma.from_documents(final_documents, embeddings)
# filename = "file.pkl"
# pickle.dump(doc_embeddings, open(filename, "wb"))

import numpy as np

# assume embeddings is a numpy array of shape (num_embeddings, embedding_dim)
np.save('embeddings.npy', embeddings)

print("CromaDb Ready!")