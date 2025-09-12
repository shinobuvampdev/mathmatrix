import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <div className="text-black w-full h-auto fixed top-0 bg-white z-10 shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-500">
              Telepathy IT Solutions
            </h1>
            <p className="px-1">IT Consulting Company</p>
          </div>

          <ul className="hidden md:flex items-center">
            <li>
              <Link to="/products" className="hover:underline p-4">
                <Button className="text-white bg-blue-500 p-2 rounded-2xl">
                  Products
                </Button>
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#home" className="hover:underline p-4">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" className="hover:underline p-4">
                About Us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#solutions" className="hover:underline p-4">
                Solutions
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="hover:underline p-4">
                Contact Us
              </HashLink>
            </li>
          </ul>
          <div className="md:hidden items-end">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <XMarkIcon className="text-blue-500 h-8 w-8" />
              ) : (
                <Bars3Icon className="text-blue-500 h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <ul className="md:hidden flex flex-col items-center bg-white border-t border-gray-200 py-4">
            <li>
              <a
                href="#home"
                className="hover:underline p-2 block"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline p-2 block"
                onClick={toggleMenu}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                className="hover:underline p-2 block"
                onClick={toggleMenu}
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline p-2 block"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
