import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import { MainLayout } from "./components/Layout";
import Movies from "./features/movie/pages/Movies";
import TV from "./features/tv/pages/TV";
import MovieDetail from "./features/movie/components/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<MainLayout />}>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:movie_id" element={<MovieDetail />} />
        <Route path="/tv" element={<TV />} />
      </Route>
    </Routes>
  );
}

export default App;
