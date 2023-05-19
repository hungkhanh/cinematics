import axios from "axios";

const axiosTMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
axiosTMDB.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token = localStorage.getItem("token");

        // token && console.log(JSON.parse(token));

        if (config.headers && token)
            config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosTMDB.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosTMDB;
