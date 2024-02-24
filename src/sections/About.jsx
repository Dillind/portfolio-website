import { useEffect } from "react";
import { githubIcon, linkedinIcon, downloadIcon } from "../assets/icons";
import { dylanPortrait } from "../assets/images";
import Button from "../components/Button";
import { annotate } from "rough-notation";

const About = () => {
  useEffect(() => {
    // TODO: Fix the roughnotation variables
    const n1 = document.getElementById("hire-me");
    const n2 = document.getElementById("developer");
    const n4 = document.getElementById("user-friendly");
    const n5 = document.getElementById("appealing");
    const n6 = document.getElementById("frontend");
    const n7 = document.getElementById("backend");

    const a1 = annotate(n1, {
      type: "underline",
      color: "#2f55e3",
      strokeWidth: 2,
      multiline: true,
    });

    const a2 = annotate(n2, {
      type: "circle",
      color: "#2f55e3",
      padding: [2, 4],
      strokeWidth: 1,
    });

    const a4 = annotate(n4, {
      type: "highlight",
      color: "#2f55e3",
      multiline: true,
    });

    const a5 = annotate(n5, {
      type: "highlight",
      color: "#2f55e3",
      multiline: true,
    });

    const a6 = annotate(n6, {
      type: "box",
      color: "#2f55e3",
      strokeWidth: 1,
      multiline: true,
    });

    const a7 = annotate(n7, {
      type: "box",
      color: "#2f55e3",
      strokeWidth: 1,
      multiline: true,
    });

    a1.show();
    a2.show();
    a4.show();
    a5.show();
    a6.show();
    a7.show();
  }, []);

  return (
    <section
      id="about"
      className="w-full flex xl:flex-row flex-col-reverse justify-center gap-10 max-container"
    >
      {/* Summary Text  */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full lg:pt-10">
        <h1 className="text-4xl max-md:text-[40px] max-sm:leading-[50px] font-bold py-5 font-palanquin lg:pt-15 max-md:text-center">
          Hello there! <br />
          I'm Dylan, a <span id="developer">developer</span> {""}
          based in Queensland.
        </h1>
        <div className="w-full mb-5 border"></div>
        <p className="font-montserrat">
          I am passionate about building websites that are both
          <span id="user-friendly" className="text-white mx-1.5">
            {" "}
            user-friendly
          </span>{" "}
          and
          <span id="appealing" className="text-white mx-1.5">
            {" "}
            visually appealing.
          </span>
        </p>
        <p className="font-montserrat my-2">
          Ever since I was a kid, I have been obsessed with computers, often
          spending countless hours in my dad's office playing video games and
          exploring the wonders of the internet. Since then, my curiosity for
          technology has only grown, and in recent years, I have become
          increasingly drawn to the world of software development.
        </p>
        <p className="font-montserrat my-2">
          I started my software development journey in mid-2022 as a self-taught
          developer after the pandemic helped me to reevaluate my priorities and
          attitudes towards my career path. I sought something that would not
          only incorporate my natural strengths and interests in technology, but
          would also provide unique challenges and foster personal growth. I am
          currently in the final semester of my Diploma of IT, specialising in{" "}
          {""}
          <span id="frontend" className="mx-1">
            front-end
          </span>{" "}
          {""}
          and {""}
          <span id="backend" className="mx-1">
            back-end web development.{" "}
          </span>{" "}
          {""}
        </p>
        <p className="font-montserrat my-2">
          I am looking for an entry level position that offers {""}
          <span id="learning"> extensive learning opportunities</span> to
          enhance my skills as a front-end developer.
        </p>
        <p className="font-montserrat my-5">
          Contact me {""}
          <a href="#contact" id="hire-me">
            here.
          </a>
        </p>
        <span className="flex gap-3">
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
              className="object-contain pt-5"
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
              className="object-contain pt-5"
            />
          </a>
        </span>
        <div className="mt-5">
          <Button
            label="Resume"
            iconURL={downloadIcon}
            linkTo="/resume/resume.pdf"
          />
        </div>
      </div>
      {/* Portrait */}
      <div className="relative flex flex-1 justify-center items-center max-md:pt-10 max-md:pb-0 py-10 bg-white bg-cover bg-center">
        <img
          src={dylanPortrait}
          alt="Portrait of Dylan Lindsay"
          className="object-contain shadow-2xl rounded-2xl w-full max-w-xs sm:max-w-sm "
        />
      </div>
    </section>
  );
};

export default About;
