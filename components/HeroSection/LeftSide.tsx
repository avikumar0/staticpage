import React from "react";
import Image from "next/image";
import arrowImage from "../../public/arrow.png";

const LeftSide = () => {
  return (
    <div className="relative flex justify-center my-20 h-full">
      <div className="absolute bottom-20 right-10">
        <Image src={arrowImage} alt="arrow image" width={800} height={800}
        className="rotate-45 w-[180px]" />
      </div>
      <div className=" px-10">
        <h3 className="text-slate-600 font-medium">
          <span className="text-slate-400">01.</span>
          <span className="font-normal"> Exclusive Help For Your UK</span>
        </h3>
        <h1 className="font-extrabold mt-5 text-slate-900 text-5xl">
          <span className="inline-block"> ASSIGNMENT </span>
          <span className="inline-block"> GET QUALITY HELP</span>
        </h1>

        <div className="text-xl mt-5 text-slate-500 font-medium">
          <span>By Leading UK PHD experts in your topic</span>
        </div>

        <button
          className="mt-5 bg-blue-800 hover:bg-slate-600
          transition duration-300 ease-in-out uppercase
           text-white font-semibold py-3 px-6 rounded-md"
        >
          Get Help Now
        </button>
      </div>
    </div>
  );
};

export default LeftSide;