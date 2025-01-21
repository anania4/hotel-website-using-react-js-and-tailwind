import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';


const RoomGallery = ({ images }) => {
  return (
    <div className="relative bg-gray-900 ">
      <div className="flex justify-center py-4">
        <h2 className="text-3xl font-bold text-white">Gallery</h2>
      </div>
      <div className="relative">
        <Swiper
            modules={[Navigation, Pagination,A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Room Gallery Image ${index + 1}`}
                className="size-2/3 object-contain m-auto" // Ensure the image covers
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoomGallery;