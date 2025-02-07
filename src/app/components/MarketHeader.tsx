"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react"; 

const saleTexts = [
  "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%",
  "Winter Clearance Sale: Up to 70% Off on All Coats and Jackets",
  "Back to School Sale: Buy One Get One Free on All Backpacks and Lunchboxes",
];

const languages = ["English", "Spanish", "French", "German", "Italian"];

const MarketHeader = () => {
  const [saleText, setSaleText] = useState(saleTexts[0]);
  const [language, setLanguage] = useState(languages[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = saleTexts.indexOf(saleText);
      const nextIndex = (currentIndex + 1) % saleTexts.length;
      setSaleText(saleTexts[nextIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [saleText]);

  return (
    <div className="bg-black text-white text-sm py-2 px-32 flex justify-between items-center">
      <div>
        {saleText}
        <a href="#" className="underline ml-2">
          ShopNow
        </a>
      </div>
      <div className="flex items-center">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="text-white bg-black border-none"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="ml-1 w-4 h-4" />
      </div>
    </div>
  );
};

export default MarketHeader;
