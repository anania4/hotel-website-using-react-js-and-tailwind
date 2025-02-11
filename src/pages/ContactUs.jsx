import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary">Contact Us</h1>
      </div>
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Explore Our Office Worldwide
        </h2>

        {/* Contact Info */}
        <div className="flex justify-center space-x-12 text-gray-700 text-lg mb-8">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-primary" />
            <span>Debre Tabor, Ethiopia</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-primary" />
            <span>(+251) 92444 1555 </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-primary" />
            <span>HOME@dtu.com</span>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-md"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border rounded-md h-24"
              ></textarea>
              <button className="w-full btn btn-primary text-white py-3 rounded-md ">
                SUBMIT NOW
              </button>
            </form>
          </div>

          {/* Embedded Google Map for Debre Tabor */}
          <div className="rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.85064528987!2d38.01407800616992!3d11.856440024920316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16431187fd653dfb%3A0xd362b62311f807f1!2sDebre%20Tabor!5e0!3m2!1sen!2sus!4v1706782512345"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
