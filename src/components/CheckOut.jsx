import { useContext } from "react";
import DatePicker from "react-datepicker";

//datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
//icons
import { BsCalendar } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";

const CheckOut = () => {
  const {  checkOut,
    setCheckOut, } = useContext(RoomContext);
  return (
    <div className="relative flex items-center justify-end h-full">
      {/*icons*/}
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={checkOut}
        placeholderText="Check in"
        onChange={(date) => setCheckOut(date)}
      />
    </div>
  );
};

export default CheckOut;
