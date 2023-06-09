import { Box } from "@mui/material";
import React from "react";
import Movies from "../../features/movie/pages/Movies";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
