import axiosLibrary from 'axios'

const axios = axiosLibrary.create({
    baseURL: 'https://food-order-ebc76.firebaseio.com'
});

export default axios;
