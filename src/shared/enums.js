import {
   faHtml5,
   faCss3,
   faReact,
   faNodeJs,
   faJs,
   faDatabase,
} from "@fortawesome/free-brands-svg-icons";

export const dataAboutMe = [
   {
      resume:
         "Soy una persona tranquila, divertida y dispuesta a salir de aventura con mis amigos.",
      description:
         "Me considero una persona amigable, comunicativa y respetuosa. tengo 24 años de edad y soy de nacionalidad Venezolana, viviendo actialmente el Santiago de Chile. ",
      name: "Aulio",
      lastName: "Rovero",
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664694/Portafolio/2c361060-5d82-4e96-bd03-b87d2f654046_zjgnrx.jpg",
   },
];

export const dataWorks = [
   {
      year: 2023,
      title: "A.D.I.P",
      duration: "2 mes",
      details: `Landing page realizada para un Proyecto final del Bootcamp "Soy Henry", proyecto grupal`,
   },
   {
      year: 2023,
      title: "Mentalis",
      duration: "1 mes",
      details: "Static page realizada como proyecto freelance.",
   },
];

export const dataProjects = [
   {
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664809/Portafolio/adipweb_darutp.jpg",
      title: "AD.I.P web",
      technologies: {
         JavaScript: faJs,
      },
      urlDeploy: "https://front-deploy-adipweb.onrender.com/#/",
   },
   {
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664810/Portafolio/foodpi_ftcsfz.jpg",
      title: "Food PI web",
      technologies: {
         html: faHtml5,
         css: faCss3,
         JavaScript: faJs,
         react: faReact,
         nodejs: faNodeJs,
         database: faDatabase,
      },
      urlDeploy: "",
   },
   {
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664816/Portafolio/rickandmorty_nlt4t6.jpg",
      title: "Rick and Morty web",
      technologies: { JavaScript: faJs },
      urlDeploy: "",
   },
   {
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664810/Portafolio/tasks_xaezkj.jpg",
      title: "Tasks web",
      technologies: { JavaScript: faJs },
      urlDeploy: "",
   },
];
