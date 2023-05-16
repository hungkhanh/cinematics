import axiosClient from "./axiosClient";

const userManagementApi = {
    signUp(userData) {
        const url = "/QuanLyNguoiDung/DangKy";
        return axiosClient.post(url, userData);
    },
};

export default userManagementApi;
