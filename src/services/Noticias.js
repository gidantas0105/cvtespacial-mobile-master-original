import {api} from "./api";

const lerNoticias = async (callback) => {
    const response = await api.get('/noticias');    
    const noticias = response.data;
    callback(noticias);
}

export default lerNoticias;