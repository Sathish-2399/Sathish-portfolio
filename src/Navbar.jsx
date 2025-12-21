import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold gradient-text">
            Sathish B
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-white">
            <Link
              to="/home"
              className="hover:text-blue-400 transition-colors text-sm lg:text-base"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-400 transition-colors text-sm lg:text-base"
            >
              About
            </Link>

            <Link
              to="/skills"
              className="hover:text-blue-400 transition-colors text-sm lg:text-base"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              className="hover:text-blue-400 transition-colors text-sm lg:text-base"
            >
              Projects
            </Link>

            <Link
              to="/certificates"
              className="hover:text-blue-400 transition-colors text-sm lg:text-base"
            >
              Certificates
            </Link>

            <Link
              to="/coding"
              className="hover:text-blue-400 transition-colors text-sm lg:text-base"
            >
              Coding
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors text-sm lg:text-base"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {open && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 py-4">
          <div className="flex flex-col items-center space-y-6">
            <Link
              to="/home"
              onClick={() => setOpen(false)}
              className="text-white hover:text-blue-400 transition-colors text-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-white hover:text-blue-400 transition-colors text-lg"
            >
              About
            </Link>
            <Link
              to="/skills"
              onClick={() => setOpen(false)}
              className="text-white hover:text-blue-400 transition-colors text-lg"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className="text-white hover:text-blue-400 transition-colors text-lg"
            >
              Projects
            </Link>
            <Link
              to="/certificates"
              onClick={() => setOpen(false)}
              className="text-white hover:text-blue-400 transition-colors text-lg"
            >
              Certificates
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-white hover:text-blue-400 transition-colors text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
