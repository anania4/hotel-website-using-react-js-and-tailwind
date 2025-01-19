import React, { useContext } from "react";
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

const RoomDetails = () => {
  const { id } = useParams();
  console.log(id);

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

  const { title, description, price, size, maxPerson, images } = room;

  return (
    <section className="bg-pink-200">
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary">
          {title} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/*left*/}
          <div className="w-full h-full lg:w-[60%] px-6 bg-yellow-300">
            <h2 className="h2">{title}</h2>
            <p className="mb-8">{extractText(description.root)}</p>
            
          </div>
          {/*right*/}
          <div className="w-full h-full lg:w-[40%] bg-blue-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo nobis
            placeat dolore ullam mollitia!
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
