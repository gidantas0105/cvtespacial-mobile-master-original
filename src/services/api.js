import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { create } from 'apisauce';

//const urlBase = "https://cvtespacial-app.herokuapp.com";
const urlBase = "http://192.168.1.15:3333"; 
const apiAxios = axios.create({ baseURL: urlBase });

const api = create({ axiosInstance: apiAxios });

api.addAsyncRequestTransform(request => async () => {
    const token = await AsyncStorage.getItem('@CVTAPP:token');
    if (token)
        request.headers["x-access-token"] = token;
});

api.addResponseTransform(response => {
    if (!response.ok) throw response;
});

module.exports = { api, apiAxios, urlBase };

/*
//NO INÍCIO, FOI UTILIZADO AXIOS
import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.0.0.106:3333'
});

export default api;
*/