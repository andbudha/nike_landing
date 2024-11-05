import star from '../assets/icons/star.svg';

const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-s text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img
          src={star}
          alt="star"
          height={24}
          width={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
