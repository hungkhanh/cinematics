import axiosClient from "./axiosClient";

const movieManagementApi = {
    getMovieList(params) {
        const url = "/QuanLyPhim/LayDanhSachPhim";
        return axiosClient.get(url, { params });
    },
    getMovieBanner() {
        const url = '/QuanLyPhim/LayDanhSachBanner'
        return axiosClient.get(url)
    }
};

export default movieManagementApi;
