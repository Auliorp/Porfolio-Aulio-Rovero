
import "./App.css"
import AboutMeComponent from "./components/AboutMe";
import ContactComponent from "./components/Contact";
import FooterComponent from "./components/Footer/Footer";
import HomeComponent from "./components/Home";
import NavbarComponent from "./components/Navbar";
import ProjectComponent from "./components/Project";
import WorkComponent from "./components/Work";
const App = () => {
   //aca agregamos los componentes que se van a renderizar.
   return (
   
      <>
         <div  className="content">
         <NavbarComponent />
         <HomeComponent />
         <WorkComponent />
         <ProjectComponent />
         <AboutMeComponent />
         <ContactComponent />
         
      </div>
      <div>
         <FooterComponent /> 
      </div>
      </>
   );
};

export default App;
