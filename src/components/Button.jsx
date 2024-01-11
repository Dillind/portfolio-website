const Button = ({ label, iconURL, linkTo }) => {
  return (
    <form action={linkTo} >
      <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-red-400 rounded-full text-white border-red-400">
        {label}
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      </button>
    </form>
  );
};

export default Button;
