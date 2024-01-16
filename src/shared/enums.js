/* import {
   faHtml5,
   faCss3,
   faReact,
   faNodeJs,
   faJs,
   faFacebook,
   faXTwitter,
   faInstagram,
   faLinkedin,
   faGithub,
} from "@fortawesome/free-brands-svg-icons"; */

import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaFacebookSquare,  FaLinkedin, FaGithub, FaInstagram,   } from 'react-icons/fa';

import { IoLogoJavascript } from "react-icons/io"
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

export const dataHome = [{
   image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1703701646/Portafolio/portada_porfolioweb_u5pqag.png",
   animations: [
      "Bienvenido",
      "Soy desarrollador",
      "Full Stack",
    ],
icons:{
   linkedin: FaLinkedin,
   github: FaGithub,
   instagram: FaInstagram,
},
urlIcons:{
   linkedin: "https://www.linkedin.com/in/auliorovero/",
   github: "https://github.com/Auliorp",
   instagram: "https://www.instagram.com/aulioroverop/"
}
}]

export const dataWorks = [
   {
      id:1,
      year: 2023,
      title: "A.D.I.P",
      duration: "2 meses",
      details: `Landing page realizada para un Proyecto final del Bootcamp "Soy Henry", proyecto grupal`,
   },
   {
      id:2,
      year: 2023,
      title: "Mentalis",
      duration: "1 mes",
      details: "Static page realizada como proyecto freelance.",
   },
];

export const dataProjects = [
   {
      id:1,
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664809/Portafolio/adipweb_darutp.jpg",
      title: "A.D.I.P web",
      description:"Esta es la descripcion del proyecto 1",
      technologies: {
         JavaScript: IoLogoJavascript,
      },
      urlDeploy: "https://front-deploy-adipweb.onrender.com/#/",
   },
   {
      id:2,
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664810/Portafolio/foodpi_ftcsfz.jpg",
      title: "Food PI web",
      description:"Esta es la descripcion del proyecto 2",
      technologies: {
         html: FaHtml5,
         css: FaCss3,
         JavaScript: IoLogoJavascript,
         react: FaReact,
         nodejs: FaNodeJs,
      },
      urlDeploy: "",
   },
   {
      id:3,
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664816/Portafolio/rickandmorty_nlt4t6.jpg",
      title: "Rick and Morty web",
      description:"Esta es la descripcion del proyecto 3",
      technologies: { JavaScript: IoLogoJavascript },
      urlDeploy: "",
   },
   {
      id:4,
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664810/Portafolio/tasks_xaezkj.jpg",
      title: "Tasks web",
      description:"Esta es la descripcion del proyecto 4",
      technologies: { JavaScript: IoLogoJavascript },
      urlDeploy: "",
      urlRepo: "",
   },
];

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

export const dataFooter = [
   {
      id: 1,
      color: "#3b5998",
      icon: FaFacebookSquare,
      url: "https://www.facebook.com/aulioalejandro.roveroparedes",
   },
   {
      id: 2,
      color: "#55acee",
      icon: FaSquareXTwitter,
      url: "https://twitter.com/RoveroAulio",
   },
   {
      id: 3,
      color: "#ac2bac",
      icon: FaInstagram,
      url: "https://www.instagram.com/aulioroverop/",
   },
   {
      id: 4,
      color: "#0082ca",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/auliorovero/",
   },
   {
      id: 5,
      color: "#333333",
      icon: FaGithub,
      url: "https://github.com/Auliorp",
   },
];
