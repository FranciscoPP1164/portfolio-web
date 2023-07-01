import "./styles.css";
import Service from "../../components/service";
import GRAPHIC_DESIGN from "../../assets/grafico-de-computadora.png";
import WEB_DEVELOPMENT from "../../assets/software-development.png";
import RESPONSIVE_DESIGN from "../../assets/pagina-web-receptiva.png";
import TECHNICAL_SUPPORT from "../../assets/tech-support.png";

function Services() {
  return (
    <section id="services">
      <Service tittle="diseño web" img={GRAPHIC_DESIGN} alt="graphic-design">
        Ofrezco diseños a la medida y gusto del cliente con orientacion para lograr una experiencia agradable para el usuario final, la estetica de la web es una parte indispensable para lograr captar la atencion del espectador con colores y la distribucion adecuada.
      </Service>
      <Service tittle="desarrollo web" img={WEB_DEVELOPMENT} alt="web-development">
        Diseño y desarrollo de aplicaciones que permiten automatizar y optimizar los procesos comerciales y de almacenamiento de datos, de esta manera usted conseguira ahorrar tiempo y recursos en procesos que se los puede delegar a una computadora, permitiendo acortar el ciclo de produccion.
      </Service>
      <Service tittle="diseño responsivo" img={RESPONSIVE_DESIGN} alt="responsive-design">
        El diseño responsivo o responsive design es adaptar sus aplicaciones y paginas web a varios dispositivos (móvil, tableta, computador), de esta forma abarcara mas mercados y lograra que su aplicación se use más.
      </Service>
      <Service tittle="asistencia y soporte" img={TECHNICAL_SUPPORT} alt="graphic-design">
        Puedo brindarte asistencia si tienes problemas con tu aplicación o sitio web. Podemos materializar juntos las ideas de negocio que tienes en mente, dime qué necesitas y te ayudaré.
      </Service>
    </section>
  );
}

export default Services;
