import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputField } from "../../../components/Common/FormFields";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Please fill this"),
  matKhau: yup.string().required("Please fill this"),
  email: yup.string().required("Please fill this"),
  soDt: yup.string().required("Please fill this"),
  maNhom: yup.string().required("Please fill this"),
  hoTen: yup.string().required("Please fill this"),
});

function RegisterForm({ initialValues, onSubmit, regResponseData }) {
  const [error, setError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues) => {
    try {
      setError("");
      await onSubmit?.(formValues);
      if (regResponseData) {
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
        border: "1px solid black",
        padding: "2rem",
      }}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Typography variant="h3" textAlign={"center"}>
          Registration
        </Typography>
        <InputField name="taiKhoan" control={control} label="Account" />
        <InputField name="matKhau" control={control} label="Password" />
        <InputField name="email" control={control} label="Email" />
        <InputField name="soDt" control={control} label="Phone Number" />
        <InputField name="maNhom" control={control} label="Group Name" />
        <InputField name="hoTen" control={control} label="Name" />

        <Box sx={{ marginTop: "1.5rem" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting && <CircularProgress size={16} color="primary" />}
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default RegisterForm;
