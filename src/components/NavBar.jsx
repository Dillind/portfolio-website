import { useEffect, useState } from "react";
import { hamburgerIcon, xmarkIcon } from "../assets/icons";
import { navLinks } from "../constants";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // if the mobile nav is open when a user changes the screen width,
  // this will toggle the isOpen state to false and close it.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="padding-x py-8 sticky top-0 z-10 w-full shadow-md bg-white">
      <nav className="flex justify-between items-center flex-wrap max-container">
        <a
          href="/"
          className="font-montserrat text-xl uppercase tracking-normal"
        >
          Dylan Lindsay
        </a>
        <ul
          className={`flex flex-1 justify-end items-center gap-16 ${
            isMobile ? "max-lg:hidden" : ""
          } `}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-black hover:text-primaryColor"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="hidden max-lg:block bg-transparent cursor-pointer"
          aria-label="toggle menu"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <img src={xmarkIcon} alt="xmark menu icon" width={25} height={25} />
          ) : (
            <img
              src={hamburgerIcon}
              alt="hamburger menu icon"
              width={25}
              height={25}
            />
          )}
        </button>
        {isOpen && isMobile && (
          <ul className="flex flex-col items-center basis-full gap-2 mt-5">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-black hover:text-primaryColor"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
