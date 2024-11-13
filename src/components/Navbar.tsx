import Image from "next/image";
import logo from "@/app/assets/Logo.png";

const Navbar = () => {
    return (
        <nav className="w-full py-4 px-6 md:px-10 lg:px-[220px] bg-[#043873] flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
                <Image src={logo} alt="logo" width={150} height={30} />
                <span className="text-white text-lg font-semibold hidden md:inline-block">
                    CompanyName
                </span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
                <ul className="hidden md:flex flex-row space-x-6 text-white">
                    <li className="cursor-pointer hover:text-[#FFE492] transition duration-300 ease-in-out hover:underline underline-offset-4 decoration-[#FFE492]">
                        Product
                    </li>
                    <li className="cursor-pointer hover:text-[#FFE492] transition duration-300 ease-in-out hover:underline underline-offset-4 decoration-[#FFE492]">
                        Solution
                    </li>
                    <li className="cursor-pointer hover:text-[#FFE492] transition duration-300 ease-in-out hover:underline underline-offset-4 decoration-[#FFE492]">
                        Resources
                    </li>
                    <li className="cursor-pointer hover:text-[#FFE492] transition duration-300 ease-in-out hover:underline underline-offset-4 decoration-[#FFE492]">
                        Pricing
                    </li>
                </ul>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        {/* Add a hamburger icon or other mobile menu icon here */}
                        ☰
                    </button>
                </div>

                {/* Login Button */}
                <div className="ml-4">
                    <button className="px-4 py-2 bg-[#FFE492] text-[#043873] rounded-lg hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
