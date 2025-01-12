import React,{ useContext } from 'react';
import { useParams } from "react-router-dom";

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

import ScrollTop from "../components/ScrollToTop";

import RoomContext from "../context/RoomContext";

import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const rooms = useContext(RoomContext);
  const {id} = useParams()
  console.log(rooms);

  // const room = rooms.find((room) =>{
  //   return room.id === Number(id);
  // });
  // console.log(room);

  return <div>RoomDetails</div>;
};

export default RoomDetails;
