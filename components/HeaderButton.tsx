interface specs {
  desc: string;
}

const Button = ({ desc }: specs) => {
  return (
    <button className="px-4 py-2 bg-black text-white rounded-full">
      {desc}
    </button>
  );
};

export default Button;
