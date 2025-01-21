import React from 'react';

const SpecialEvents = () => {
  return (
    <div className="bg-[#faf5f2] flex flex-col items-center justify-center py-20  min-h-[400px]">
      <div className="text-center max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif">
        <span className="italic">Selam</span>,
      </h1>
        <p className="text-lg text-black mb-8">
        Looking for more than just a place to sleep? Home is where unique experiences unfold. We're proud to offer a calendar packed with special events, adding a touch of magic to every stay. Explore what we have in store for you!
        </p>
        <button className="bg-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">
          Events
        </button>
      </div>

    </div>
  );
};

export default SpecialEvents;