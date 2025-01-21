import React, { useState } from "react";
import AdultDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import DatePicker from "react-datepicker";


const BookForm = () => {
  const [startDate, setstartDate] = useState(false);
  return (
    <form className="h-[300px] w-full lg:h-[70px] ">
      <div className="bg-gray-200 py-4 flex items-center justify-between px-4">
        {/* Check-In */}
        <div className="flex items-center">
          <span className="text-gray-700 text-sm mr-2">Check in</span>
          <DatePicker
            className="w-full h-full"
            selected={startDate}
            placeholderText="Check in"
            onChange={(data) => setstartDate(date)}
          />
        </div>
        {/* Check-Out */}
        <div className="flex items-center">
          <span className="text-gray-700 text-sm mr-2">Check out</span>
          <DatePicker
            className="w-full h-full"
            selected={startDate}
            placeholderText="Check in"
            onChange={(data) => setstartDate(date)}
          />
        </div>
        {/* Adults Dropdown */}
        <div className="flex items-center">
          <select className="text-gray-700 text-sm p-1  focus:outline-none">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
            <option>5 Adults</option>
            <option>6 Adults</option>
            <option>7 Adults</option>
          </select>
        </div>
        {/* Children Dropdown */}
        <div className="flex items-center">
          <select className="text-gray-700 text-sm p-1  focus:outline-none">
            <option>No Kids</option>
            <option>1 Kid</option>
            <option>2 Kids</option>
            <option>3 Kids</option>
            <option>4 Kids</option>
            <option>5 Kids</option>
            <option>6 Kids</option>
          </select>
        </div>
        {/* Check Now Button */}
        <button className="bg-brown-500 text-white py-2 px-4 rounded-md hover:bg-brown-600 transition-colors text-sm">
          CHECK AVAILABILITY
        </button>
      </div>
    </form>
  );
};

export default BookForm;
