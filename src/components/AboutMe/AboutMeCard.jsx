import "./aboutMe.css"
import { FaMapMarkerAlt } from "react-icons/fa";

const AboutMeCard = () => {
   return (<div>
      <div className="card mb-3">
      <h2 className="card-title mt-4">Aulio Rovero</h2>
  <img src="https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664694/Portafolio/2c361060-5d82-4e96-bd03-b87d2f654046_zjgnrx.jpg" className="card-img-top img-custom-size"  alt="..."/>
  <div className="card-body">
<h5 className="card-title">Un poco sobre mi:</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    
  </div>
  {/* Carrucel */}
  <div id="carouselExampleSlidesOnly" className="carousel slide img-carousel rounded"  data-bs-ride="carousel" data-bs-interval="2000">
  <div className="carousel-inner ">
    <div className="carousel-item active ">
      <img src="https://res.cloudinary.com/dz7ivvcp2/image/upload/v1705619395/Portafolio/IMG_20220814_120810_ykjod3.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dz7ivvcp2/image/upload/v1705603848/Portafolio/9e8d3f48-4765-4e56-a849-0abafc3e3fd8_encbaq.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dz7ivvcp2/image/upload/v1705603838/Portafolio/41d7b577-d5a3-40b6-97b8-40bbe5d23e09_m07tok.jpg" className="d-block w-100" alt="..."/>
    </div>
    
  </div>
</div>
<p className="card-text mb-2 "><FaMapMarkerAlt className="mx-1" /><small className="text-body-secondary">Nombre del lugar</small></p>
</div>

   </div>)
};

export default AboutMeCard;
