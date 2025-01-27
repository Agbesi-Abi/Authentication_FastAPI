'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../public/transactshield_logo_3.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative flex justify-between items-center px-8 py-4 shadow-md">
            {/* Left Section: Logo */}
            <a href="/">
                <div className="flex items-center">
                    <Image
                        src={Logo}
                        alt="TransactShield Logo"
                        height={30}
                        width={30}
                        className="h-auto w-auto"
                    />
                    <div className="ml-3 text-sm">
                        <h1 className="font-extrabold tracking-widest font-pathway text-2xl text-blue-900">TRANSACTSHIELD</h1>
                        <p className="font-pathway text-[11.5px] text-blue-900">SAFE TRANSACTIONS, STRONG CONNECTIONS</p>
                    </div>
                </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-blue-900 font-medium font-pathway">
                <Link href="/" className="hover:text-pink transition duration-200 ">
                    HOME
                </Link>
                <Link href="/about" className="hover:text-pink transition duration-200">
                    ABOUT
                </Link>
                <Link href="/contact" className="hover:text-pink transition duration-200">
                    CONTACT
                </Link>
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block font-pathway">
                <Link
                    href="/product"
                    className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-pink transition duration-200"
                >
                    OUR PRODUCTS
                </Link>
            </div>

            {/* Hamburger Menu Button */}
            <div className="block md:hidden font-pathway">
                <button
                    className="text-blue-900 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        // Close Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                    ) : (
                        // Hamburger Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-0 left-0 w-full h-auto bg-gray-100 z-20 md:hidden">
                    {/* Added `md:hidden` to hide in desktop view */}
                    <div className="flex flex-col items-center space-y-6 py-10 text-blue-900 font-medium">
                        <Link
                            href="/"
                            className="hover:text-pink transition duration-200"
                            onClick={() => setMenuOpen(false)}
                        >
                            HOME
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-pink transition duration-200"
                            onClick={() => setMenuOpen(false)}
                        >
                            ABOUT
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-pink transition duration-200"
                            onClick={() => setMenuOpen(false)}
                        >
                            CONTACT
                        </Link>
                        <Link
                            href="/product"
                            className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-pink transition duration-200"
                            onClick={() => setMenuOpen(false)}
                        >
                            OUR PRODUCTS
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
