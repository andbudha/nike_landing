import { Shoe } from '../@types/app_types';

type ShoeCardProps = {
  shoe: Shoe;
  changeBigShoeImage: (selectedShoeImg: string) => void;
  bigShoeImg: string;
};
const ShoeCard = ({ shoe, changeBigShoeImage, bigShoeImg }: ShoeCardProps) => {
  const selectCardHandler = () => {
    if (bigShoeImg !== shoe.bigShoe) {
      changeBigShoeImage(shoe.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === shoe.bigShoe
          ? 'border-coral-red rounded-xl'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={selectCardHandler}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={shoe.thumbnail} alt="shoe image" width={127} height={103} />
      </div>
    </div>
  );
};

export default ShoeCard;
