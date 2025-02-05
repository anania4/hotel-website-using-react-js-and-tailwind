import React, { useState } from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      text: "I had a wonderful experience booking a room through Home. The process was seamless and the staff was incredibly helpful. Highly recommend!",
      author: "Kalkidan Getachew",
    },
    {
      text: "The local tours arranged by Home were outstanding. The team went above and beyond to ensure we had a memorable experience in Debre Tabor. Great service!",
      author: "Bereket Abdela",
    },
    {
      text: "I was impressed by the quality of the hotel room I booked through Home. The room was clean, spacious, and comfortable. Will definitely book again!",
        author: "Dagmawi Belete",
    },
    {
        text: "I had a wonderful experience booking a room through Home. The process was seamless and the staff was incredibly helpful. Highly recommend!",
        author: "Rediet Birhanu",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="bg-black text-white py-12">
      <h1 className="text-4xl font-bold text-center mb-8">What they say about us</h1>
      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-lg italic mb-4">{`"${reviews[currentIndex].text}"`}</p>
        <p className="font-semibold">{reviews[currentIndex].author}</p>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="text-sm text-gray-400">
            {currentIndex + 1} / {reviews.length}
          </span>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
