import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {TypeAnimation} from "react-type-animation";

const HomeCard = () => {
  return (
    <div id="home" className="position-relative">
      <div></div>
         <img
            className="w-100 h-screen object-cover object-left scale-x-[1]"
            src="https://cocosolution.com/cms/uploads/1657204741-o_1fj38p0rk1m0oc6fjbpfda4k1a.png"
            alt="image home"
         />
         <div className="overlay d-flex flex-column justify-content-center align-items-center text-white h-screen" >
         <div className="container h-screen d-flex flex-column justify-content-center align-items-center text-black">
        <h1 className="text-5xl font-bold">
               Aulio Rovero
            </h1>
            <h2 className=" text-2xl pt-4">
               Soy
               <TypeAnimation
                  sequence={[
                     "Desarrollador",
                     2000,
                     "Full Stack",
                     2000,
                     "Amante de la tecnologia",
                     2000,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "1em", paddingLeft: "5px" }}
               />
            </h2>
            <div className="d-flex justify-content-between pt-6" style={{ maxWidth: "120px", width: "100%" }}>
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
      </div>)
}

export default HomeCard