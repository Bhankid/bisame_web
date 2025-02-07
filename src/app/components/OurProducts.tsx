"use client";
import Image from "next/image";
import { useState } from "react";
import {
  StarIcon as StarFilledIcon,
  HeartIcon,
  EyeIcon,
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
  availableColors: string[];
};

// Sample product data (Initial Products)
const initialProducts: Product[] = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "$100",
    rating: 4.5,
    reviews: 35,
    image: "/71RdoeXxtrL 1.png",
    isNew: false,
    availableColors: ["#FF0000", "#008000", "#0000FF"],
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 4.5,
    reviews: 95,
    image: "/eos-250d-03-500x500 1.png",
    isNew: false,
    availableColors: ["#000000", "#777777"],
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 4.5,
    reviews: 325,
    image: "/ideapad-gaming-3i-01-500x500 1.png",
    isNew: false,
    availableColors: ["#0000FF", "#FF9900"],
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: "$500",
    rating: 4.5,
    reviews: 145,
    image: "/curology-j7pKVQrTUsM-unsplash 1.png",
    isNew: false,
    availableColors: ["#FF69B4", "#9400D3"],
  },
  {
    id: 5,
    name: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    rating: 4.5,
    reviews: 45,
    image: "/Copa_Sense 1.png",
    isNew: false,
    availableColors: ["#1FE844FF", "#FF9900"],
  },
  {
    id: 6,
    name: "Curology Product Set",
    price: "$500",
    rating: 4.5,
    reviews: 145,
    image: "/curology-j7pKVQrTUsM-unsplash 1.png",
    isNew: false,
    availableColors: ["#FF69B4", "#9400D3"],
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 4.5,
    reviews: 55,
    image: "/Frame 608.png",
    isNew: true,
    availableColors: ["#141415DF", "#E0EBFBFF"],
  },
  {
    id: 8,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 4.5,
    reviews: 325,
    image: "/ideapad-gaming-3i-01-500x500 1.png",
    isNew: false,
    availableColors: ["#0000FF", "#FF9900"],
  },
];

// Function to generate more products dynamically
const generateNewProducts = (count: number, startId: number): Product[] => {
  const colors = ["#FF0000", "#008000", "#0000FF", "#777777", "#FF9900"];
  return Array.from({ length: count }, (_, index) => ({
    id: startId + index,
    name: `Generated Product ${startId + index}`,
    price: `$${(Math.random() * 500 + 100).toFixed(2)}`,
    rating: 4 + Math.random(),
    reviews: Math.floor(Math.random() * 300 + 50),
    image: `/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png`,
    isNew: Math.random() > 0.5,
    availableColors: [colors[Math.floor(Math.random() * colors.length)]],
  }));
};

// Define the props for the ProductCard component
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className="border rounded-lg p-4 relative hover:shadow-lg transition-shadow duration-300 group"
    >
      {/* New Badge */}
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}

      {/* Icons Positioned Over Image */}
      <div className="relative">
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Heart Icon */}
          <button className="text-gray-500 hover:text-red-500 transition-colors">
            <HeartIcon className="w-6 h-6" />
          </button>
          {/* Eye Icon */}
          <button className="text-gray-500 hover:text-blue-500 transition-colors">
            <EyeIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-40 object-cover mb-4 rounded"
        />
      </div>

      {/* Product Details */}
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-red-500 font-bold">{product.price}</p>

      {/* Star Ratings & Reviews */}
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

      {/* Color Options */}
      <div className="flex space-x-2 mt-2">
        {product.availableColors.map((color, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-full border"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>

      {/* Add to Cart Button (Only on Hover) */}
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [generatedCount, setGeneratedCount] = useState(0);

  const handleViewAll = () => {
    const newProducts = generateNewProducts(4, products.length + 1);
    setProducts([...products, ...newProducts]);
    setGeneratedCount(generatedCount + 4);
  };

  const handleShowLess = () => {
    setProducts(initialProducts);
    setGeneratedCount(0);
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All / Show Less Button */}
      <div className="flex justify-center mt-8">
        {generatedCount === 0 ? (
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
