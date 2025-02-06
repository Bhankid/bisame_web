import Image from "next/image";
import { FC } from "react";

interface ProductCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviews: string;
}

const ProductCard: FC<ProductCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  price,
  oldPrice,
  rating,
  reviews,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="relative h-48 w-full mb-4">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <button className="absolute top-2 right-2 text-gray-500 z-10">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="flex items-center mb-2">
        <span className="text-red-500 text-xl font-bold mr-2">{price}</span>
        {oldPrice && (
          <span className="text-gray-500 line-through">{oldPrice}</span>
        )}
      </div>
      <div className="flex items-center">
        <div className="flex items-center text-yellow-500 mr-2">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`fas fa-star ${i < rating ? "" : "text-gray-300"}`}
            ></i>
          ))}
        </div>
        <span className="text-gray-500">({reviews})</span>
      </div>
    </div>
  );
};

const products = [
  {
    imgSrc: "/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png",
    imgAlt: "Red coat",
    title: "The north coat",
    price: "$260",
    oldPrice: "$360",
    rating: 4.5,
    reviews: "65",
  },
  {
    imgSrc: "/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1 (1).png",
    imgAlt: "Gucci duffle bag",
    title: "Gucci duffle bag",
    price: "$960",
    oldPrice: "$1160",
    rating: 4.5,
    reviews: "65",
  },
  {
    imgSrc: "/gammaxx-l240-argb-1-500x500 1.png",
    imgAlt: "RGB liquid CPU Cooler",
    title: "RGB liquid CPU Cooler",
    price: "$160",
    oldPrice: "$170",
    rating: 4.5,
    reviews: "65",
  },
  {
    imgSrc: "/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png",
    imgAlt: "Small BookShelf",
    title: "Small BookShelf",
    price: "$360",
    rating: 4.5,
    reviews: "65",
  },
];

const Month: FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-2 h-8 bg-red-500 mr-2"></div>
          <span className="text-red-500 font-semibold">This Month</span>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          View All
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-6">Best Selling Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Month;
