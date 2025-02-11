import React from "react";
import  ANU  from "../assets/img/ANU.jpg";


const Card = ({ image, title, text }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-lg">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
    <h3 className="text-lg font-bold mt-4">{title}</h3>
    <p className="text-gray-600 mt-2 text-sm">{text}</p>
  </div>
);
const AboutUs = () => {

  const cards = [
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image
      title: "Our Story",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image
      title: "Our Mission",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image
      title: "Who We Are",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  const teams =[
    {image:"ANU",
      title:"ANANIA MINDA TADESSE",
      text:"CEO"
    },
    {image:"",
      title:"ABIGIYA DESTA",
      text:"ጽዳት"
    },
    {image:"",
      title:"ADDISU ABEBE",
      text:"ጥበቃ"
    },
    {image:"",
      title:"HAMDU SHUME",
      text:"ሌላ ጥበቃ"
    },
    {image:"",
      title:"SURAFEL ABRAHAM",
      text:"የጥበቃ ሃላፊ"
    },
  ]

  return (
    <div>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary">About Us</h1>
      </div>
      <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-16">
        {/* Left Side: Text Content */}
        <div className="max-w-lg">
          <p className="text-sm text-gray-950 font-semibold uppercase">
            About Home
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Luxury Hotel in The Heart of Debre Tabor.
          </h1>
          <p className="text-gray-600 mt-4">
            Welcome to Home, where comfort meets elegance. Nestled in the heart
            of Debre Tabor, our hotel offers a warm, inviting atmosphere that
            truly feels like home. Whether you&apos;re here for business or
            leisure, enjoy beautifully designed rooms, exceptional service, and
            modern amenities tailored for your perfect stay. At Home,
            you&apos;re not just a guest—you’re family. Book your stay today and
            experience the ultimate blend of luxury and coziness!
          </p>
          <button className="mt-6 btn btn-primary text-white px-6 py-2 rounded-lg">
            Discover More
          </button>
        </div>

        {/* Right Side: Images */}
      </section>

      {/*cards*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {teams.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>

    </div>
    
  );
};

export default AboutUs;
