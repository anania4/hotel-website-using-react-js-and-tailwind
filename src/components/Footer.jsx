import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-6">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="" className="text-white bg-blue-600 p-3 rounded-full">
          <FaFacebookF />
        </a>
        <a href="" className="text-white bg-blue-400 p-3 rounded-full">
          <FaTwitter />
        </a>
        <a href="" className="text-white bg-red-600 p-3 rounded-full">
          <FaGoogle />
        </a>
        <a href="" className="text-white bg-pink-500 p-3 rounded-full">
          <FaInstagram />
        </a>
        <a href="" className="text-white bg-blue-700 p-3 rounded-full">
          <FaLinkedinIn />
        </a>
        <a href="" className="text-white bg-gray-800 p-3 rounded-full">
          <FaGithub />
        </a>
      </div>
      <p className="text-gray-500">© 2025 Copyright: HOME</p>
    </footer>
  );
};

export default Footer;
