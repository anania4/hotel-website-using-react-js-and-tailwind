import React, { useContext, useEffect, useState } from "react";
import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
import { RoomContext } from "../context/RoomContext";

const RoomSearch = () => {
  const roomFilter = useContext(RoomContext);

  const [total, setTotal] = useState(0)
  const [query,setQury] = useState(encodeURIComponent(`where[maxPerson][greater_than]=${total}`))

  useEffect(() => {
    setTotal(Number(roomFilter.adults[0]) + Number(roomFilter.kids[0]));
    setQury(`where[maxPerson][greater_than]=${total}`)
  },[roomFilter.adults, roomFilter.kids, total]);


  const maxPerson =
    Number(roomFilter.adults?.split(" ")[0]) +
    Number(roomFilter.kids?.split(" ")[0]);

    

  return (
    <React.Fragment>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary">Our Rooms</h1>
      </div>
      <BookForm />
      <div>
        <Rooms query={query} />
      </div>
    </React.Fragment>
  );
};

export default RoomSearch;
