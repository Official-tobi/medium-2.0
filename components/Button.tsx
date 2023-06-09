interface specs {
  desc: string;
}

const Button = ({ desc }: specs) => {
  return (
    <button className=" font-bold px-12 py-3.5 bg-black text-white rounded-full">
      {desc}
    </button>
  );
};

export default Button;
