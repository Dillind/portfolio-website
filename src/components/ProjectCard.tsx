import { useEffect, useState } from "react";
import {
  arrowRightIcon,
  githubIcon,
  arrowUpRightIcon,
  githubBlueIcon,
  arrowUpRightBlueIcon,
} from "../assets/icons";
import Button from "./Button";
import { annotate } from "rough-notation";
import React from "react";

interface projectsProps {
  id: number;
  imgURL: string;
  title: string;
  description: string;
  stack: string[];
  github: { title: string; linkTo: string }[];
  liveDemo?: { title: string; linkTo: string }[];
}

const ProjectCard = ({
  imgURL,
  title,
  description,
  stack,
  github,
  liveDemo,
}: projectsProps) => {
  const [githubHovered, setGithubHovered] = useState(false);
  const [arrowUpRightHovered, setArrowUpRightHovered] = useState(false);

  useEffect(() => {
    stack.forEach((technology) => {
      const id = `technology-${technology}`;
      const element = document.getElementById(id);

      if (element) {
        const annotation = annotate(element, {
          type: "box",
          color: "#2f55e3",
          multiline: true,
        });
        annotation.show();
      }
    });
  }, [stack]);

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center bg-[#fff] rounded-lg p-5 shadow-xl">
      <img
        src={imgURL}
        alt={title}
        className="object-cover w-full max-w-sm border-2 rounded-lg sm:max-w-md"
      />
      <h4 className="text-3xl max-sm:text-[25px] font-palanquin font-bold my-3 text-center">
        {title}
      </h4>
      <p className="my-3 mt-2 text-center lg:max-w-md font-montserrat">
        {description}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {stack.map((technology, index) => (
          <p
            className="px-2 py-2 mt-2 text-center font-montserrat"
            key={technology}
            id={`technology-${technology}`}
          >
            {technology}
          </p>
        ))}
      </div>
      <div className="flex gap-10 mt-6 font-montserrat">
        {/* Github Code Link */}
        {github && (
          <div
            className={`flex gap-2 max-w-10 cursor-pointer ${
              githubHovered ? "text-blue-500" : ""
            }`}
            onMouseEnter={() => setGithubHovered(true)}
            onMouseLeave={() => setGithubHovered(false)}
          >
            {github.map((item, index) => (
              <a
                href={item.linkTo}
                rel="noreferrer"
                key={index}
                target="_blank"
                className="flex gap-2"
              >
                {item.title}
                <img
                  src={githubHovered ? githubBlueIcon : githubIcon}
                  alt="github icon"
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
        )}
        {/* Live Code Link */}
        {liveDemo && (
          <div
            className={`flex gap-2 cursor-pointer ${
              arrowUpRightHovered ? "text-blue-500" : ""
            }`}
            onMouseEnter={() => setArrowUpRightHovered(true)}
            onMouseLeave={() => setArrowUpRightHovered(false)}
          >
            {liveDemo.map((item, index) => (
              <a
                href={item.linkTo}
                key={index}
                rel="noreferrer"
                className="flex gap-2"
                target="_blank"
              >
                {item.title}
                <img
                  src={
                    arrowUpRightHovered
                      ? arrowUpRightBlueIcon
                      : arrowUpRightIcon
                  }
                  alt="arrow up right icon"
                  width={15}
                  height={15}
                />
              </a>
            ))}
          </div>
        )}
      </div>
      {/* TODO: Fix button so it is specific to each project */}
      {/* <div className="mt-5">
        <Button label="View Project" iconURL={arrowRightIcon} />
      </div> */}
    </div>
  );
};

export default ProjectCard;
