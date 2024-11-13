import React from 'react';

const Hero = () => {
    return (
        <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 xl:px-[220px] bg-[#043873] text-white flex flex-col md:flex-row items-center gap-8">
            <div className="max-w-xl md:max-w-md lg:max-w-lg">
                <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
                    Get More Done with Whitepace
                </h2>
                <p className="text-base md:text-lg mb-6">
                    Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
                </p>
                <button className="px-6 py-3 bg-[#4F9CF9] rounded-lg text-white hover:bg-blue-600 transition duration-200">
                    Try Whitepace Free
                </button>
            </div>
            <div className="w-full md:w-[500px] lg:w-[600px] xl:w-[824px] h-60 md:h-[400px] lg:h-[500px] xl:h-[549px] bg-[#C4DEFD]"></div>
        </section>
    );
}

export default Hero;
