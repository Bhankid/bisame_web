import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">Exclusive</div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-800 hover:text-black">
            Contact
          </a>
          <a href="#" className="text-gray-800 hover:text-black">
            About
          </a>
          <a href="#" className="text-gray-800 hover:text-black">
            Sign Up
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border border-gray-300 rounded-full py-1 px-4 w-64"
            />
            <MagnifyingGlassIcon className="absolute right-3 top-2 text-gray-500 w-4 h-4" />
          </div>
          <HeartIcon className="text-xl text-gray-800 hover:text-black" />
          <ShoppingCartIcon className="text-xl text-gray-800 hover:text-black" />
        </div>
      </div>
    </div>
  );
}

export default Header;
