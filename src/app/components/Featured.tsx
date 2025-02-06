import Image from "next/image";
import { FC } from "react";

interface FeaturedItem {
  id: number;
  image: string;
  alt: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    image: "/ps5-slim-goedkope-playstation_large 1.png",
    alt: "PlayStation 5",
  },
  {
    id: 2,
    image: "/attractive-woman-wearing-hat-posing-black-background 1.png",
    alt: "Women's Collections",
  },
  {
    id: 3,
    image: "/Frame 686.png",
    alt: "Speakers",
  },
  {
    id: 4,
    image: "/652e82cd70aa6522dd785109a455904c.png",
    alt: "Perfume",
  },
];

const Featured: FC = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-4 h-[400px]">
        <div className="md:w-1/2 h-full">
          <div className="relative h-full">
            <Image
              src={featuredItems[0].image}
              alt={featuredItems[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4 h-full">
          <div className="relative h-1/2">
            <Image
              src={featuredItems[1].image}
              alt={featuredItems[1].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex gap-4 h-1/2">
            {featuredItems.slice(2).map((item) => (
              <div key={item.id} className="relative w-1/2 h-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
