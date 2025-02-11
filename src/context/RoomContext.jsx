/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const [selectedTitle, setSelectedTitle] = useState("Title *");
  const [selectedCountry, setSelectedCountry] = useState("Country *");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(total);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        setRooms,
        total,
        setTotal,
        adults,
        setAdults,
        kids,
        setKids,
        handleClick,
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
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
/*
import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);

  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });

  const handleClick = (e) => {
    e.preventDefault();

    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setRooms(newRooms);
    console.log(newRooms);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        setRooms,
        total,
        setTotal,
        adults,
        setAdults,
        kids,
        setKids,
        handleClick,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
*/