import Icon from "@/app/assets/Icon.png";
const Customize = () => {
  return (
    <div className="w-full max-w-screen-2xl h-auto px-6 py-8 md:px-16 lg:px-32 xl:px-[140px] lg:py-12 xl:py-[220px] flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-[60px]">
      <div className="w-full md:w-1/2 lg:w-[714px] h-[300px] md:h-[532.09px] bg-[#C4DEFD]"></div>
      <div className="w-full md:w-1/2 lg:w-[669px]">
        <div>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-7xl leading-tight lg:leading-[87.14px]">
            Customise it to your needs
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-base md:text-lg leading-relaxed lg:leading-[30px]">
            Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>
        <div className="mt-6">
          <button className="w-full md:w-auto px-6 py-3 rounded-lg bg-[#4F9CF9] text-lg font-medium text-white hover:bg-blue-600">
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customize;
