import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
