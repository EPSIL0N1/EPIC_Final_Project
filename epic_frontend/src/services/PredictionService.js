import axios from 'axios';

// const Rest_Api_Base_Url = 'http://127.0.0.1:5000/predict?id=';
const Rest_Api_Base_Url = 'http://192.168.29.108:5000/predict?id=';

export const getPredictionsById = (userId) => axios.get(Rest_Api_Base_Url + userId);