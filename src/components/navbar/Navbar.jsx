import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/Firebase";
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
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/home-page" className="flex items-center">
          <img src="/assets/logo.png" alt="logo" className="h-10 w-auto" />
        </a>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          ☰
        </button>
        <ul
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 font-semibold items-center ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li>
            <Link to="/home-page" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-page" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/add-info" className="text-white hover:text-gray-300">
              Add
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-blue-500 to-blue-950 text-white font-bold py-1 px-2 rounded-md shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
