import axiosClient from "./axiosClient";

const movieManagementApi = {
    getMovie(params) {
        const url = "/QuanLyPhim/LayDanhSachPhim";
        return axiosClient.get(url, { params });
    },
};

export default movieManagementApi;
