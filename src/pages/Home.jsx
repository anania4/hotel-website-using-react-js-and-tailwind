import React, { useContext } from 'react';
import Rooms, {  } from "../components/Rooms";
import BookForm from '../components/BookForm';
import HeroSlider from '../components/HeroSlider';
import { RoomContext } from '../context/RoomContext';


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
  </>
  );
};

export default Home;
