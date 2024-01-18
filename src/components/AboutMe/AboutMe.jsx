import AboutMeCard from "./AboutMeCard";
const AboutMeComponent = () => {
   return (
      <div id="aboutMe" className="container">
         <h1 className="text-dark mb-5 ">Este es el Componente que habla sobre mi</h1>
         <AboutMeCard />
      </div>
   );
};

export default AboutMeComponent;
