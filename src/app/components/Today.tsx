import Image from "next/image";
import { FC } from "react";

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
  {
    id: 5,
    discount: 25,
    image: "/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    title: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 490,
    rating: 4.5,
    reviews: 99,
  },
];

const Today: FC = () => {
  return (
    <div className="p-4 mt-20">
      <div className="flex items-center mb-4">
        <div className="w-2 h-8 bg-red-500 mr-2"></div>
        <h2 className="text-lg font-bold">Today&apos;s</h2>
      </div>
      <h1 className="text-4xl font-bold mb-4">Flash Sales</h1>

      <div className="flex items-center mb-8">
        <div className="text-center mr-4">
          <div className="text-2xl font-bold">03</div>
          <div className="text-sm">Days</div>
        </div>
        <div className="text-center mr-4">
          <div className="text-2xl font-bold">23</div>
          <div className="text-sm">Hours</div>
        </div>
        <div className="text-center mr-4">
          <div className="text-2xl font-bold">19</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-500">56</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <button className="p-2 bg-gray-200 rounded-full mr-2">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg relative">
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{product.discount}%
            </div>
            <div className="absolute top-2 right-2">
              <i className="far fa-heart"></i>
            </div>
            <div className="relative w-full h-[200px] mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
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
