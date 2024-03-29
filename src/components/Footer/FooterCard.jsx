import { dataFooter } from "../../shared/enums";
import "./footer.css"
import "../../App.css"

const FooterCard = () => {
   return (
      <footer className=" text-center bg-secondary">
         <div className="container p-1 pb-0 ">
            <section className="mb-1">
               {dataFooter.map((data) => (
                  <a
                     key={data.id}
                     data-mdb-ripple-init
                     className="btn btn-floating m-1 text-light fs-icons-footer fs-lg-icons-footer fs-xl-icons-footer "
                     style={{ backgroundColor: data.color  }}
                     href={data.url}
                     role="button"
                     target="_blank"
                     rel="noreferrer"
                  >
                     {data.icon({ size: "1em", className: "cursor-pointer" })}
                  </a>
               ))}
            </section>
         </div>
         {/* Copyright */}
         <div
            className="text-center p-1 text-light  fs-text-footer fs-lg-n fs-xl-n"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
         >
            © 2023 Copyright:
            <a
               className="text-light"
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
