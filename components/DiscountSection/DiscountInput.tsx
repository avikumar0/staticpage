import React from "react";
import { FaGraduationCap, FaWhatsapp, FaQuoteRight } from 'react-icons/fa';

const DiscountInput = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative">
        <input
          type="text"
          className="px-3 rounded-sm py-4"
          placeholder="Area of Study?"
        />
        <div className="absolute top-0 right-4 flex items-center h-full p-2">
          <FaGraduationCap className="text-slate-400" />
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          className="px-3 rounded-sm py-4"
          placeholder="Send Quote"
        />
        <div className="absolute top-0 right-4 flex items-center h-full p-2">
          <FaQuoteRight className="text-slate-400" />
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          className="px-3 rounded-sm py-4"
          placeholder="Whatsapp Number"
        />
        <div className="absolute top-0 right-4 flex items-center h-full p-2">
          <FaWhatsapp className="text-slate-400" />
        </div>
      </div>
      <div className="flex p-4 rounded-md font-medium bg-yellow-500">
        GET FREE QUOTE
      </div>
    </div>
  );
};

export default DiscountInput;
