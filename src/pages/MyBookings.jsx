import React, { useState } from "react";


const MyBookings = () => {
  const [pnr, setPnr] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for PNR:", pnr, "Last Name:", lastName);
  };
  return (
    <div>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary">My Bookings</h1>
      </div>
      <div className="max-w-md mx-auto bg-white p-6 my-10 rounded-lg shadow-md">
        <p>* required</p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirmation Code *
            </label>
            <input
              type="text"
              value={pnr}
              onChange={(e) => setPnr(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last name (surname or family name) *
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full btn btn-primary text-white py-2 rounded-md font-semibold transition"
          >
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyBookings;
