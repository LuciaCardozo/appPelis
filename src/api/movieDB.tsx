import axios from "axios";

const movieDB = axios.create({
    baseURL:'http://api.themoviedb.org/3/movie',
    params: {
        api_key: 'd41e0626355673f98a50d9e6aa1f4e46',
        language: 'es-ES'
    }
});

export default movieDB;