import {api} from "./api";

const lerVideos = async (callback) => {
    const response = await api.get('/videos');    
    const videos = response.data;
    callback(videos);
}

export default lerVideos;