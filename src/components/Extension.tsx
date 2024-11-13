const Extension = () => {
  return (
    <div className="w-full max-w-screen-2xl h-auto py-10 md:py-16 px-4 md:px-12 lg:px-24 bg-[#043873] text-white flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="w-full md:w-1/2 lg:w-[697px]">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight lg:leading-[87.14px]">
            Use as Extension
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-base md:text-lg leading-relaxed lg:leading-[30px]">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
        </div>
        <div className="mt-6">
          <button className="px-6 py-3 rounded-md bg-[#4F9CF9] text-lg font-medium hover:bg-blue-600 transition">
            Let's Go
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-[686px] h-[200px] md:h-[300px] lg:h-[479px] bg-[#C4DEFD]"></div>
    </div>
  );
}

export default Extension;
