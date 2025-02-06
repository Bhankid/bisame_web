import Image from 'next/image'
import { FC } from 'react'

interface FeaturedItem {
  id: number
  title: string
  description: string
  image: string
  alt: string
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "https://placehold.co/600x400",
    alt: "Black and white version of the PS5"
  },
  {
    id: 2,
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    image: "https://placehold.co/600x400",
    alt: "Featured woman collections"
  },
  {
    id: 3,
    title: "Speakers",
    description: "Amazon wireless speakers",
    image: "https://placehold.co/600x400",
    alt: "Amazon wireless speakers"
  },
  {
    id: 4,
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: "https://placehold.co/600x400",
    alt: "GUCCI INTENSE OUD EDP"
  }
]

const Featured: FC = () => {
  return (
    <div className="p-8">
      <div className="flex items-center mb-4">
        <div className="w-2 h-8 bg-red-500 mr-2"></div>
        <span className="text-red-500 font-bold">Featured</span>
      </div>
      <h1 className="text-4xl font-bold mb-8">New Arrival</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredItems.map((item) => (
          <div key={item.id} className="relative h-[400px]">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
              <button className="mt-2 px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
