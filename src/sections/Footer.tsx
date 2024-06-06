import {
  githubIcon,
  linkedinIcon,
  emailIcon,
  copyrightSignIcon,
} from "../assets/icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container px-5">
      <div className="flex justify-between items-center gap-20 max-lg:gap-5 flex-wrap">
        <div className="flex items-center max-lg:justify-center max-lg:w-full">
          <h3 className="font-montserrat">
            Copyright © 2024. All rights reserved.
          </h3>
        </div>
        <div className="flex gap-3 items-center justify-center max-lg:w-full">
          <a
            aria-label="github"
            target="_blank"
            href="https://github.com/Dillind"
          >
            <img
              src={githubIcon}
              alt="github icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </a>
          <a
            aria-label="linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/dylan-lindsay/"
          >
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </a>
          <a
            aria-label="email"
            target="_blank"
            href="mailto: dylan.lindsay234@gmail.com"
          >
            <img
              src={emailIcon}
              alt="email icon"
              width={35}
              height={35}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
