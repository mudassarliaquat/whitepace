import Image from "next/image";
import Logo from '@/app/assets/Logo.png';

const Footer = () => {
  return (
    <section className="bg-[#043873] text-white py-10 md:py-16 px-4 md:px-8 lg:px-16 xl:px-[220px]">
      <div className="max-w-screen-2xl mx-auto grid gap-8 md:gap-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image src={Logo} alt="logo" width={100} height={50} />
            <p className="text-sm md:text-base text-[#F7F7EE] max-w-xs">
              Whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-lg md:text-xl">Product</p>
            <p className="text-sm md:text-base text-[#FFE492] cursor-pointer hover:underline">Overview</p>
            <p className="text-sm md:text-base cursor-pointer hover:underline">Pricing</p>
            <p className="text-sm md:text-base cursor-pointer hover:underline">Customer stories</p>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-lg md:text-xl">Resources</p>
            <p className="text-sm md:text-base cursor-pointer hover:underline">Blog</p>
            <p className="text-sm md:text-base cursor-pointer hover:underline">Guides & tutorials</p>
            <p className="text-sm md:text-base cursor-pointer hover:underline">Help center</p>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-lg md:text-xl">Company</p>
            <p className="text-sm md:text-base cursor-pointer hover:underline">About us</p>
            <p className="text-sm md:text-base cursor-pointer hover:underline">Careers</p>
            <p className="text-sm md:text-base cursor-pointer hover:underline">Media Kit</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm md:text-base">©2021 Whitepace LLC.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
