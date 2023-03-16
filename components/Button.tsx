function Button({
  px,
  py,
  value,
}: {
  px?: number;
  py?: number;
  value?: string;
}) {
  return (
    <button
      className={`text-white px-${px ? px : 4} py-${
        py ? py : 1
      } rounded-full bg-medium-dark font-sans font-bold`}
    >
      {value ? value : `Get Started`}
    </button>
  );
}

export default Button;
