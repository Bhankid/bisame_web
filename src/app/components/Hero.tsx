"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const images = [
  { src: "/Frame 560.png", alt: "" },
  { src: "/Frame 600.png", alt: "" },
  { src: "/Frame 560.png", alt: "" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      name: "Woman's Fashion",
      subcategories: ["Dresses", "Tops", "Jeans", "Shoes"],
    },
    {
      name: "Men's Fashion",
      subcategories: ["Shirts", "Pants", "Jackets", "Accessories"],
    },
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Menu */}
      <div className="w-full md:w-1/4 p-4 border-r">
        <ul className="space-y-4">
          {categories.map((category, index) =>
            typeof category === "string" ? (
              <li key={index} className="flex justify-between items-center">
                <span>{category}</span>
                <i className="fas fa-chevron-right"></i>
              </li>
            ) : (
              <div key={index}>
                {/* Main Category */}
                <li
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === index ? null : index
                    )
                  }
                >
                  <span>{category.name}</span>
                  {expandedCategory === index ? (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                  )}
                </li>

                {/* Subcategories */}
                <div
                  className={`ml-4 transition-height overflow-hidden ${
                    expandedCategory === index ? "max-h-[100px]" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-2">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={`${index}-${subIndex}`} className="pl-4">
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
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
                className="carousel-item w-1/3 h-full flex-shrink-0 relative"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
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
