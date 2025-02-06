"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  { src: "/Frame 560.png", alt: "iPhone 14 Series with a 10% off voucher" },
  { src: "/Frame 560.png", alt: "Laptop with a 15% off voucher" },
  { src: "/Frame 560.png", alt: "Smartwatch with a 20% off voucher" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Menu */}
      <div className="w-full md:w-1/4 p-4 border-r">
        <ul className="space-y-4">
          {[
            "Woman's Fashion",
            "Men's Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((category) => (
            <li key={category} className="flex justify-between items-center">
              <span>{category}</span>
              <i className="fas fa-chevron-right"></i>
            </li>
          ))}
        </ul>
      </div>

      {/* Carousel Section */}
      <div className="w-full md:w-3/4 p-2 relative overflow-hidden">
        <div className="relative w-full h-[400px]">
          {/* Images */}
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === activeIndex ? "bg-gray-700" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
