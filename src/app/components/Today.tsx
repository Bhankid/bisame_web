"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProductCard {
  id: number;
  discount: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
}

const products: ProductCard[] = [
  {
    id: 1,
    discount: 40,
    image: "/g92-2-500x500 1.png",
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    discount: 35,
    image: "/ak-900-01-500x500 1.png",
    title: "AK-900 Wired Keyboard",
    price: 60,
    originalPrice: 160,
    rating: 4.5,
    reviews: 75,
  },
  {
    id: 3,
    discount: 30,
    image: "/g27cq4-500x500 1.png",
    title: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 490,
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 4,
    discount: 25,
    image: "/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    title: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 490,
    rating: 4.5,
    reviews: 99,
  },
];

// Set sale ending date
const SALE_END_TIME = new Date();
SALE_END_TIME.setDate(SALE_END_TIME.getDate() + 3); // 3 days from now

const Today = () => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = SALE_END_TIME.getTime() - now.getTime();

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 mt-20">
      <div className="flex items-center mb-4">
        <div className="w-2 h-8 bg-red-500 mr-2"></div>
        <h2 className="text-lg font-bold">Today&apos;s</h2>
      </div>
      <h1 className="text-4xl font-bold mb-4">Flash Sales</h1>

      {/* Countdown Timer */}
      <div className="flex items-center mb-8 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="mr-4">
            <div className="text-2xl font-bold">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-sm capitalize">{unit}</div>
          </div>
        ))}
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg relative">
            <div className="absolute top-2 left-2 bg-red-500 z-50 text-white text-xs px-2 py-1 rounded">
              -{product.discount}%
            </div>
            <div className="relative w-full h-[200px] mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <div className="text-red-500 text-lg font-bold mb-1">
              ${product.price}
            </div>
            <div className="text-gray-500 line-through mb-2">
              ${product.originalPrice}
            </div>
            <div className="flex items-center">
              <div className="text-yellow-500 mr-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  ></i>
                ))}
              </div>
              <div className="text-gray-500">({product.reviews})</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-red-500 text-white py-2 px-4 rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Today;
