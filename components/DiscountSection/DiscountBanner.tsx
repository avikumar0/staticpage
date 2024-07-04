import React from "react";
import {
  FaStar,
} from "react-icons/fa";

import { SiAdguard } from "react-icons/si";


import { IoIosStar } from "react-icons/io";

const DiscountBanner = () => {
  return (
    <div className="flex justify-between items-center text-white w-full ">
      <div className="flex items-center text-2xl">
        <span className=" font-semibold">Get</span>
        <span className="mx-1 font-semibold text-black rounded-lg px-1 bg-yellow-500">
          50%
        </span>
        <span className="font-semibold">Discount</span>
        <div className=" bg-slate-50 rounded-lg ml-3">
          <div className="flex items-center p-1">
            <div className="flex mr-2 items-center">
              <IoIosStar className="text-green-600 mx-1 text-xl" />
              <span className="text-sm font-medium text-slate-900">
                TrustPilot
              </span>
            </div>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar
                  key={i}
                  className="text-white bg-green-600 rounded-md p-1 mx-0.5"
                />
              ))}
          </div>
        </div>
      </div>
      <div className="p-2 flex gap-2 items-center">
    <SiAdguard className="text-xl text-yellow-500" />
              <span className="text-xs">Your information is 100% secure and confident</span>
      </div>
    </div>
  );
};

export default DiscountBanner;
