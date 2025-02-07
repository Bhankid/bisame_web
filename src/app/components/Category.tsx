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

const Category = () => {
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
          <div className="flex space-x-4">
            {/* Phones */}
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <PhoneIcon className="w-6 h-6 text-gray-600 mb-2" />
              <span>Phones</span>
            </div>

            {/* Computers */}
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <ComputerDesktopIcon className="w-6 h-6 text-gray-600 mb-2" />
              <span>Computers</span>
            </div>

            {/* SmartWatch */}
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <ClockIcon className="w-6 h-6 text-gray-600 mb-2" />
              <span>SmartWatch</span>
            </div>

            {/* Camera */}
            <div className="flex flex-col items-center justify-center w-24 h-24 bg-red-500 text-white rounded-md">
              <CameraIcon className="w-6 h-6 text-white mb-2" />
              <span>Camera</span>
            </div>

            {/* Headphones */}
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <SpeakerWaveIcon className="w-6 h-6 text-gray-600 mb-2" />
              <span>Headphones</span>
            </div>

            {/* Gaming */}
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <PlayIcon className="w-6 h-6 text-gray-600 mb-2" />
              <span>Gaming</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
              <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
              <ChevronRightIcon className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
