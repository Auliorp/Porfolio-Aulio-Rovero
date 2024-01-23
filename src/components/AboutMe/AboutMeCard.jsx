import { dataAboutMe, dataHiking } from "../../shared/enums";
import "./aboutMe.css"
import { FaMapMarkerAlt } from "react-icons/fa";

const AboutMeCard = () => {
   return (
    <div>
     <div>
      {dataAboutMe.map((about, index) => (
        <div key={index} className="card mb-3">
          <h2 className="card-title mt-4">{about.title}</h2>
          <img src={about.imageProfile} className="card-img-top img-custom-size" alt={about.altDescription} />
          <div className="card-body">
            <h5 className="card-title">Un poco sobre mi:</h5>
            <p className="card-text">{about.description}</p>
          </div>
        </div>
      ))}
    </div>
    {/* Carousel */}
    
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators bg-dark-subtle rounded">
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
        <div className="carousel-inner">
          {dataHiking.map((hiking, index) => (
            <div key={hiking.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={hiking.image} className="d-block w-90 img-carousel" alt={hiking.altDescription} />
              <div className="bg-dark " >
        <a
          href={hiking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-text mb-1 text-decoration-none"
        >
          <FaMapMarkerAlt className="mx-1 bs-primary " />
          <small className="bs-primary ">{hiking.title}</small>
        </a>
      </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark me-3" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark ms-3" aria-hidden="true"></span>
          <span className="visually-hidden ">Next</span>
        </button>
      </div>
    </div>
    </div>
);
};
      
export default AboutMeCard;
