'use client'
import React, { useState } from "react";

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative bg-gray-900 p-4">
            {/* Desktop Navigation (Visible on medium and larger screens) */}
            <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-white text-lg hover:text-teal-400 transition duration-300">Home</a>
                <a href="#" className="text-white text-lg hover:text-teal-400 transition duration-300">About</a>
                <a href="#" className="text-white text-lg hover:text-teal-400 transition duration-300">Services</a>
                <a href="#" className="text-white text-lg hover:text-teal-400 transition duration-300">Contact</a>
            </nav>

            {/* Burger Icon (Visible on small screens only) */}
            {!isOpen && (
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center p-2 rounded-md focus:outline-none"
                >
                    {/* Burger Icon */}
                    <div className="space-y-1">
                        <div className="w-8 h-1 bg-white"></div>
                        <div className="w-8 h-1 bg-white"></div>
                        <div className="w-8 h-1 bg-white"></div>
                    </div>
                </button>
            )}

            {/* Mobile Menu (Visible only on small screens when isOpen is true) */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
            >
                {/* Close Icon inside the Menu */}
                <div className="flex justify-between p-6">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl"
                    >
                        <svg
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <span className="text-white text-2xl font-semibold">Menu</span>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col items-center space-y-6 py-8">
                    <a href="#" className="text-white text-xl hover:text-teal-400 transition duration-300">Home</a>
                    <a href="#" className="text-white text-xl hover:text-teal-400 transition duration-300">About</a>
                    <a href="#" className="text-white text-xl hover:text-teal-400 transition duration-300">Services</a>
                    <a href="#" className="text-white text-xl hover:text-teal-400 transition duration-300">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;
