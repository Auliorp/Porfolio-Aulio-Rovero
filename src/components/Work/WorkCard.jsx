
import "./work.css"
import "../../App.css"
import { dataWorks } from "../../shared/enums";

const WorkCard = () => {
   return (
      <div  >
         {dataWorks.map((work) => (
            <div className="card mb-3 " key={work.id}>
         <div className="card-header d-flex justify-content-between align-items-center bg-primary-subtle fs-lg-n fs-xl-n">
            <span className=" bg-primary-subtle">{work.year}</span>
            <h3>{work.title}</h3>
         <small className="text-body-secondary ">{work.duration}</small>
         </div>
         
  <div className="card-body fs-lg-n fs-xl-n">
    
    <p className="card-text">{work.details}</p>
  </div>
</div>
         ))}
         
</div>
   )
};

export default WorkCard;
