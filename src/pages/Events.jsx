/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const events = [
  {
    title: "Hall rental for events",
    date: "17 - 20 Oct, 2025 | 11:00AM - 04:00PM",
    location: "Debre Tabor, Ethiopia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae. Curabitur at amet, enim sit commodo semper lectus phasellus.",
    image: "https://source.unsplash.com/200x200/?event,party",
  },
  {
    title: "3 Days Wedding Party",
    date: "17 - 20 Oct, 2025 | 11:00AM - 04:00PM",
    location: "Debre Tabor, Ethiopia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae. Curabitur at amet, enim sit commodo semper lectus phasellus.",
    image: "https://source.unsplash.com/200x200/?wedding,couple",
  },
  {
    title: "Pool Party",
    date: "17 - 20 Oct, 2025 | 11:00AM - 04:00PM",
    location: "Debre Tabor, Ethiopia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae. Curabitur at amet, enim sit commodo semper lectus phasellus.",
    image: "https://source.unsplash.com/200x200/?pool,party",
  },
  {
    title: "Live Dj Night",
    date: "17 - 20 Oct, 2025 | 11:00AM - 04:00PM",
    location: "Debre Tabor, Ethiopia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis cum tempor vitae. Curabitur at amet, enim sit commodo semper lectus phasellus.",
    image: "https://source.unsplash.com/200x200/?food,lunch",
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex max-w-3xl mx-auto mb-4">
      <img
        src={event.image}
        alt={event.title}
        className="w-48 h-48 object-cover rounded-xl"
      />
      <div className="ml-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold">{event.title}</h2>
          <p className="text-gray-500 text-sm mt-1">
            {event.date} | {event.location}
          </p>
          <p className="text-gray-600 text-sm mt-2">{event.description}</p>
        </div>
        <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg w-fit hover:bg-gray-700">
          MORE DETAILS
        </button>
      </div>
    </div>
  );
};
const Events = () => {
  return (
    <div>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary">Events</h1>
      </div>
      {/*map*/}
      <div className="p-6">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default Events;
