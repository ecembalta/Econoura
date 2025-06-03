import React from "react";

const C2ASection = () => {
  return (
    <div className="relative w-full flex justify-center items-center bg-white">
      <div className="flex w-[1050px] flex-col-reverse gap-8 md:flex-row items-center justify-center py-10 px-4 md:px-0">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://picsum.photos/seed/c2a/500/500"
            alt="C2A Görsel"
            className="rounded-lg shadow-lg object-cover w-[350px] h-[350px] md:w-[400px] md:h-[400px]"
          />
        </div>

        <div className="w-[80%] md:w-full flex flex-col items-center md:items-start text-center md:text-left md:pl-16">
          <span className="text-gray-500 text-sm font-semibold mb-2">
            SUMMER 2020
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Part of the Neural Universe
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex gap-4 flex-col md:flex-row">
            <button className="px-8 py-3 bg-[#2DC071] text-white font-semibold text-lg rounded-md hover:bg-[#25a05d] transition-colors duration-300 shadow-lg hover:shadow-xl">
              BUY NOW
            </button>
            <button className="px-8 py-3 border-2 border-[#2DC071] text-[#2DC071] font-semibold text-lg rounded-md bg-white hover:bg-[#f0fdf6] transition-colors duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C2ASection;
