import Image from "next/image";
import Apple from "@/app/assets/Apple.png";
import Google from "@/app/assets/Google.png";
import Microsoft from "@/app/assets/microsoft 1.png";
import Slack from "@/app/assets/slack.png";

const OurSponsor = () => {
  return (
    <div className="w-full py-16 px-6 md:px-10 lg:px-[220px] grid place-items-center gap-8">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-inter font-bold text-center text-[#212529]">
        Our Sponsors
      </h1>
      
      {/* Sponsor Logos */}
      <div className="w-full max-w-7xl flex justify-center flex-wrap gap-8 items-center">
        <Image
          src={Apple}
          alt="Apple logo"
          className="w-20 md:w-24 lg:w-28 h-auto transition-transform duration-300 hover:scale-125"
        />
        <Image
          src={Microsoft}
          alt="Microsoft logo"
          className="w-40 md:w-48 lg:w-52 h-auto transition-transform duration-300 hover:scale-125"
        />
        <Image
          src={Slack}
          alt="Slack logo"
          className="w-40 md:w-48 lg:w-52 h-auto transition-transform duration-300 hover:scale-125"
        />
        <Image
          src={Google}
          alt="Google logo"
          className="w-32 md:w-36 lg:w-40 h-auto transition-transform duration-300 hover:scale-125"
        />
      </div>
    </div>
  );
};

export default OurSponsor;
