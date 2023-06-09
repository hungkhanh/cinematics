import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MainLayout } from "./components/Layout";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import MovieDetail from "./features/movie/pages/MovieDetail";
import Movies from "./features/movie/pages/Movies";
import SearchPage from "./features/search/pages/SearchPage";
import TVDetail from "./features/tv/components/TVDetail";
import TV from "./features/tv/pages/TV";

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
      <Route element={<MainLayout />}>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:movie_id" element={<MovieDetail />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/tv/:TV_id" element={<TVDetail />} />
        <Route path="/search_page" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
