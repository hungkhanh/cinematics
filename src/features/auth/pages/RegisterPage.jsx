import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../../../components/Common/LoadingModal/LoadingModal";
import { gradientAnimation } from "../../../utils";
import { register, login } from "../authSlice";
import RegisterForm from "../components/RegisterForm";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
function RegisterPage() {
  signOut(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, errorMsg } = useSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const currentUser = auth.currentUser;
  useEffect(() => {
    if (currentUser) {
      navigate("/login");
    }
  }, [currentUser]);

  const handleRegister = (formValues) => {
    dispatch(register(formValues));
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
