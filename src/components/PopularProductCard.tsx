import star from '../assets/icons/star.svg';

const PopularProductCard = ({
  imgURL,
  name,
  price,
}: {
  imgURL: string;
  name: string;
  price: string;
}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" />
        <p className="text-xl font-montserrat leading-normal text-slate-gray">
          (4.7)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-slate-gray">
        {name}
      </h3>
      <p className="mt-2 font-semibold text-2xl font-montserrat text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
