import axios from 'axios';

// Set config defaults when creating the instance
export const instance = axios.create({
    baseURL: 'http://37.152.185.60:5001/',
});


export const AUTH_TOKEN = localStorage.getItem('token');
const user = localStorage.getItem('user');
export const USER_TOKEN = user ? JSON.parse(user) : {};

// Alter defaults after instance has been created
instance.defaults.headers.common.Authorization = AUTH_TOKEN || '';
// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
// instance.defaults.timeout = 2500;
