import { api } from "./api";

const lerPraticas = async (callback) => {
    const response = await api.get("/praticas");    
    const praticas = response.data;
    console.log(praticas);
    callback(praticas);
}

export default lerPraticas;