import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <nav className="bg-slate-400 py-1 shadow-lg sticky top-0">
      <div className="container m-auto flex justify-between items-center">
        <a href="/" className="flex">
          <img src="/assets/logo.png" alt="logo" className="h-10 w-auto" />
        </a>
        <button className="text-white md:hidden" onClick={toggleMenu}>
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
            <Link to="/add-info" className="text-white hover:text-gray-300 mr-4">
              Add
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout} className="text-white hover:text-gray-300 mr-4">
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
