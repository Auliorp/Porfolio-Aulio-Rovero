import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";
import { dataHome } from "../../shared/enums";

const HomeCard = () => {
  return (
    <div id="home" className="background">
      <div className="overlay">
        {dataHome.map((item, index) => (
          <div key={index} className="container">
            <h2 className="pt-4 ">
              <TypeAnimation
                sequence={item.animations}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                speed={200}
                style={{ fontSize: "10vw", paddingLeft: "5px" }}
              />
            </h2>
            <div className="social-icons-container">
              {Object.keys(item.icons).map((icon, iconIndex) => (
                <a key={iconIndex} href={item.urlIcons[icon]} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={item.icons[icon]} className="cursor-pointer" size="lg" />
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
