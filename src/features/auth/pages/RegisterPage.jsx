import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterForm from "../components/RegisterForm";
import { registerStart } from "../registerSlice";
import { Box } from "@mui/material";
import LoadingModal from "../../../components/Common/LoadingModal/LoadingModal";
import { gradientAnimation } from "../../../components/Common/GradientAnimation/gradientAnimation";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { regResponseData, regLoading } = useSelector(
    (state) => state.register
  );

  useEffect(() => {
    if (regResponseData) {
      navigate("/login");
    }
  }, [regResponseData]);

  const initialValues = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    hoTen: "",
  };

  const handleRegister = (formValues) => {
    dispatch(registerStart(formValues));
    return;
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
        animation: `${gradientAnimation} 5s ease infinite`,
      }}
    >
      <RegisterForm
        initialValues={initialValues}
        onSubmit={handleRegister}
        regResponseData={regResponseData}
      />
      {regLoading && <LoadingModal />}
    </Box>
  );
}

export default RegisterPage;
