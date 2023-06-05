import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../../../components/Common/LoadingModal/LoadingModal";
import { gradientAnimation } from "../../../utils";
import { login } from "../authSlice";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, errorMsg } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/movies");
    }
  }, [user]);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (formValues) => {
    dispatch(login(formValues));
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
        user={user}
      />
      {loading && <LoadingModal />}
    </Box>
  );
}

export default LoginPage;
