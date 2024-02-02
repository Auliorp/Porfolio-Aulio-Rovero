import { useState } from 'react';
import { dataNavbar } from "../../shared/enums";

const NavbarCard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (componentId) => {
    setActiveComponent(componentId);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white p-2 text-dark bg-opacity-75 fixed-top rounded-4 mt-2 mx-2">
      {dataNavbar.map((data, index) => (
        <div key={index} className="container-fluid fw-semibold">
          <a className="navbar-brand" href={data.url}
          role="button"
          target="_blank"
          rel="noreferrer">
            {data.title}
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
              {data.components.map((component) => (
                <a
                  key={component.id}
                  className={`nav-link ${component.componentsId === activeComponent ? 'active border rounded-pill border-dark bg-body-secondary p-2 text-dark bg-opacity-75' : ''}`}
                  aria-current="page"
                  href={component.componentsId}
                  onClick={() => handleComponentClick(component.componentsId)}
                >
                  {component.componentsName}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default NavbarCard;

