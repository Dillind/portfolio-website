import { useEffect, useState } from "react";
import {
  arrowRightIcon,
  githubIcon,
  arrowUpRightIcon,
  githubBlueIcon,
  arrowUpRightBlueIcon,
} from "../assets/icons";
import Button from "../components/Button";
import { annotate } from "rough-notation";
const ProjectCard = ({
  imgURL,
  title,
  description,
  stack,
  github,
  liveDemo,
}) => {
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
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center bg-[#fff] rounded-lg p-5 shadow-xl transition-transform transform hover:scale-105">
      <img
        src={imgURL}
        alt={title}
        className="w-full rounded-lg border-2 max-w-sm sm:max-w-md object-cover"
      />
      <h4 className="text-3xl max-sm:text-[25px] font-palanquin font-bold my-3 text-center">
        {title}
      </h4>
      <p className="lg:max-w-md mt-2 font-montserrat my-3 text-center">
        {description}
      </p>
      <div className="flex gap-5 justify-center items-center flex-wrap">
        {stack.map((technology, index) => (
          <p
            className=" mt-2 px-2 py-2 font-montserrat text-center"
            key={technology}
            id={`technology-${technology}`}
          >
            {technology}
          </p>
        ))}
      </div>
      <div className="flex mt-6 gap-10 font-montserrat">
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
                key={index}
                target="_blank"
                className="flex gap-2"
              >
                {item.title}
                <img
                  src={githubHovered ? githubBlueIcon : githubIcon}
                  alt="github icon"
                  // width={28}
                  // height={28}
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
                  // width={20}
                  // height={20}
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
