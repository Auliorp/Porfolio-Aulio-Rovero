
const NavbarComponent = () => {
   return (
      <nav className="navbar navbar-expand-lg bg-secondary">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">
               Aulio Rovero
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav ms-auto">
                  <a className="nav-link active" aria-current="page" href="#">
                     Principal
                  </a>
                  <a className="nav-link" href="#home">
                     Trabajos
                  </a>
                  <a className="nav-link" href="#project">
                     Proyectos
                  </a>
                  <a className="nav-link" href="#aboutMe">
                     Sobre mi
                  </a>
                  <a className="nav-link" href="#contact">
                     Contacto
                  </a>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default NavbarComponent;
