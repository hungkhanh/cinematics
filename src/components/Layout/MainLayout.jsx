import { Box } from "@mui/material";
import React from "react";
import Header from "../Common/Header/Header";
import { Outlet } from "react-router-dom";
import Movies from "../../features/movie/pages/Movies";

export function MainLayout() {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box sx={{ backgroundColor: "#111" }}>
        <Movies />
      </Box>
    </Box>
  );
}
