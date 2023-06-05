import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputField } from "../../../components/Common/FormFields";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("Please fill this"),
  password: yup.string().required("Please fill this"),
});

function RegisterForm({ initialValues, onSubmit, user }) {
  const [error, setError] = useState("");
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues) => {
    try {
      // setError("");
      await onSubmit(formValues);
      // if (user) {
      //   reset();
      // }
    } catch (error) {
      setError(error.message);
    }
  };
  // const handleFormSubmit = async (formValues) => {
  //   try {
  //     setError("");
  //     await auth.createUserWithEmailAndPassword(email, password);
  //     // Send email verification
  //     await auth.currentUser.sendEmailVerification();
  //     console.log("Email verification sent");
  //     if (regResponseData) {
  //       reset();
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  return (
    <Box
      minWidth={400}
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
        <Link
          to="/login"
          className="text-[0.9rem] text-cyan-700 hover:text-cyan-500"
        >
          {"< Back to Login"}
        </Link>
        <div className="text-[#0b847a] text-[3rem] font-semibold text-center">
          ReGistrA
        </div>
        <div className="gap-[1.5rem]">
          <InputField name="email" control={control} label="Email" />
          <InputField
            type="password"
            name="password"
            control={control}
            label="Password"
          />
        </div>

        <Box sx={{ marginTop: "1.5rem" }}>
          <button className="bg-[#0b847a] hover:bg-[#0f9489] w-full rounded-md p-3 text-white text-xl">
            SIGN UP
          </button>
        </Box>
      </form>
    </Box>
  );
}

export default RegisterForm;
