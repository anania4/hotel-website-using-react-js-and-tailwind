import React, { useContext, useEffect } from "react";
import { RoomContext } from "../context/RoomContext";

import Room from "../components/Room";
import { useQuery } from "@tanstack/react-query";
import Loading from "./ui/Loading";
import Error from "./ui/Error";

const Rooms = () => {
  //const { rooms } = useContext(RoomContext);

  const { isPending, error, data } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => fetch("/api/api/room").then((res) => res.json()),
  });

  if (isPending)
    return <Loading />;

  if (error) return <Error />;

  
  return (
    <section className="py-24">
      <div className="container mx-auto ">
        <div
          className="grid grid-cols-1 max-w-sm mx-auto gap-[30px]
        lg:grid-cols-3 lg:max-w-none lg:mx-0 "
        >
          {data?.docs.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
