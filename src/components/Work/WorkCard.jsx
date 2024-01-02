/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
import "./work.css"
import { dataWorks } from "../../shared/enums";

const WorkCard = () => {
   return (
      <div  >
         {dataWorks.map((work) => (
            <div className="card mb-3" key={work.id}>
         <div className="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
            <span className=" bg-primary-subtle">{work.year}</span>
            <h3>{work.title}</h3>
         <small className="text-body-secondary ">{work.duration}</small>
         </div>
         
  <div className="card-body">
    
    <p className="card-text">{work.details}</p>
  </div>
</div>
         ))}
         
</div>
   )
};

export default WorkCard;
