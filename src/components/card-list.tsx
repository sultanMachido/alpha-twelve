import Card from "./card";
type CardListProps = {
  cardData: {
    title: string;
    amount: number | string;
    increment: number;
  }[];
};

const CardList = ({ cardData }: CardListProps) => {
  return (
    <div className="flex lg:justify-between mt-[24px] flex-wrap">
      {cardData?.map(({ title, amount, increment }) => (
        <div className="w-[95%] lg:w-[260px] my-2 lg:my-0">
          <Card title={title} amount={amount} increment={increment} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
