import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { Box, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../loginSlice";
import LoadingModal from "../../../components/Common/LoadingModal/LoadingModal";
import { gradientAnimation } from "../../../utils";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginResponseData, loginLoading } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    if (loginResponseData) {
      navigate("/movies");
    }
  }, [loginResponseData]);

  const initialValues = {
    taiKhoan: "",
    matKhau: "",
  };

  const handleLogin = (formValues) => {
    dispatch(loginStart(formValues));
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
        animation: `${gradientAnimation} 3s ease infinite`,
      }}
    >
      <LoginForm
        initialValues={initialValues}
        onSubmit={handleLogin}
        loginResponseData={loginResponseData}
      />
      {loginLoading && <LoadingModal />}
    </Box>
  );
}

export default LoginPage;
