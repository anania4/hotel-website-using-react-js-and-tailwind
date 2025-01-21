import React from "react";

const Services = () => {
  return (
    <div className="bg-white py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {/* 24/7 Customer Support */}
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Customer Support"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">24/7 Customer Support</h2>
            <p className="text-gray-600">
              Our dedicated customer support team is available 24/7 to assist
              you with any inquiries or issues during your stay. Your
              satisfaction is our top priority.
            </p>
          </div>
        </div>

        {/* Local Tours and Experiences */}
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Local Tours"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              Local Tours and Experiences
            </h2>
            <p className="text-gray-600">
              Discover the beauty of Debre Tabor with our curated local tours
              and experiences. From cultural sites to scenic spots, we help you
              explore the best of the region.
            </p>
          </div>
        </div>

        {/* Hotel Room Booking */}
        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300" // Replace with the actual image URL
            alt="Hotel Room Booking"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Hotel Room Booking</h2>
            <p className="text-gray-600">
              We provide seamless hotel room booking services to ensure you
              find the perfect accommodations for your stay in Debre Tabor.
              Enjoy competitive rates and comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
