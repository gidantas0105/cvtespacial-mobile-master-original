import { api, urlBase } from "./api";

const lerMateriaisDidaticos = async (callback) => {
    const response = await api.get("/materiais");    
    const materiaisDidaticos = response.data;
    callback(materiaisDidaticos);
}

const preparaMaterialDidatico = (url) => {
    return `${urlBase}/${url}`;
};

module.exports = { lerMateriaisDidaticos, preparaMaterialDidatico };