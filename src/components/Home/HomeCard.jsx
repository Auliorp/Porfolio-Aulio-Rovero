import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";

const HomeCard = () => {
  return (
    <div id="home" className="background">
      <div className="overlay">
       
        <div className="container">
          
          <h2 className="pt-4">
           
            <TypeAnimation
              sequence={[
                "Bienvenido",
                2000,
                "Soy desarrollador",
                2000,
                "Full Stack",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "3em", paddingLeft: "5px" }}
            />
          </h2>
          
          </div>
          <div className="social-icons-container" >
        <a href="https://www.linkedin.com/in/auliorovero/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="cursor-pointer" size="lg" />
            </a>
            <a href="https://github.com/Auliorp" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="cursor-pointer" size="lg" />
            </a>
            <a href="https://www.instagram.com/aulioroverop/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="cursor-pointer" size="lg" />
            </a>
          </div>
        </div>
        
      </div>
  );
}

export default HomeCard;
