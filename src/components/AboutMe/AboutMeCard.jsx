import { dataAboutMe, dataHiking } from "../../shared/enums";
import "./aboutMe.css"
import "../../App.css"
import { FaMapMarkerAlt } from "react-icons/fa";

const AboutMeCard = () => {
   return (
    <div className="container">
<div className="d-flex justify-content-center col-md-12 col-lg-11 col-xl-12">
  {dataAboutMe.map((about, index) => (
    <div className="card mb-4 col-md-11 col-lg-10 col-xl-10" style={{maxWidth: "800px"}} key={index}>
    <div className="row g-0 col-md-12 col-lg-12">
      <div className="col-md-6 col-lg-6"> 
        <img src={about.imageProfile} className="img-fluid" alt={about.altDescription}/>
      </div>
      <div className="col-md-6 col-lg-6 bg-primary-subtle  position-relative">
        <div className="card-body  fs-lg-n fs-xl-n">
          <h2 className="card-title ">{about.title}</h2>
          <p className="card-text">{about.description}</p>
        </div>
        </div>
      </div>
    </div>
  ))}
    
</div>
    {/* Carousel */}
    
    <div className="col-md-11 col-lg-9 col-xl-9">
  <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
    <div className="carousel-indicators rounded mb-3 ">
      {dataHiking.map((hiking, index) => (
        <button
          key={hiking.id}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
          aria-current={index === 0 ? 'true' : undefined}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
    </div>
    <div className="carousel-inner">
      {dataHiking.map((hiking, index) => (
        <div key={hiking.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img src={hiking.image} className="d-block w-100 img-carousel" alt={hiking.altDescription} />
          <div className="d-flex flex-column align-items-center position-absolute bottom-0 start-50 translate-middle-x ">
            <a
              href={hiking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-text text-decoration-none  text-white fs-sm-n fs-md-n fs-lg-n fs-xl-n padding-aboutMe "
            >
              <FaMapMarkerAlt className="mx-1 bs-primary " />
              <small className="bs-primary fs-text-Carousel fs-md-n fs-lg-text-Carousel fs-xl-n">{hiking.title}</small>
            </a>
          </div>
        </div>
      ))}
    </div>
    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon text-white me-3 mb-4" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon text-white ms-3 mb-4" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    </div>
);
};
      
export default AboutMeCard;
