import axios from "axios";

const axiosTMDBImage = axios.create({
    baseURL: "https://image.tmdb.org/t/p/original",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
axiosTMDBImage.interceptors.request.use(
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
axiosTMDBImage.interceptors.response.use(
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

export default axiosTMDBImage;
