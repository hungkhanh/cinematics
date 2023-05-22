import { requests } from "../utils/constants";
import axiosTMDB from "./axiosTMDB";

const tmdbApi = {
    getBanner() {
        const url = requests.fetchTrending
        return axiosTMDB.get(url)
    },
    getMovieById(id) {
        const url = requests.getMovieById
        return axiosTMDB.get(url, id)
    },

};

export default tmdbApi;
