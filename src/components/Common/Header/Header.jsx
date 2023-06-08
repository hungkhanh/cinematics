import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../../features/auth/authSlice";
import "./Header.css";

function Header() {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? "nav-link activated" : "nav-link";
  };

  const [showNav, setShowNav] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 150) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const dispatch = useDispatch();
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  const handleLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    return;
  };

  return (
    <div
      className={`${
        showNav
          ? "bg-[#080808] border-b-2 border-b-orange-600 shadow-amber-600/50 shadow-lg"
          : ""
      } w-full fixed top-0 z-50 text-white flex justify-between 
      items-center py-[2.25rem] transition-all ease-in delay-[150ms] `}
    >
      <div
        className={`flex items-center gap-2 fixed z-50 left-9 text-[1.9rem] font-bold ${
          showNav ? "text-rose-600" : "text-rose-700"
        }`}
      >
        <Link
          to="/movies"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <i className="fa-solid fa-clapperboard z-50 mr-2"></i>
          Cinematics
        </Link>
      </div>
      <div
        className="hidden lg:flex lg:gap-5 font-semibold items-center
       fixed lg:left-[31%] xl:left-[35%] 2xl:left-[39%] z-50 "
      >
        <NavLink
          className={navLinkStyles}
          to="/movies"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Movies
        </NavLink>
        <NavLink
          className={navLinkStyles}
          to="/tv"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          TV
        </NavLink>
        <NavLink className={navLinkStyles} to="/search_page">
          Search
        </NavLink>
        <NavLink className={navLinkStyles} to="/news">
          News
        </NavLink>
        <NavLink className={navLinkStyles} to="/wishlist">
          Whishlist
        </NavLink>
      </div>

      <div className="flex font-bold fixed right-9 z-50 ">
        {!isLoggedIn ? (
          <div className="flex gap-3">
            <Link
              to="/login"
              className="flex items-center gap-1 bg-white text-black py-2 px-4 rounded-2xl 
              transition ease-in-out hover:bg-emerald-500 hover:text-white hover:-translate-0.5 hover:scale-110 duration-100
              "
            >
              <AutoFixHighIcon />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className=" py-2 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500
               hover:from-purple-500 hover:to-pink-500 hover:cursor-pointer
               transition ease-in-out hover:-translate-0.5 hover:scale-110 duration-100"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-white text-black py-2 px-4 rounded-2xl 
            ease-in-out hover:-translate-0.5 hover:scale-110 duration-100 hover:bg-red-700 hover:text-white"
            onClick={handleLogoutClick}
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
