"use client";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { navLinks } from "./navLinks";

const Navbar = () => {
  const pathname = usePathname();

 
  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 mt-5">
            <Image src="/logo.webp" alt="Logo" width={128} height={128} />
          </div>
          <div className="flex-grow">
            <div className="flex justify-center space-x-8">
              {navLinks.map(( item, index:number ) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium
                    hover:text-red-700 transition duration-300 ease-in-out
                    ${
                    pathname == item.href ? "text-red-700 underline underline-offset-2 font-semibold" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <FaFacebook size={24} className="text-slate-400" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <FaLinkedin size={24} className="text-slate-400" />
            </button>
            <div className="relative flex items-center border border-red-700 px-5 py-1 rounded-full">
              <FaPhone className="text-red-700" size={16} />
              <span className="text-red-700 ml-2">+447854535</span>
              <div className="absolute -top-5">
                <span className="text-[8px] font-semibold uppercase bg-yellow-500 rounded-sm px-1">Call Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;