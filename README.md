# EPIC - Empowering Periods In Confidence

Welcome to EPIC - Empowering Periods In Confidence. This project aims to provide a comprehensive solution for tracking menstrual cycles, predicting period dates, and offering a supportive community and chatbot assistance for women.

## Repository Structure

In this repository, you will find the following folders:

1. **FrontEnd**
    - **epic_frontend**
        - **Requirements:** Vite + ReactJs
        - This is the frontend for the whole project.

2. **BackEnd**
    - **BloomCircle_Backend**
        - **Requirements:** Flask + SocketIO + Jinja2 Template
        - This is used to create the chatting community for women.
    - **FlowGpt_3.5 (WebScrape)**
        - **Requirements:** Streamlit + Groq (Llama 3)
        - Streamlit is used to make the frontend, and LangChain is used to create the LLM with the Groq API.
    - **Pred_Backend**
        - **Requirements:** Flask + ML Model (Joblib)
        - This is used to create an API link for predictions according to the user.
    - **fgpt-backend**
        - **Requirements:** SpringBoot
        - This is used to create APIs for user creation and performing CRUD operations on user details.

## [FrontEnd]

### epic_frontend

This is the frontend for the whole project.

#### Components

1. **SignIn/SignUp**
    - **API Call (Base URL):** `/api/users` (Created by SpringBoot)
    - **Methods:** [GET and POST]
    - This is to create or find a user.

2. **User Report**
    - **API Call (Base URL):** `/api/reports/user` (Created by SpringBoot)
    - **Methods:** [GET, POST, and PUT]
    - This is to create or get a user report.

3. **Period Dates**
    - **API Call (Base URL):** `/api/period_dates/user` (Created by SpringBoot)
    - **Methods:** [GET and POST]
    - This is to add user period dates.

4. **Prediction Dates**
    - **API Call (Base URL):** `/predict?id=` (Created by Flask)
    - **Methods:** [GET]
    - This is to fetch predictions for the user using an ML model. This API call also performs a GET call to fetch user details to make predictions.

5. **ChatBot**
    - **Redirect (Base URL with Param -> {id}):** `/flow-gpt/?id=${id}` (Streamlit)
    - This URL redirects to the FlowGPT site. The params pass the user ID, which is used to make a GET call to fetch user details.

#### Technology Used

- HTML
- CSS
- JavaScript
- Vite + ReactJs
- React Three Fiber

#### Services

- Track and Predict
- Shop
- AI Chatbot
- Community
- Contact Us
- LogIn / Register

#### Run Command

```sh
npm run dev
```

## [BackEnd]

### fgpt-backend

**Spring MVC**

#### Controller

1. DatesController
2. ReportController
3. UsersController

#### Entity

1. DatesEntity
2. ReportEntity
3. UserEntity

#### Connected with MySQL Database

- **Database:** fgpt
- **Tables:** Dates, Report, Users

#### Technologies Used

- Java
- Spring
- Spring Boot

#### Run Command

Run in a dedicated terminal.

### BloomCircle_Backend

This is to create chat rooms.

#### FrontEnd

- HTML / CSS

#### BackEnd

- Python
- Flask
- SocketIO

#### Run Command

Run on port 5000 in a dedicated terminal.

### FlowGpt-3.5 (WebScrape)

This is the chatbot.

#### FrontEnd

- Streamlit UI

#### Technologies

- LangChain
- Groq API (Meta Llama 3 70b)
- Color Thief (For image analysis)
- Ollama Embeddings

#### Requirements

```txt
streamlit
langchain
langchain_community
webcolors
colorthief
requests
```

#### Run Command

Download Ollama and open cmd. Type `ollama serve` to turn on Ollama Embeddings. Now type `streamlit run app.py` to run the Streamlit server in a dedicated terminal.

### Pred_Backend

This is the machine learning API for prediction.

#### ML Model

- Decision Tree Regressor (packed in Joblib)

#### Endpoint

- `/predict` + User_ID (as Param)

#### Technologies

- Python
- Flask

#### Run Command

Run in a dedicated terminal.
