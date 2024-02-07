import "./project.css";
import "../../App.css"
import { dataProjects } from "../../shared/enums";

const ProjectCard = () => {
   return (
      <div className=" row d-flex align-items-stretch justify-content-center col-11 col-md-12 col-lg-12 col-xl-12 fs-lg-n fs-xl-text-project">
         {dataProjects.map((project) => (
            <div className="col-md-6 col-lg-4 col-xl-3 centered-card pt-3" key={project.id}>
              <div className="project-card col-sm-12 col-md-12 card col-lg-12 col-xl-12 ">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column align-items-center ">
                  <h5 className="card-title fs-xl-text-project">{project.title}</h5>
                  <p className="card-text ">{project.description}</p>
                  <h6 className="fs-lg-n fs-xl-text-project">Tecnologias aplicadas:</h6>
                  <div className="icon-row d-flex justify-content-center">
                    {Object.keys(project.technologies).map((technology, index) => (
                      <span key={index} className="me-2">
                        {project.technologies[technology]({ size: "2em" })}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    {project.urlDeploy.length > 0 ? (
                      <a
                        href={project.urlDeploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        Ver Proyecto
                      </a>
                    ) : ""}
                    <a
                      href={project.urlRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Ver Repositorio
                    </a>
                  </div>
                </div>
              </div>
            </div>
         ))}
      </div>
   );
};

export default ProjectCard;
