/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import { BsArrowsFullscreen } from "react-icons/bs";
import { extractText } from "../utils";

const Room = ({ room }) => {
  
  const { id, name, images, size, maxPerson, description, price, title } = room;

  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      {/*img*/}
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full "
          src={`http://localhost:3000/${images[0]?.image?.url}`}
          alt=""
        />
      </div>
      {/*details*/}
      <div
        className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2
      flex justify-center items-center uppercase font-tertiary-[1px] font-semibold text-base"
      >
        <div className="flex justify-between w-[80%]">
          {/*size*/}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div>
              <div className="flex gap-x-1">
                <div>{title}</div>
                
              </div>
            </div>
          </div>

          {/*people*/}
          <div>{maxPerson} people</div>
        </div>
      </div>
      {/*name*/}
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {extractText(description.root).slice(0, 56)}
        </p>
      </div>
      {/*button*/}
      <Link
        to={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto text-center"
      >
        book for `${price}`
      </Link>
    </div>
  );
};

export default Room;
//export default Room;
