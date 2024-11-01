type ButtonProps = {
  label: string;
  iconUrl: string;
};
const Button = ({ label, iconUrl }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border border-coral-red  font-montserrat text-lg leading-none bg-coral-red rounded-full text-white ">
      {label}{' '}
      <img
        src={iconUrl}
        alt="arrow icon"
        className="ml-2 rounded-full h-5 w-5"
      />
    </button>
  );
};

export default Button;
