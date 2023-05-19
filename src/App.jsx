import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import { MainLayout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
