/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AdultDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import DatePicker from "react-datepicker";

const BookForm = () => {
  
  return (
    <form className="h-[300px] bg-green-100 lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row" >
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultDropdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
      </div>
    </form>
  );
};

export default BookForm;
