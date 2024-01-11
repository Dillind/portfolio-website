import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full shadow-md">
      <nav className="flex justify-between items-center max-container">
        <a
          href="/"
          className="font-montserrat text-xl uppercase tracking-normal text-red-400"
        >
          Dylan Lindsay
        </a>
        <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger menu icon"
            className="cursor-pointer"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
