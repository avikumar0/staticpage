import React from "react";
import { FaHome,FaEnvelopeOpenText } from "react-icons/fa";
import { TbTextScan2 } from "react-icons/tb";

const RightSide = () => {
  return (
    <div className="flex justify-center items-center h-full">
    <div className="space-y-5">
          <div className="">
            <div className="flex items-center gap-4">
              <div className="rounded-xl shadow-md border bg-white p-3">
                <FaHome className="text-4xl text-slate-600" />
              </div>
              <span className="text-slate-800">
                All levels Dip,Bachelors,Masters
              </span>
            </div>
          </div>
            <div className="flex items-center gap-4">
              <div className="rounded-xl shadow-md border bg-white p-3">
                <TbTextScan2 className="text-4xl text-slate-600" />
              </div>
              <span className="text-slate-800">
                Free Plagiarism Scan
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-xl shadow-md border bg-white p-3">
                <FaEnvelopeOpenText className="text-4xl text-slate-600" />
              </div>
              <span className="text-slate-800">
                MLA,APA Harvard & Oxford Citation
              </span>
            </div>
      </div>
    </div>
  );
};

export default RightSide;
