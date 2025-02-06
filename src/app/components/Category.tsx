const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-5xl">
        <div className="flex items-center mb-4">
          <div className="w-2 h-8 bg-red-500 mr-2"></div>
          <span className="text-red-500 font-semibold">Categories</span>
        </div>
        <h1 className="text-2xl font-bold mb-6">Browse By Category</h1>
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <i className="fas fa-mobile-alt text-2xl mb-2"></i>
              <span>Phones</span>
            </div>
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <i className="fas fa-desktop text-2xl mb-2"></i>
              <span>Computers</span>
            </div>
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <i className="fas fa-watch text-2xl mb-2"></i>
              <span>SmartWatch</span>
            </div>
            <div className="flex flex-col items-center justify-center w-24 h-24 bg-red-500 text-white rounded-md">
              <i className="fas fa-camera text-2xl mb-2"></i>
              <span>Camera</span>
            </div>
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <i className="fas fa-headphones-alt text-2xl mb-2"></i>
              <span>HeadPhones</span>
            </div>
            <div className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded-md">
              <i className="fas fa-gamepad text-2xl mb-2"></i>
              <span>Gaming</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
