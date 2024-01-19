import "./project.css"
import { dataProjects } from "../../shared/enums";

const ProjectCard = () => {
   return (
      <div className="row ">
         {dataProjects.map((project) => (
            <div className="col-md-3 centered-card" key={project.id} >
            <div className="card mb-2 " style={{width: "18rem"}} >
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5> 
        <p className="card-text">{project.description}</p>
      </div>
      <h6>Tecnologias aplicadas:</h6>
      <div className="card-body d-flex justify-content-center " style={{ maxWidth: "100%", overflow: "hidden" }}>
         <div  className="icon-row">{Object.keys(project.technologies).map((technology, index) => (
                        <span key={index} className="me-2">
                           {project.technologies[technology]({ size: "2em" })}
                        </span>
                     ))}</div>
                     
                  </div>
      <div className="card-body">
      {project.urlDeploy.length > 0 ? (
                <a
                  href={project.urlDeploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Ver Proyecto
                </a>
              ) : (
                <p className="text-danger">URL no disponible</p>
              )}
        <a href={project.urlRepo}
        target="_blank" 
        rel="noopener noreferrer"
        className="card-link">Ver Repositorio</a>
      </div>
    </div>
    </div>
         ))}
      
    </div>
   );
};
export default ProjectCard;
