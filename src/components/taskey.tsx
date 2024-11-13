const Taskey = () => {
  return (
    <div className="w-full max-w-[1920px] min-h-[574px] bg-[#043873] text-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-10 mx-auto">
      {/* Main Content Container */}
      <div className="max-w-[1064px] text-center mb-8 md:mb-10">
        {/* Heading */}
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 md:mb-6">
          Your work, everywhere you are
        </h1>
        {/* Description */}
        <p className="font-normal text-sm md:text-base lg:text-lg leading-relaxed">
          Access your notes from your computer, phone, or tablet by synchronizing with various services, including whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
        </p>
      </div>
      {/* Button */}
      <div className="mt-6">
        <button className="bg-white text-[#043873] py-3 px-6 md:px-8 md:py-4 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105">
          Try Taskey
        </button>
      </div>
    </div>
  );
};

export default Taskey;
 