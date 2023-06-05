import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../../../components/Common/LoadingModal/LoadingModal";
import { gradientAnimation } from "../../../utils";
import { register, login } from "../authSlice";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, errorMsg } = useSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleRegister = (formValues) => {
    dispatch(register(formValues));
    if (!errorMsg) {
      navigate("/login");
    }
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
      <RegisterForm
        initialValues={initialValues}
        onSubmit={handleRegister}
        user={user}
      />
      {loading && <LoadingModal />}
    </Box>
  );
}

export default RegisterPage;
