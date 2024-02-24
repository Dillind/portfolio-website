import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
const Projects = () => {
  return (
    <section id="projects" className="max-container max-sm:mt-12">
      <div className="relative flex flex-col justify-start gap-5">
        <h2 className="text-4xl max-sm:text-[40px] font-palanquin font-bold">
          Projects
        </h2>
        <p className="lg:max-w-xl font-montserrat ml-1">
          These are some of the projects that I have worked on during my studies
          and in my spare time:
        </p>
      </div>
      <div className="mt-6 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-10">
        {projects.map((item) => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
