import React, { useContext, useState } from "react";
import { Listbox, Switch } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { BookingContext } from "../context/BookingContext";
import { toast } from "sonner";
import Loading from "../components/ui/Loading";

export default function BookingDetails() {
  const {
    rooms,
    total,
    adults,
    kids,
    checkIn,
    checkOut,

    selectedTitle,
    setSelectedTitle,
    selectedCountry,
    setSelectedCountry,
    acceptedTerms,
    setAcceptedTerms,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    city,
    setCity,

    selectedRoom,
  } = useContext(BookingContext);

  const titles = ["Mr.", "Ms."];
  const countries = [
    "Ethiopia",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ];

  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();

  // Mutations
  const mutation = useMutation({
    mutationFn: (roomData) =>
      fetch(`/api/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roomData),
      })
        .then((response) => response.json())
        .catch((error) => error),

    onSuccess: (data) => {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !selectedTitle ||
      !selectedCountry ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !city
    ) {
      toast.error("Please fill out all the fields");
      return;
    }
    /*
    console.log({
      rooms,
      total,
      adults,
      kids,
      checkIn,
      checkOut,
      selectedTitle,
      selectedCountry,
      acceptedTerms,
      titles,
      countries,
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
    });
    */

    mutation.mutate({
      rooms,
      total,
      adults,
      kids,
      checkIn,
      checkOut,
      selectedTitle,
      selectedCountry,
      acceptedTerms,
      titles,
      countries,
      name: firstName,
      lastName,
      email,
      phone,
      address,
      city,
      room: selectedRoom,
    });
  };

  if (mutation.isSuccess) {
    console.log(mutation.data);
    const error = mutation.data.error;
    if (error) toast.error(error[0]?.message);
    else {
      toast.success("Booking successful");
      const bookingId = mutation.data.id;
      navigate(`/BookingSummary/${bookingId}`);

      setTimeout(() => {
        navigator;
      }, 100);
    }
  }

  // if (mutation.isPending) return <Loading />;

  return (
    <React.Fragment>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary">
          Booking Details
        </h1>
      </div>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        {/* Contact Info */}
        <h2 className="text-xl font-semibold mb-4">
          Contact Info <span className="text-red-500">*</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4">
            <select
              value={selectedTitle}
              onChange={(e) => setSelectedTitle(e.target.value)}
              className="border p-2 rounded bg-white"
              required
            >
              <option disabled>Title *</option>
              {titles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="tel"
              placeholder="Phone"
              className="border p-2 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <p className="text-sm text-gray-500 mt-1 ml-80">
            This is the email we will send your confirmation to.
          </p>

          {/* Address Section */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Address</h2>
          <div className="grid grid-cols-2 gap-4">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border p-2 rounded bg-white"
              required
            >
              <option disabled>Country *</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Address"
              className="border p-2 rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          {/* Policies Section */}
          <h2 className="text-xl font-semibold mb-4">Policies:</h2>
          <div className="bg-yellow-100 p-4 rounded-md">
            <div className="flex justify-between text-sm font-medium">
              <span>Check-in</span>
              <span>Check-out</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>after 2:00 pm</span>
              <span>before 12:00 pm</span>
            </div>
            <h3 className="font-semibold mt-2">VIP Room</h3>
            <p className="text-sm font-medium mt-2">Guarantee Policy</p>
            <p className="text-sm">
              A valid Kebele ID card or Passport is required to guarantee the
              booking
            </p>
            <p className="text-sm font-medium mt-2">Cancel Policy</p>
            <p className="text-sm">
              24hrs prior to arrival date to avoid a one-night penalty - No show
              100% penalty
            </p>
          </div>
          {/* Privacy & Booking Terms */}
          <h2 className="text-xl font-semibold mt-6 mb-4">
            Privacy & Booking Terms
          </h2>
          <p className="text-sm">
            By completing this booking, I agree with the Booking Conditions.
          </p>
          <div className="flex items-start mt-3">
            <Switch
              checked={acceptedTerms}
              onChange={setAcceptedTerms}
              className={`${
                acceptedTerms ? "bg-green-500" : "bg-gray-300"
              } relative inline-flex h-5 w-10 items-center rounded-full`}
            >
              <span
                className={`${
                  acceptedTerms ? "translate-x-5" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition`}
              />
            </Switch>
            <label className="ml-3 text-sm">
              * Privacy & Booking Terms.
              <p className="text-xs text-gray-600">
                Please tick this box to confirm that you have read, understand,
                and accept the booking terms which apply to your itinerary,
                particularly the applicable rate policies. Details of how we
                handle your personal data are set out here
                <a href="#" className="text-blue-600 underline">
                  {" "}
                  Privacy Policy
                </a>
                .
              </p>
            </label>
          </div>
          {/* Confirm Booking Button */}
          <button
            type="submit"
            className={`mt-4 w-full p-3 text-white rounded-lg ${
              acceptedTerms
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleSubmit}
            disabled={!acceptedTerms}
          >
            CONFIRM BOOKING
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
