import { dataNavbar } from "../../shared/enums";

const NavbarCard = () => {
   return (
      <nav className="navbar navbar-expand-lg bg-secondary">
            {dataNavbar.map((data, index) => (
               <div key={index} className="container-fluid">
                  <a className="navbar-brand" href="#">
                       {data.title}
                  </a>
                      <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavAltMarkup"
                      aria-controls="navbarNavAltMarkup"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse    navbar-collapse"            id="navbarNavAltMarkup">
                         <div className="navbar-nav ms-auto">  
                            {data.components.map((component) =>(
                            <a className="nav-link active" 
                             key={component.id}
                            aria-current="page" href={component.componentsId}>
                            {component.componentsName}
                            </a>))}
                        </div>
                     </div>
               </div>
               
            ))}
      </nav>
   );
};

export default NavbarCard;
