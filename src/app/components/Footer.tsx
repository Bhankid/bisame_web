import Image from "next/image";
import {
  Square2StackIcon as FacebookIcon,
  ChatBubbleOvalLeftIcon as TwitterIcon,
  PhotoIcon as InstagramIcon,
  LinkIcon as LinkedInIcon,
} from "@heroicons/react/24/outline";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-5 md:px-20 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l bg-gray-800 text-white border-none focus:outline-none"
            />
            <button className="p-2 bg-gray-700 rounded-r">→</button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <p>111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p className="mt-2">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <ul>
            <li>
              <a href="/my-account" className="text-white hover:text-gray-400">
                My Account
              </a>
            </li>
            <li>
              <a href="/login" className="text-white hover:text-gray-400">
                Login / Register
              </a>
            </li>
            <li>
              <a href="/cart" className="text-white hover:text-gray-400">
                Cart
              </a>
            </li>
            <li>
              <a href="/wishlist" className="text-white hover:text-gray-400">
                Wishlist
              </a>
            </li>
            <li>
              <a href="/shop" className="text-white hover:text-gray-400">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Link</h2>
          <ul>
            <li>
              <a
                href="/privacy-policy"
                className="text-white hover:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-use"
                className="text-white hover:text-gray-400"
              >
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="/faq" className="text-white hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="flex space-x-2 mt-2">
            <Image
              src="/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
              alt="Google Play Store"
              width={100}
              height={40}
            />
            <Image
              src="/download-appstore.png"
              alt="Apple App Store"
              width={100}
              height={40}
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <FacebookIcon className="w-6 h-6 text-white" />
            </a>
            <a href="#" aria-label="Twitter">
              <TwitterIcon className="w-6 h-6 text-white" />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon className="w-6 h-6 text-white" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>&copy; Copyright Rimel {currentYear}. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
