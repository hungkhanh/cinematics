import { requests } from "../utils/constants";
import axiosTMDB from "./axiosTMDB";

const tmdbApi = {
    getMovieBanner() {
        const url = requests.fetchTrending
        return axiosTMDB.get(url)
    },
    getTVBanner() {
        const url = requests.fetchMysteryTV
        return axiosTMDB.get(url)
    },
    searchMovies(params) {
        const url = requests.searchMovies
        return axiosTMDB.get(url, { params })
    }
};

export default tmdbApi;
