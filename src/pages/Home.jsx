/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Rooms, {  } from "../components/Rooms";
import BookForm from '../components/BookForm';
import HeroSlider from '../components/HeroSlider';
import { RoomContext } from '../context/RoomContext';
import Services from '../components/Services';
import CustomerReviews from '../components/CustomerReviews';
import RoomGallery from '../components/Gallery';

import imag from "../assets/img/room.jpg";
import SpecialEvents from '../components/SpecialEvents';
import CounterPage from '../components/CounterPage';


const Home = ({}) => {
  
  const rooms = useContext(RoomContext)
  console.log(rooms);

  return (
  <>
    <HeroSlider/>
    <div className='container mx-auto relative '>
      <div className='bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute
      lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12 max-w-[1120px]'> 
      <BookForm/>
      </div>
    </div> 
    <Rooms/>
    <Services/>
    <SpecialEvents/>
    <RoomGallery images={[imag,imag,imag]}/>
    <CounterPage/>
    <CustomerReviews/>
  </>
  );
};

export default Home;
