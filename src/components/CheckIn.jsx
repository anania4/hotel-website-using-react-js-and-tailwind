import React,{useState} from 'react';

import DatePicker from "react-datepicker";

//datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css"
//icons
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [endDate, setEndDate] = useState(false)
  return (
  <div className='relative flex items-center justify-center h-full '>
    {/*icons*/}
    <div className='absolute z-10 pr-8'>
      <div>
        <BsCalendar className='text-accent text-base'/>
      </div>
    </div>
    <DatePicker
      className='w-full h-full'
      selected={endDate}
      placeholderText='Check in'
      onChange={(data)=>setEndDate(date)}
    />
  </div>
  ); 
};

export default CheckIn;
