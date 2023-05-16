import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterForm from "../components/RegisterForm";
import { registerStart } from "../registerSlice";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { regResponseData } = useSelector((state) => state.register);

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
    <div>
      <RegisterForm
        initialValues={initialValues}
        onSubmit={handleRegister}
        regResponseData={regResponseData}
      />
    </div>
  );
}

export default RegisterPage;
