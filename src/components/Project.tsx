import Image from "next/image";
import Icon from "@/app/assets/Icon.png";
import Work from "@/app/assets/Work.png";

const Project = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-20 xl:px-[220px]">
      {/* Section 1: Project Management */}
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-10">
        {/* Text Content */}
        <div className="max-w-lg md:max-w-md lg:max-w-2xl">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl leading-tight tracking-[-0.02em] mb-4 lg:mb-6">
            Project Management
          </h1>
          <p className="text-base md:text-lg font-normal leading-relaxed mb-8">
            Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className="px-8 py-3 rounded-lg bg-[#4F9CF9] text-white flex items-center gap-2 hover:bg-blue-600">
            Get Started
            <Image src={Icon} alt="Icon" className="w-4 h-4" />
          </button>
        </div>
        {/* Image/Visual Content */}
        <div className="w-full md:w-1/2 bg-[#C4DEFD] h-[200px] md:h-[300px] lg:h-[400px] rounded-lg"></div>
      </div>

      {/* Spacer */}
      <div className="my-16"></div>

      {/* Section 2: Work Together */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-10">
        {/* Image/Visual Content */}
        <div className="w-full md:w-1/2">
          <Image src={Work} alt="Work Together" className="w-full h-auto" />
        </div>
        {/* Text Content */}
        <div className="max-w-lg md:max-w-md lg:max-w-2xl">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl leading-tight mb-4 lg:mb-6">
            Work together
          </h1>
          <p className="text-base md:text-lg font-normal leading-relaxed mb-8">
            With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="px-8 py-3 rounded-md bg-[#4F9CF9] text-white flex items-center gap-2 hover:bg-blue-600">
            Try it now
            <Image src={Icon} alt="Icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
