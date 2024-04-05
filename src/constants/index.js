import { projectOne, projectTwo, projectThree } from "../assets/images";

export const navLinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const projects = [
  // Project 1: ML Strength: Health and Fitness
  {
    imgURL: projectOne,
    title: "ML Strength",
    description:
      "ML Strength is a static web application that was developed for a client looking to advertise the services they provide and to entice people to visit their health and fitness centre. My role was to design and develop a website based on the documentation given to me regarding the client's requirements.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: [
      { title: "Code", linkTo: "https://github.com/Dillind/ML-Strength" },
    ],
    liveDemo: [
      { title: "Live Demo", linkTo: "https://ml-strength.vercel.app/" },
    ],
  },
  // Project 2: The Mobile Hour
  {
    imgURL: projectTwo,
    title: "The Mobile Hour",
    description:
      "The Mobile Hour is a server-side web application that was developed to establish a modern and secure platform for selling top-brand mobile phones online. The purpose of this project was to deliver an appealing, highly functional, and secure website that met the client's expectations.",
    stack: ["EJS", "Express", "MySQL"],
    github: [
      { title: "Code", linkTo: "https://github.com/Dillind/the-mobile-hour" },
    ],
    // liveDemo: [{ title: "Live Demo", linkTo: "" }],
  },
  // Project 3: Beer-O-Clock
  {
    imgURL: projectThree,
    title: "Beer-O-Clock",
    description:
      "Beer-O-Clock is a full-stack application that enables users to select a country from a dropdown menu, providing access to information about the most popular beers in that country, including product specifications and the Australian stores that they can be purchased from.",
    stack: ["MERN", "MaterialUI", "API"],
    github: [
      { title: "Code", linkTo: "https://github.com/Dillind/Beer-O-Clock-V3" },
    ],
    liveDemo: [
      { title: "Live Demo", linkTo: "https://beer-o-clock.netlify.app/" },
    ],
  },
];
