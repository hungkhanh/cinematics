import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputField } from "../../../components/Common/FormFields";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Please fill this"),
  matKhau: yup.string().required("Please fill this"),
});

function LoginForm({ initialValues, onSubmit, loginResponseData }) {
  const [error, setError] = useState("");
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues) => {
    try {
      setError("");
      await onSubmit?.(formValues);
      if (loginResponseData) {
        reset();
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Box
      maxWidth={400}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        padding: "2rem",
        backgroundColor: "white",
        borderRadius: "7px",
      }}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="text-[#0b847a] text-[3rem] font-semibold text-center">
          SIGN IN
        </div>
        <InputField name="taiKhoan" control={control} label="Account" />
        <InputField name="matKhau" control={control} label="Password" />

        <Box sx={{ marginTop: "1.5rem" }}>
          <button className=" mb-[0.85rem] bg-[#0b847a] hover:bg-[#0f9489] w-full rounded-md p-3 text-white text-xl">
            ENTER
          </button>
          <Link
            to="/register"
            className="text-[0.9rem] underline text-fuchsia-600 hover:text-fuchsia-400"
          >
            Don't have an account? Sign up!
          </Link>
        </Box>
      </form>
    </Box>
  );
}

export default LoginForm;
