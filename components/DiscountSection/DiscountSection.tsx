import DiscountBanner from "./DiscountBanner";
import DiscountInput from "./DiscountInput";

const DiscountSection = () => {
  return (
    <div className="space-y-2 bg-[#312f2c] p-3 rounded-lg mx-auto w-fit">
      <DiscountBanner />
      <DiscountInput />
    </div>
  );
};

export default DiscountSection;
