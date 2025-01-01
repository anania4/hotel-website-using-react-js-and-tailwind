import React, {createContext, useEffect, useState } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setrooms] = useState(roomData);
  console.log(rooms);
  
  return (
    <RoomContext.Provider value={{rooms}}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
