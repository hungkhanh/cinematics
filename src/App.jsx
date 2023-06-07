import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MainLayout } from "./components/Layout";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import MovieDetail from "./features/movie/components/MovieDetail";
import Movies from "./features/movie/pages/Movies";
import TV from "./features/tv/pages/TV";
import TestFb from "./components/testFb";
import TVDetail from "./features/tv/components/TVDetail";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/movies");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/test" element={<TestFb />} />
      <Route element={<MainLayout />}>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:movie_id" element={<MovieDetail />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/tv/:TV_id" element={<TVDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
