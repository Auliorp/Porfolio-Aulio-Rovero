import ProjectCard from "./ProjectCard";

const ProjectComponent = () => {
   return (
      <div id="project" className="container col-md-12 col-lg-12 col-xl-12 ">
         <h1 className="text-dark ">Mis proyectos realizados</h1>
         <ProjectCard/>
      </div>
   );
};

export default ProjectComponent;
