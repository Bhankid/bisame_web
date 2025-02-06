import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MarketHeader = () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-32 flex justify-between items-center">
      <div>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
        <a href="#" className="underline ml-2">
          ShopNow
        </a>
      </div>
      <div className="flex items-center">
        <span>English</span>
        <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
      </div>
    </div>
  );
};

export default MarketHeader;
