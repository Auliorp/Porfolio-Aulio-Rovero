import { dataProjects } from "../../shared/enums";

const ProjectCard = () => {
   return (
      <div className="row">
         {dataProjects.map((project) => (
            <div className="col-md-3" key={project.id} >
            <div className="card mb-4 " style={{width: "18rem"}} >
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
      </div>
      <div className="list-group list-group-flush">
        <li className="list-group-item">Aca iran los iconos</li>
       
      </div>
      <div className="card-body">
        <a href={project.urlDeploy} className="card-link">Link de Proyecto</a>
        <a href={project.urlRepo}className="card-link">Repositorio</a>
      </div>
    </div>
    </div>
         ))}
      
    </div>
   );
};
export default ProjectCard;
