import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

import ScrollTop from "../components/ScrollToTop";

import RoomContext from "../context/RoomContext";

import { FaCheck } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { extractText } from "../utils";
import { BsImage } from "react-icons/bs";
import { facilities, getFacilityIcon } from "../data";
import DatePicker from "react-datepicker";
import { hotelRules } from "../constant";

const RoomDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [startDate, setstartDate] = useState(false);
  const {
    isPending,
    error,
    data: room,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => fetch(`/api/api/room/${id}`).then((res) => res.json()),
  });

  
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { title, description, price, size, maxPerson, images,  } =
    room;

  return (
    <section className="">
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary">
          {title} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/*left*/}
          <div className="w-full h-full ">
            <div className="bg-white max-w-2xl mx-auto py-8 px-6">
              {/* Price */}
              <h4 className="text-gray-700 text-xs font-bold uppercase mb-2">
                FORM $55.00
              </h4>
              {/* Title */}
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Luxury Room
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
                turpis cum tempor vitae. Curabitur at amet, enim sit commodo
                semper lectus phasellus. et eleifend ut. Porta proin malesuada
                volutpat purus.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At quam ac ipsum volutpat non. Duis sagittis, sollicitudin eget
                tristique consectetur et facilisi.
              </p>

              {/* Image */}
              <div className="rounded-md overflow-hidden h-[400px] w-[400px]">
                <img
                  src="https://i.ibb.co/Z89wQnC/luxury-room.png" // Replace with the correct path
                  alt="Luxury Room"
                  className="w-full"
                />
              </div>
            </div>
            <div className="bg-white py-8 px-6">
              {/* Amenities Section */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Amenities
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing integer ultrices suspendisse varius etiam est. Est,
                felis, tempus nec vitae orci sodales Metus, velit nec at diam in
                sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio
                est. Sit semper et velit fusce.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {facilities.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <i
                      className={`text-2xl text-brown-500 mb-2`}
                    >{amenity.icon} </i>
                    <span className="text-gray-700 text-sm">
                      {amenity.name}
                    </span>
                  </div>
                ))}
              </div>
              {/* Hotel Rules Section */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Hotel Rules
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing integer ultrices suspendisse varius etiam est. Est,
                felis, tempus nec vitae orci sodales Metus, velit nec at diam in
                sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio
                est. Sit semper et velit fusce.
              </p>
              <ul className="text-gray-700">
                {hotelRules.map((rule, index) => (
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
                  selected={startDate}
                  placeholderText="Check in"
                  onChange={(data) => setstartDate(date)}
                />
              </div>

              {/* Check-Out */}
              <div className="mb-4">
                <h3 className="text-gray-700 uppercase text-xs tracking-wide mb-1">
                  CHECK - OUT:
                </h3>
                <DatePicker
                  className="w-full h-full"
                  selected={startDate}
                  placeholderText="Check in"
                  onChange={(data) => setstartDate(date)}
                />
              </div>

              {/* Rooms */}
              <div className="mb-4">
                <h3 className="text-gray-700 uppercase text-xs tracking-wide mb-1">
                  ROOMS:
                </h3>
                <select className="w-full p-2 border border-gray-300 rounded-md text-gray-800">
                  <option>1 Room</option>
                  <option>2 Rooms</option>
                  <option>3 Rooms</option>
                </select>
              </div>

              {/* Adults */}
              <div className="mb-4">
                <h3 className="text-gray-700 uppercase text-xs tracking-wide mb-1">
                  ADULTS:
                </h3>
                <select className="w-full p-2 border border-gray-300 rounded-md text-gray-800">
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
                <select className="w-full p-2 border border-gray-300 rounded-md text-gray-800">
                  <option>0 Children</option>
                  <option>1 Children</option>
                  <option>2 Children</option>
                </select>
              </div>

              {/* Extra Services */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Extra Services
              </h2>

              <div className="mb-2">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 border-gray-300 rounded"
                  />
                  Cleaning Fee
                  <span className="ml-auto">$9.0</span>
                </label>
              </div>
              <div className="mb-2">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 border-gray-300 rounded"
                  />
                  Free
                  <span className="ml-auto">$9.0</span>
                </label>
              </div>
              <div className="mb-6">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 border-gray-300 rounded"
                  />
                  Parking
                  <span className="ml-auto">$7.0</span>
                </label>
              </div>

              {/* Total Price */}
              <div className="flex items-center text-gray-800 mb-6">
                <h2 className="text-xl font-semibold ">Your Price</h2>
                <span className="ml-auto">$9.0</span>
              </div>

              {/* Book Now Button */}
              <button className="w-full bg-brown-500 text-white py-3 rounded-md hover:bg-brown-600 transition-colors">
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
