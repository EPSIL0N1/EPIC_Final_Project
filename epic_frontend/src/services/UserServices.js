import axios from 'axios';

// const Rest_Api_Base_Url = 'http://localhost:8080/api/users';
const Rest_Api_Base_Url = 'http://192.168.29.108:8080/api/users';

export const listUsers = () => axios.get(Rest_Api_Base_Url);

export const createUser = (user) => axios.post(Rest_Api_Base_Url, user);

export const getUserById = (userId) => axios.get(Rest_Api_Base_Url + '/' + userId);