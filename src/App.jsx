
import "./App.css"
import AboutMeComponent from "./components/AboutMe/AboutMe";
import ContactComponent from "./components/Contact/Contact";
import FooterComponent from "./components/Footer/Footer";
import HomeComponent from "./components/Home/Home";
import NavbarComponent from "./components/Navbar/Navbar";
import ProjectComponent from "./components/Project/Project";
import WorkComponent from "./components/Work/work";

const App = () => {
   //aca agregamos los componentes que se van a renderizar.
   return (
   
      <>
         <div  className="content ">
         <NavbarComponent />
         <HomeComponent />
         <hr  />
         <AboutMeComponent />
         <hr  />
         <WorkComponent />
         <hr  />
         <ProjectComponent />
         <hr  />
         <ContactComponent />
         
      </div>
      <div>
         <FooterComponent /> 
      </div>
      </>
   );
};

export default App;
