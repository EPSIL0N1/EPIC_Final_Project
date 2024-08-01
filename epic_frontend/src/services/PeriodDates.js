import axios from 'axios';

// const Rest_Api_Base_Url = 'http://localhost:8080/api/period_dates/user';
const Rest_Api_Base_Url = 'http://192.168.29.108:8080/api/period_dates/user';

export const getDatesById = (userId) => axios.get(Rest_Api_Base_Url + '/' + userId);

export const addDatesById = (userId, date) => axios.post(Rest_Api_Base_Url + '/' + userId, date);