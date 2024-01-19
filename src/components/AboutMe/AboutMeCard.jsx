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
      <div id="carouselExampleSlidesOnly" className="carousel slide img-carousel rounded" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-inner">
          {dataHiking.map((hiking) => (
            <div key={hiking.id} className={`carousel-item ${hiking.id === 0 ? 'active' : ''}`}>
              <img  src={hiking.image}  className="d-block w-100 text-dark" alt={hiking.altDescription} />
              <a href={hiking.url}
              target="_blank" 
              rel="noopener noreferrer"
               className="card-text mb-2 text-decoration-none ">
                <FaMapMarkerAlt className="mx-1 bs-primary" /><small className="bs-primary">{hiking.title}</small></a>
            </div>
            
          ))}
        </div>
      </div>
      
    </div>
  </div>
);
};
      


export default AboutMeCard;
