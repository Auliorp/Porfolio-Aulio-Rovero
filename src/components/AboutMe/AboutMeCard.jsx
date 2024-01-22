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
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/dz7ivvcp2/image/upload/v1705619395/Portafolio/IMG_20220814_120810_ykjod3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="card-title">First slide label</h5>
        <p className="card-text">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dz7ivvcp2/image/upload/v1705603848/Portafolio/9e8d3f48-4765-4e56-a849-0abafc3e3fd8_encbaq.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dz7ivvcp2/image/upload/v1705603838/Portafolio/41d7b577-d5a3-40b6-97b8-40bbe5d23e09_m07tok.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
  </div>
);
};
      


export default AboutMeCard;
