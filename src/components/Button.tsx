type ButtonProps = {
  label: string;
  iconUrl?: string;
  bg?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: string;
};
const Button = ({
  label,
  iconUrl,
  bg,
  borderColor,
  textColor,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full  ${
        bg
          ? `${bg} ${textColor} ${borderColor}`
          : 'text-white bg-coral-red  border-coral-red'
      } ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow icon"
          className="ml-2 rounded-full h-5 w-5"
        />
      )}
    </button>
  );
};

export default Button;
