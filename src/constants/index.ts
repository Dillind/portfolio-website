import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../assets/images";

interface navLinksProps {
  href: string;
  label: string;
}

interface projectsProps {
  id: number;
  imgURL: string;
  title: string;
  description: string;
  stack: string[];
  github: { title: string; linkTo: string }[];
  liveDemo?: { title: string; linkTo: string }[];
}

export const navLinks: navLinksProps[] = [
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

export const projects: projectsProps[] = [
  // Project 1: ML Strength: Health and Fitness
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    imgURL: projectThree,
    title: "Beer-O-Clock",
    description:
      "Beer-O-Clock is a full-stack web application that enables users to select a country from a dropdown menu, providing access to information about the most popular beers in that country, including product specifications and the Australian stores that they can be purchased from.",
    stack: ["MERN", "MaterialUI", "API"],
    github: [
      { title: "Code", linkTo: "https://github.com/Dillind/Beer-O-Clock-V3" },
    ],
    liveDemo: [
      { title: "Live Demo", linkTo: "https://beer-o-clock.netlify.app/" },
    ],
  },
  // {
  //   // Project 4: High Street Gym
  //   id: 4,
  //   imgURL: projectFour,
  //   title: "High Street Gym",
  //   description:
  //     "High Street Gym is a full-stack mobile web application that creates a seamless user experience for gym members to book and manage their classes, as well as interact with other members via the built-in blog system.",
  //   stack: ["SERN", "DaisyUI"],
  //   github: [
  //     { title: "Code", linkTo: "https://github.com/Dillind/high-street-gym" },
  //   ],
  //   // liveDemo: [
  //   //   { title: "Live Demo", linkTo: "" },
  //   // ],
  // },
];
