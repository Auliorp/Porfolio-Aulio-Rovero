import { dataFooter } from "../../shared/enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css"

const FooterCard = () => {
   return (
      <footer className=" text-center bg-secondary">
         <div className="container p-1 pb-0">
            <section className="mb-1">
               {dataFooter.map((data) => (
                  <a
                     key={data.id}
                     data-mdb-ripple-init
                     className="btn text-white btn-floating m-1"
                     style={{ backgroundColor: data.color }}
                     href={data.url}
                     role="button"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FontAwesomeIcon icon={data.icon} />
                  </a>
               ))}
            </section>
         </div>
         {/* Copyright */}
         <div
            className="text-center p-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
         >
            © 2023 Copyright:
            <a
               className="text-body"
               href="https://www.linkedin.com/in/auliorovero/"
               target="_blank"
               rel="noreferrer"
            >
               {` Aulio Rovero`}
            </a>
         </div>
      </footer>
   );
};

export default FooterCard;
