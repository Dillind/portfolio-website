const Button = ({ label, iconURL, linkTo }) => {
  return (
    <a
      href={linkTo}
      download="/resume/dylan-resume.pdf"
      type="button"
      className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-primaryColor rounded-full text-white"
      target="_blank"
    >
      {label}
      <img src={iconURL} alt="arrow right" className="ml-2 w-5 h-5" />
    </a>
  );
};

export default Button;
