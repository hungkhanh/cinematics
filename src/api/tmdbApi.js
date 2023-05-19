import { requests } from "../utils/constants";
import axiosTMDB from "./axiosTMDB";

const tmdbApi = {
    getBanner() {
        const url = requests.fetchTrending
        return axiosTMDB.get(url)
    }
};

export default tmdbApi;
