import { arrowRight } from "../assets/icons";
import { dylanPortrait } from "../assets/images";
import Button from "../components/Button";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex xl:flex-row flex-col-reverse justify-center gap-10 max-container"
    >
      {/* Summary Text  */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x lg:pt-10">
        <h1 className="text-4xl max-sm:text-[40px] max-sm:leading-[50px] font-bold py-5 font-palanquin lg:pt-28 ">
          Hello there! I'm Dylan, a developer based in Queensland.
        </h1>
        <div className="flex justify-start items-start flex-wrap w-full mb-10 border gap-16"></div>
        <p className="font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          vero nemo iusto neque officiis, quasi omnis libero natus autem at quo
          nesciunt eveniet corrupti, assumenda incidunt doloremque deserunt
          maxime impedit quis fugit laboriosam, atque totam sunt unde. Ducimus,
          numquam obcaecati excepturi impedit sit quos ipsum inventore soluta
          aut quis harum.
        </p>
        <div className="flex gap-10 mt-10">
          {/* TODO: allow Resume to be downloaded */}
          <Button label="View Resume" iconURL={arrowRight} linkTo={""} />
          <Button
            label="View Linkedin"
            iconURL={arrowRight}
            linkTo={"https://www.linkedin.com/in/dylan-lindsay/"}
          />
        </div>
      </div>
      {/* Portrait */}
      <div className="relative flex flex-1 justify-center items-center pt-40  bg-white bg-cover bg-center">
        <img
          src={dylanPortrait}
          alt="dylan lindsay portrait"
          className="object-contain relative z-10 shadow-lg rounded-lg w-full max-w-sm"
        />
      </div>
    </section>
  );
};

export default About;
