import ProjectCard from "./ProjectCard";

const ProjectComponent = () => {
   return (
      <div id="project" className="container">
         <h1 className="text-dark mb-5 ">Mis proyectos realizados</h1>
         <ProjectCard/>
      </div>
   );
};

export default ProjectComponent;
