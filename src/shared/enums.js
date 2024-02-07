
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaFacebookSquare,  FaLinkedin, FaGithub, FaInstagram,   } from 'react-icons/fa';

import { IoLogoJavascript } from "react-icons/io"
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiTypescript, SiNestjs, SiPostgresql, SiRedux, SiSequelize, SiTailwindcss, SiMongodb, SiMongoose} from "react-icons/si";
import { PiFileSqlLight } from "react-icons/pi";

export const dataHome = [{
   image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1703701646/Portafolio/portada_porfolioweb_u5pqag.png",
   animations: [
      "Bienvenido",
      "Soy", 
      "Desarrollador",
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
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664816/Portafolio/rickandmorty_nlt4t6.jpg",
      title: "Rick and Morty web",
      description:"Primer proyecto realizado en el bootcamp SoyHenry donde pude aplicar un desarrollo Front-end trabajando con una API del lado del servidor.",
      technologies: { 
         JavaScript: IoLogoJavascript,
         react: FaReact,
         redux: SiRedux,
         html: FaHtml5,
         css: FaCss3,
      },
      urlDeploy: "",
      urlRepo:"https://github.com/Auliorp/rickandmorty-Create",
   },
   {
      id:2,
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664810/Portafolio/foodpi_ftcsfz.jpg",
      title: "Food PI web",
      description:"Proyecto realizado de manera individual en el cual pude trabajar tanto en el front-end como en el Back-end, trabajando con una API y una base de datos. Este proyecto fue creado para el bootcamp SoyHenry para asi lograr pasar al proyecto final.",
      technologies: {
         JavaScript: IoLogoJavascript,
         html: FaHtml5,
         css: FaCss3,
         react: FaReact,
         redux: SiRedux,
         nodejs: FaNodeJs,
         sequelize: SiSequelize
      },
      urlDeploy: "",
      urlRepo:"https://github.com/Auliorp/pi-food-aarp"
   },{
      id:3,
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664809/Portafolio/adipweb_darutp.jpg",
      title: "A.D.I.P web",
      description:"En este proyecto pude trabajar del lado del desarrollo Back-end junto a un maravilloso equipo con el fin de realizar el proyecto final para asi graduarnos como desarrolladores full stack en el bootcamp SoyHenry.",
      technologies: {
         typeScript: SiTypescript,
         html: FaHtml5,
         css: FaCss3,
         nodeJs: FaNodeJs,
         nestJs: SiNestjs,
         postgresql: SiPostgresql,
         sql: PiFileSqlLight,
      },
      urlDeploy: "https://front-deploy-adipweb.onrender.com/#/",
      urlRepo:"https://github.com/ProyectoWEBADIP/pf-api"
   },
   {
      id:4,
      image: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664810/Portafolio/tasks_xaezkj.jpg",
      title: "Tasks web",
      description:"Este proyecto trata de una app de notas para facilitar las tareas del dia, en ella se implemento el lado front-end como el back-end para almacenar las tareas que se van realizando.",
      technologies: { 
         typeScript: SiTypescript,
         JavaScript: IoLogoJavascript,
         nodeJs: FaNodeJs, 
         tailwind: SiTailwindcss,
         css: FaCss3,
         html: FaHtml5,
         mongodb: SiMongodb,
         mongoose: SiMongoose,
         nestjs: SiNestjs, 

       },
      urlDeploy: "",
      urlRepo: "https://github.com/Auliorp/Tasks-fron-end",
   },
];

export const dataAboutMe = [
   {
      title: "Aulio Rovero",
      altDescription: "Foto de perfil Aulio Rovero",
      description:
         "Me considero una persona apasionada, comunicativa y respetuosa. tengo 25 años de edad y soy de nacionalidad Venezolana, viviendo actialmente el Santiago de Chile. Amante del arte y las aventuras, me gusta realizar senderismo y compartir con mis amigos. Aca te dejo algunas fotos de mis paseos.",
      imageProfile: "https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664694/Portafolio/2c361060-5d82-4e96-bd03-b87d2f654046_zjgnrx.jpg",
   },
];

export const dataHiking = [
   {
      id: 1,
      title: "Aguas de San Ramon",
      altDescription: "Foto paisaje Aguas de San Ramon",
      image:"https://res.cloudinary.com/dz7ivvcp2/image/upload/v1705619395/Portafolio/IMG_20220814_120810_ykjod3.jpg",
      url:"https://www.google.cl/maps/place/Salto+de+Apoquindo/@-33.4415177,-70.4597778,14z/data=!4m14!1m7!3m6!1s0x9662cdd0eb3179ad:0x103dffb8668a0b77!2sParque+Natural+Aguas+de+Ram%C3%B3n!8m2!3d-33.433615!4d-70.5191722!16s%2Fg%2F1hc0g5tx0!3m5!1s0x9662cd6c04071ba9:0xe3ab49d9b58976e3!8m2!3d-33.4418755!4d-70.4608781!16s%2Fm%2F0fq19bx?entry=ttu"
   },
   {
      id: 2,
      title:"Cerro el Carbon",
      altDescription: "Foto paisaje Cerro el Carbon",
      image:"https://res.cloudinary.com/dz7ivvcp2/image/upload/v1705603848/Portafolio/9e8d3f48-4765-4e56-a849-0abafc3e3fd8_encbaq.jpg",
      url:"https://www.google.cl/maps/place/Cerro+El+Carb%C3%B3n/@-33.3636639,-70.6010321,15.96z/data=!4m6!3m5!1s0x9662c892868e8423:0xd42d6cc96afe7a75!8m2!3d-33.362736!4d-70.600555!16s%2Fg%2F11dx92nt1q?entry=ttu",
   },
   {
      id: 3, 
      title:"Cerro Manquehue",
      altDescription: "Foto paisaje Cerro Manquehue",
      image:"https://res.cloudinary.com/dz7ivvcp2/image/upload/v1705603838/Portafolio/41d7b577-d5a3-40b6-97b8-40bbe5d23e09_m07tok.jpg",
      url:"https://www.google.cl/maps/place/Cerro+Manquehue/@-33.3506084,-70.5836027,16.5z/data=!4m14!1m7!3m6!1s0x9662c8f8e4af6275:0x80215c167e628c67!2sCerro+Manquehue!8m2!3d-33.3508333!4d-70.5822222!16s%2Fg%2F120jr2q9!3m5!1s0x9662c8f8e4af6275:0x80215c167e628c67!8m2!3d-33.3508333!4d-70.5822222!16s%2Fg%2F120jr2q9?entry=ttu",
   }
]

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

export const dataNavbar = [{
   title: "<Aulio Rovero/>",
   url:"https://www.linkedin.com/in/auliorovero/",
   components:[
      {
         id: 1,
componentsName: "Principal",
componentsId:"#welcome",
      },
      {
         id: 2,
componentsName: "Sobre mi",
componentsId:"#aboutMe",
      },
      {
         id: 3,
componentsName: "Trabajos",
componentsId:"#work",
      },
      {
         id: 4,
componentsName: "Proyectos",
componentsId:"#project",
      },
      {
         id: 5,
componentsName: "Contactame",
componentsId:"#contact",
      },
   ]
}]