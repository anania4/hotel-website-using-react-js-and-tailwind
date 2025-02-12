import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";

import ScrollTop from "../components/ScrollToTop";

import RoomContext from "../context/RoomContext";

import { useMutation, useQuery } from "@tanstack/react-query";
import { extractText } from "../utils";
import { BsImage } from "react-icons/bs";
import { getFacilityIcon } from "../data";
import DatePicker from "react-datepicker";
import { hotelRules } from "../constant";
import { queryClient } from "../App";
import { BookingContext } from "../context/BookingContext";
import { toast } from "sonner";

const RoomDetails = () => {
  const { id } = useParams();
  console.log(id);

  const {
    rooms,
    setRooms,
    adults,
    setAdults,
    kids,
    setKids,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,

    setSelectedRoom,

    setBookedRoomInfo,
  } = useContext(BookingContext);

  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: room,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => fetch(`/api/api/room/${id}`).then((res) => res.json()),
  });

  const handleSubmit = (e) => {
    setBookedRoomInfo({});
    if (!checkIn || !checkOut || !adults || !kids) {
      toast.error("Please select check-in and check-out dates");

      return;
    }
    setBookedRoomInfo({
      ...room
    });
    setSelectedRoom(id);

    navigate("/BookingDetails");
  };

  //const { title, description, price, images, facilities } = room;

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="">
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary">
          {room?.title} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/*left*/}
          <div className="w-full h-full ">
            <div className="bg-white max-w-2xl mx-auto py-8 px-6">
              {/* Price */}
              <h4 className="text-gray-700 text-xs font-bold uppercase mb-2">
                FORM ${room?.price}
              </h4>
              {/* Title */}
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                {room?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {!isPending && extractText(room?.description?.root)}
              </p>

              {/* Image */}
              <div className="rounded-md overflow-hidden h-[400px] w-[400px]">
                {room?.images?.map((image, index) => (
                  <>
                    <img
                      src={`http://localhost:3000/${image?.image?.url}`}
                      alt={image?.image?.alt}
                      className="w-full"
                    />
                  </>
                ))}
              </div>
            </div>
            <div className="bg-white py-8 px-6">
              {/* Amenities Section */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Amenities
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Enjoy a variety of amenities during your stay. Our facilities
                are designed to provide comfort and convenience for all our
                guests.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {room?.facilities?.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <i className={`text-2xl text-brown-500 mb-2`}>
                      {getFacilityIcon(amenity?.name).icon}{" "}
                    </i>
                    <span className="text-gray-700 text-sm">
                      {amenity?.name}
                    </span>
                  </div>
                ))}
              </div>
              {/* Hotel Rules Section */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Hotel Rules
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{}</p>
              <ul className="text-gray-700">
                {room?.hotelRules?.map((rule, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <i className="fas fa-check text-brown-500 mr-2"></i>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/*right*/}
          <div className="w-full h-full lg:w-[40%] bg-blue-300">
            <div className="bg-gray-100 p-6 rounded-md max-w-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Reservation
              </h2>

              {/* Check-In */}
              <div className="mb-4">
                <h3 className="text-gray-700 uppercase text-xs tracking-wide mb-1">
                  CHECK - IN:
                </h3>

                <DatePicker
                  className="w-full h-full"
                  selected={checkIn}
                  placeholderText="Check in"
                  onChange={(date) => setCheckIn(date)}
                />
              </div>

              {/* Check-Out */}
              <div className="mb-4">
                <h3 className="text-gray-700 uppercase text-xs tracking-wide mb-1">
                  CHECK - OUT:
                </h3>
                <DatePicker
                  className="w-full h-full"
                  selected={checkOut}
                  placeholderText="Check out"
                  onChange={(date) => setCheckOut(date)}
                />
              </div>

              {/* Rooms */}
              <div className="mb-4">
                <h3 className="text-gray-700 uppercase text-xs tracking-wide mb-1">
                  ROOMS:
                </h3>
                <select
                  onChange={(val) => setRooms(val.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
                >
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                </select>
              </div>

              {/* Adults */}
              <div className="mb-4">
                <h3 className="text-gray-700 uppercase text-xs tracking-wide mb-1">
                  ADULTS:
                </h3>
                <select
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
                >
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                </select>
              </div>

              {/* Children */}
              <div className="mb-6">
                <h3 className="text-gray-700 uppercase text-xs tracking-wide mb-1">
                  CHILD:
                </h3>
                <select
                  onChange={(e) => setKids(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
                >
                  <option>0 Children</option>
                  <option>1 Children</option>
                  <option>2 Children</option>
                </select>
              </div>

              {/* Total Price */}
              <div className="flex items-center text-gray-800 mb-6">
                <h2 className="text-xl font-semibold ">Your Price</h2>
                <span className="ml-auto">${room?.price * rooms}</span>
              </div>

              {/* Book Now Button */}
              <button onClick={handleSubmit} className="btn btn-primary w-full">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
