import React from "react";
import Image from "next/image";

const ProductWrapper = () => {
  return (
    <section>
      <div className="h-screen flex items-center justify-center relative bg-dark group transition-colors duration-500 hover:bg-blue-700">
        {/* Mask Overlay */}
        <div className="absolute inset-0 bg-dark group-hover:bg-foreground transition-colors duration-500">
          <img
            src="/Mask_group.png"
            alt="mask"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
          <Image
            src="/transactshield_logo_2.png"
            alt="TransactShield Logo"
            width={300}
            height={300}
            className="transform transition-transform duration-500 group-hover:scale-110 opacity-20"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center">
          <h1 className="font-pathway text-5xl md:text-5xl lg:text-7xl font-extrabold mt- text-transparent bg-clip-text bg-gradient-to-r from-white via-white  to-pink">
            OUR PRODUCTS
          </h1>
          <p className="font-roboto text-lg md:text-xl text-white">
            TAKE A LOOK AT OUR WORKS.
          </p>
        </div>
      </div>

      {/* Clickable Section */}
      <a href="https://www.clickinsures.com/" className="block">
        <section className="relative mt-36 mx-16 rounded-lg group">
          {/* SVG Image Section */}
          <div className="group-hover:bg-gradient-to-r group-hover:from-dark group-hover:via-purple-500 group-hover:to-pink">
            <img
              src="/insure.svg"
              alt="Insurance"
              className="rounded-lg transition-transform transform"
            />
          </div>

          {/* Hover Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-gray-600 font-semibold text-lg transition-opacity">
            Click to visit
          </div>
        </section>
        
      </a>
      <h1 className="items-center justify-center text-center mt-14 text-xl">Watch out for more...</h1>
    </section>
  );
};

export default ProductWrapper;
