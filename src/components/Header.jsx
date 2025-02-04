/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "../context/RoomContext";
import { Link } from "react-router-dom";

const Header = ({}) => {
  const [header, setHeader] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg " : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/*logo*/}
        <img src="../assets.img/logo.jpg" alt="" />

        {/*nav*/}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 lg:gap-x-8 
        font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
        >
          <Link to="/" className="hover:text-accent transition">
            Home
          </Link>
          <Link to="/" className="hover:text-accent transition">
            Rooms
          </Link>
          <Link to="/MyBookings" className="hover:text-accent transition">
            My Bookings
          </Link>
          <Link to="/ContactUs" className="hover:text-accent transition">
            Contact Us
          </Link>
          <Link to="/AboutUs" className="hover:text-accent transition">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
