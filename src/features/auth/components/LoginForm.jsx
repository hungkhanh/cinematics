import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputField } from "../../../components/Common/FormFields";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="text-[#0b847a] text-[3rem] font-semibold text-center">
          PORTAL
        </div>
        <InputField name="taiKhoan" control={control} label="Account" />
        <InputField name="matKhau" control={control} label="Password" />

        <Box sx={{ marginTop: "1.5rem" }}>
          <button className="font-semibold mb-[0.8rem] bg-[#0b847a] hover:bg-[#0f9489] w-full rounded-md p-3 text-white text-xl">
            ENTER
          </button>
          <Link
            to="/register"
            className="text-[0.9rem] underline text-fuchsia-600 hover:text-fuchsia-400"
          >
            Don't have an account? Sign up!
          </Link>
          <Link
            to="/movies"
            className="inline-block text-center w-full mt-7 text-white px-4 py-2 rounded-xl bg-gradient-to-r 
            from-pink-600 to-rose-500 hover:from-rose-500 hover:to-pink-600"
          >
            <div className="">{"Back to Showcase"}</div>
          </Link>
        </Box>
      </form>
    </Box>
  );
}

export default LoginForm;
