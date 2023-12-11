import {urlBase} from "./api";  

const preparaImagem = (url) => {
    return `${urlBase}/${url}`;
};

export default preparaImagem;