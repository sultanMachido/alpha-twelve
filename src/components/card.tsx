import incrementArrowIcon from "../assets/icons/up-arrow-icon.svg";
import decrementArrowIcon from "../assets/icons/down-arrow-icon.svg";
import informationIcon from "../assets/icons/information-icon.svg";

type CardProps = {
  title: string;
  amount: number | string;
  increment: number;
};

const Card = ({ title, amount, increment }: CardProps) => {
  return (
    <div className="w-full p-[16px] hover:scale-105 hover:shadow-md dark:border-none dark:bg-bgBlackPrimary border border-grey rounded-[2px] ">
      <div className="flex">
        <p className="font-[600px] text-[16px] text-[#64748B] dark:text-white">
          {title}
        </p>
        <img src={informationIcon} alt="icon" />
      </div>
      <div className="flex items-center">
        <p className="font-[600px] text-[20px] pr-[8px] dark:text-white">
          {amount}
        </p>
        {increment > 0 ? (
          <>
            <img src={incrementArrowIcon} alt="icon" className="pr-[5px]" />
            <p className="text-[10px] text-[#10B981]">
              {increment.toFixed(1)} %
            </p>
          </>
        ) : (
          <>
            <img src={decrementArrowIcon} alt="icon" className="pr-[5px]" />
            <p className="text-[10px] text-[#F43F5E]">
              {increment.toFixed(1)} %
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
