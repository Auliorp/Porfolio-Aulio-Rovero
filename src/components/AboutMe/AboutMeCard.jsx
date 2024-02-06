import { dataAboutMe, dataHiking } from "../../shared/enums";
import "./aboutMe.css"
import "../../App.css"
import { FaMapMarkerAlt } from "react-icons/fa";

const AboutMeCard = () => {
   return (
    <div>
<div className="d-flex justify-content-center ">
  {dataAboutMe.map((about, index) => (
    <div className="card mb-3" style={{maxWidth: "570px"}} key={index}>
    <div className="row g-0 bg-dark ">
      <div className="col-md-4 ">
        <img src={about.imageProfile} className="img-fluid rounded " alt={about.altDescription}/>
      </div>
      <div className="col-md-8 bg-primary-subtle">
        <div className="card-body">
          <h5 className="card-title">{about.title}</h5>
          <p className="card-text">{about.description}</p>
          <p className="card-text"><small className="text-body-secondary">{about.descriptionTwo}</small></p>
        </div>
        </div>
      </div>
    </div>
  ))}
    
</div>
    {/* Carousel */}
    
    <div className="col-xl-12">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators  rounded ">
          {dataHiking.map((hiking, index) => (
            <button
              key={hiking.id}
              type="button"
              data-bs-target="#carouselExampleCaptions "
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner ">
          {dataHiking.map((hiking, index) => (
            <div key={hiking.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={hiking.image} className="d-block w-90 img-carousel" alt={hiking.altDescription} />
              <div className="" >
        <a
          href={hiking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-text text-decoration-none text-white fs-sm-n fs-md-n fs-lg-n fs-xl-n"
        >
          <FaMapMarkerAlt className="mx-2 bs-primary " />
          <small className="bs-primary ">{hiking.title}</small>
        </a>
      </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon text-white me-3" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon text-white ms-3" aria-hidden="true"></span>
          <span className="visually-hidden ">Next</span>
        </button>
      </div>
    </div>
    </div>
);
};
      
export default AboutMeCard;
