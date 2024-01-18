import "./aboutMe.css"
const AboutMeCard = () => {
   return (<div>
      <div className="card mb-3">
  <img src="https://res.cloudinary.com/dz7ivvcp2/image/upload/v1702664694/Portafolio/2c361060-5d82-4e96-bd03-b87d2f654046_zjgnrx.jpg" className="card-img-top img-custom-size"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small className="text-body-secondary">Correo electronico</small></p>
  </div>
  {/* Carrucel */}
  <div id="carouselExampleSlidesOnly" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="4000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes548cGsnbY6wedeEYQNgLYSK1raGLEFS5jCMMEKzqg&s" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://hips.hearstapps.com/hmg-prod/images/perritos-de-instagram-1616062929.jpg?crop=0.492xw:0.908xh;0.508xw,0.0917xh&resize=640:*" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div>
   </div>)
};

export default AboutMeCard;
