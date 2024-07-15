import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-slate-400 py-1 shadow-lg sticky top-0">
            <div className="container m-auto flex justify-between items-center">
            <a href="/" className="flex">
          <img
            src="../../public/assets/logo.png"
            alt="logo"
            className="h-10 w-auto "
          ></img>
        </a>
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul
          className={`flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:flex space-x-10 font-semibold`}
        >
          <li>
            <Link to="/home-page" className="text-white hover:text-gray-300 mr-4">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-page" className="text-white hover:text-gray-300 mr-4">
              About
            </Link>
          </li>
          <li>
            <Link to="/add-details" className="text-white hover:text-gray-300 mr-4">
              Add
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300 mr-4">
              Log out
            </Link>
          </li>
         
        </ul>
            </div>
        </nav>
    )
}

export default Navbar;