import { api } from "./api";

const lerFotos = async (callback) => {
    const response = await api.get("/fotos");    
    const fotos = response.data;
    callback(fotos);
}

export default lerFotos;