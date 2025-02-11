/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);

  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [selectedTitle, setSelectedTitle] = useState("Title *");
  const [selectedCountry, setSelectedCountry] = useState("Country *");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState(null);

  const titles = ["Mr.", "Ms."];
  const countries = [
    "Ethiopia",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ];

  return (
    <BookingContext.Provider
      value={{
        rooms,
        setRooms,
        total,
        setTotal,
        adults,
        setAdults,
        kids,
        setKids,
      
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,

        selectedTitle,
        setSelectedTitle,
        selectedCountry,
        setSelectedCountry,
        acceptedTerms,
        setAcceptedTerms,
        titles,
        countries,

        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,
        address,
        setAddress,
        city,
        setCity,

        selectedRoom,
        setSelectedRoom,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
