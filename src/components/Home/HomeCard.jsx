import "./home.css";
import "../../App.css"
import { TypeAnimation } from "react-type-animation";
import { dataHome } from "../../shared/enums";

const HomeCard = () => {
  return (
    <div id="home" className="background col-xl-12">
      <img src="https://res.cloudinary.com/dz7ivvcp2/image/upload/v1703701646/Portafolio/portada_porfolioweb_u5pqag.png" alt="imagen de fondo" className="home-img-background rounded-bottom"/>
      <div className="overlay">
        {dataHome.map((item, index) => (
          <div key={index} className="container ">
            
            <h2 className="pt-4 position-absolute top-50 start-50 translate-middle display-2">
              <TypeAnimation
                sequence={item.animations}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                speed={220}
              />
            </h2>
            
            <div className="social-icons-container ">
              {Object.keys(item.icons).map((icon, iconIndex) => (
                <a key={iconIndex} href={item.urlIcons[icon]} target="_blank" rel="noopener noreferrer">
                {item.icons[icon]({  className: "cursor-pointer fs-lg-icons fs-xl-icons" })}
              </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default HomeCard;
