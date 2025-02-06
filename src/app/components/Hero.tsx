import Image from 'next/image';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Menu */}
      <div className="w-full md:w-1/4 p-4 border-r">
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>Woman&apos;s Fashion</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>Men&apos;s Fashion</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>Electronics</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>Home & Lifestyle</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>Medicine</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>Sports & Outdoor</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>Baby&apos;s & Toys</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>Groceries & Pets</span>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="flex justify-between items-center">
            <span>Health & Beauty</span>
            <i className="fas fa-chevron-right"></i>
          </li>
        </ul>
      </div>

      {/* Carousel Section */}
      <div className="w-full md:w-3/4 p-2">
        <div className="relative w-full h-[400px] overflow-hidden">
          {/* Sliding Images */}
          <div className="carousel-container absolute top-0 left-0 w-full h-full">
            <div className="carousel-images flex transition-transform duration-500 ease-in-out">
              {/* Image 1 */}
              <div className="carousel-item w-full h-full relative">
                <Image
                  src="/Frame560.png" 
                  alt="iPhone 14 Series with a 10% off voucher"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
              {/* Image 2 */}
              <div className="carousel-item w-full h-full relative">
                <Image
                  src="/Frame561.png" 
                  alt="Laptop with a 15% off voucher"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
              {/* Image 3 */}
              <div className="carousel-item w-full h-full relative">
                <Image
                  src="/Frame562.png" 
                  alt="Smartwatch with a 20% off voucher"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            <span className="w-2 h-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-500"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-500"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;