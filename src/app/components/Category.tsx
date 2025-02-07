"use client";
import {
  PhoneIcon,
  ComputerDesktopIcon,
  ClockIcon,
  CameraIcon,
  SpeakerWaveIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Category = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { name: "Phones", icon: PhoneIcon },
    { name: "Computers", icon: ComputerDesktopIcon },
    { name: "SmartWatch", icon: ClockIcon },
    { name: "Camera", icon: CameraIcon },
    { name: "Headphones", icon: SpeakerWaveIcon },
    { name: "Gaming", icon: PlayIcon },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="w-2 h-8 bg-red-500 mr-2"></div>
          <span className="text-red-500 font-semibold">Categories</span>
        </div>
        <h1 className="text-2xl font-bold mb-6">Browse By Category</h1>

        {/* Categories Grid */}
        <div className="flex justify-between items-center mb-6">
          {/* Category Items */}
          <div className="flex space-x-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <div
                  key={category.name}
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`group flex flex-col items-center justify-center w-24 h-24 rounded-md transition-all duration-300 border ${
                    isActive
                      ? "bg-red-500 text-white border-red-500"
                      : "border-gray-300 text-gray-600 hover:bg-red-500 hover:border-red-500 hover:text-white hover:scale-105"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 mb-2 transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-600 group-hover:text-white"
                    }`}
                  />
                  <span
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-600 group-hover:text-white"
                    }`}
                  >
                    {category.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500">
              <ChevronLeftIcon className="w-4 h-4 text-gray-600 group-hover:text-white" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500">
              <ChevronRightIcon className="w-4 h-4 text-gray-600 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
