import Image from "next/image";
import hero_image from "../public/hero_image.jpg";
import LeftSide from "./HeroSection/LeftSide";
import RightSide from "./HeroSection/RightSide";
const HeroSection = () => {
  return (
    <div className="flex justify-between w-full py-10">
        <div className="w-2/5"><LeftSide/></div>
        <div className="w-2/5"><Image src={hero_image} alt="hero image" width={500} height={500} /></div>
        <div className="w-1/5"><RightSide/></div>
   
    </div>
  );
};

export default HeroSection;
