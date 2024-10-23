const Badge = ({
  number,
  customStyle,
}: {
  number: string;
  customStyle: string;
}) => {
  return (
    <div
      className={`${customStyle} flex text-[12px] items-center justify-center  rounded-full bg-[#F43F5E] text-white`}
    >
      {number}
    </div>
  );
};

export default Badge;
