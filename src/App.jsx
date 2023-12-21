import AboutMeComponent from "./components/AboutMe";
import ContactComponent from "./components/Contact";
import FooterComponent from "./components/Footer";
import HomeComponent from "./components/Home";
import NavbarComponent from "./components/Navbar";
import ProjectComponent from "./components/Project";
import WorkComponent from "./components/Work";
const App = () => {
   //aca agregamos los componentes que se van a renderizar.
   return (
      <div>
         <h1>APP Portafolio</h1>
         <NavbarComponent />
         <HomeComponent />
         <WorkComponent />
         <ProjectComponent />
         <AboutMeComponent />
         <ContactComponent />
         <FooterComponent />
      </div>
   );
};

export default App;
