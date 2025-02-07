import Image from 'next/image';

const Card = () => {
  return (
    <div className="flex items-center justify-center min-h-80">
      <div className="bg-black text-white p-4 rounded-lg flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <p className="text-green-500 mb-2">Categories</p>
          <h1 className="text-4xl font-bold mb-4">
            Enhance Your Music Experience
          </h1>
          <div className="flex space-x-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold">23</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">05</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">59</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">35</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <button className="bg-green-500 text-black px-6 py-2 rounded-full font-bold">
            Buy Now!
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <Image
            src="/Frame 600.png"
            alt="A high-quality portable speaker with a sleek design"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
