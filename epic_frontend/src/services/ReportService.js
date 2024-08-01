import axios from 'axios';

// const Rest_Api_Base_Url = "http://localhost:8080/api/reports/user"
const Rest_Api_Base_Url = "http://192.168.29.108:8080/api/reports/user"

export const addReportById = (userId, report) => axios.post(Rest_Api_Base_Url + '/' + userId, report);