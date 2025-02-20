import React, { useState } from "react";
import Logo from "../assets/EA_Sports.png";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-800 text-gray-300">
      <div>
        <img src={Logo} alt="" style={{ width: "50px" }} />
      </div>
      {/*menu*/}
      <ul className="md:flex hidden">
        <li className="font-raleway px-4 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="font-raleway px-4 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="font-raleway px-4 cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="font-raleway px-4 cursor-pointer">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="font-raleway px-4 cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile Menus*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-600 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-1xl uppercase font-semibold">Home</li>
        <li className="py-6 text-1xl uppercase font-semibold">About</li>
        <li className="py-6 text-1xl uppercase font-semibold">Skills</li>
        <li className="py-6 text-1xl uppercase font-semibold">Work</li>
        <li className="py-6 text-1xl uppercase font-semibold">Contact</li>
      </ul>
      {/*Social icons*/}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-green-500 rounded-full rounded-1-none">
            <a className="flex justify-between items-center w-full text-gray-800"
              href="/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-green-500 rounded-full rounded-1-none">
            <a className="flex justify-between items-center w-full text-gray-800"
              href="/"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-green-500 rounded-full rounded-1-none">
            <a
              className="flex justify-between items-center w-full text-gray-800"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-green-500 rounded-full rounded-1-none">
            <a
              className="flex justify-between items-center w-full text-gray-800"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
