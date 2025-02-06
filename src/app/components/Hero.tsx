"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  { src: "/Frame 560.png", alt: "" },
  { src: "/Frame 600.png", alt: "" },
  { src: "/Frame 560.png", alt: "" },
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
        <div className="carousel-container relative w-full h-[400px]">
          {/* Carousel Images */}
          <div
            className="carousel-images flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${(activeIndex * 100) / images.length}%)`,
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="carousel-item w-1/3 h-full flex-shrink-0"
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
                  index === activeIndex ? "bg-red-500" : "bg-red-400"
                }`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;