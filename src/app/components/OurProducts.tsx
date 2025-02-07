"use client";
import Image from "next/image";
import { useState } from "react"; // Import useState from React
import {
  StarIcon as StarFilledIcon,
  HeartIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

// Define the Product type
type Product = {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  isNew: boolean;
  isInCart: boolean;
};

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "$100",
    rating: 4.5,
    reviews: 35,
    image: "/71RdoeXxtrL 1.png",
    isNew: false,
    isInCart: false,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 4.5,
    reviews: 95,
    image: "/eos-250d-03-500x500 1.png",
    isNew: false,
    isInCart: true,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 4.5,
    reviews: 325,
    image: "/ideapad-gaming-3i-01-500x500 1.png",
    isNew: false,
    isInCart: false,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: "$500",
    rating: 4.5,
    reviews: 145,
    image: "/curology-j7pKVQrTUsM-unsplash 1.png",
    isNew: false,
    isInCart: false,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: "$960",
    rating: 4.5,
    reviews: 65,
    image: "/Cart.png",
    isNew: true,
    isInCart: false,
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    rating: 4.5,
    reviews: 45,
    image: "/Copa_Sense 1.png",
    isNew: false,
    isInCart: false,
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 4.5,
    reviews: 55,
    image: "/Frame 608.png",
    isNew: true,
    isInCart: false,
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: "$560",
    rating: 4.5,
    reviews: 55,
    image:
      "/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png",
    isNew: false,
    isInCart: false,
  },
];

// Define the props for the ProductCard component
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <div className="border rounded-lg p-4 relative hover:shadow-lg transition-shadow duration-300">
    {product.isNew && (
      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
        NEW
      </span>
    )}
    <Image
      src={product.image}
      alt={product.name}
      width={200}
      height={200}
      className="w-full h-40 object-cover mb-4"
    />
    <h3 className="text-lg font-medium">{product.name}</h3>
    <p className="text-red-500 font-bold">{product.price}</p>
    <div className="flex items-center mb-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarFilledIcon
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(product.rating)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="ml-2 text-gray-500">({product.reviews})</span>
    </div>
    {product.isInCart ? (
      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
        Add To Cart
      </button>
    ) : (
      <div className="flex justify-between items-center">
        <button className="text-gray-500 hover:text-red-500 transition-colors">
          <HeartIcon className="w-5 h-5" />
        </button>
        <button className="text-gray-500 hover:text-blue-500 transition-colors">
          <ArrowPathIcon className="w-5 h-5" />
        </button>
      </div>
    )}
  </div>
);

const OurProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(4); // Initially show 4 products

  const handleViewAll = () => {
    setVisibleProducts(products.length); // Show all products
  };

  const handleShowLess = () => {
    setVisibleProducts(4); // Revert to showing 4 products
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-2 h-8 bg-red-500 mr-2"></div>
        <h2 className="text-xl font-bold text-red-500">Our Products</h2>
      </div>
      <h1 className="text-3xl font-bold mb-8">Explore Our Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All / Show Less Button */}
      <div className="flex justify-center mt-8">
        {visibleProducts < products.length ? (
          <button
            onClick={handleViewAll}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
          >
            View All Products
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
