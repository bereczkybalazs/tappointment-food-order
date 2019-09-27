import axiosLibrary from 'axios'

const axios = axiosLibrary.create({
    baseURL: process.env.REACT_APP_FIREBASE_APP_URL
});

export default axios;
