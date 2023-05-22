import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import { MainLayout } from "./components/Layout";
import Movies from "./features/movie/pages/Movies";
import MovieDetail from "./features/movie/components/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<MainLayout />}>
        <Route path="/main" element={<Movies />} />
        <Route path="/movie/:movie_id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
