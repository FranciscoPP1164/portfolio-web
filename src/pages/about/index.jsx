import "./styles.css";
import image from "../../assets/about-image.jpg";

function About() {
  return (
    <section id="about">
      <div className="image">
        <img src={image} alt="about-image" />
      </div>
      <div className="text">
        <p>Soy Francisco Parra Penagos, programador y desarrollador web, vivo en Cali, Colombia, me gusta mucho aprender sobre cualquier tema, sobre todo, tecnología y ciencia, me apasionan los cubos de Rubik y las matemáticas.</p>
        <p>Desarrollo aplicaciones de uso general por medio de las herramientas web con diseños atractivos, responsivos y fáciles de usar, que se adaptan al gusto y necesidad del cliente.</p>
        <p>
          Hoy en día una aplicación web para tu empresa es la mejor inversión que puedes realizar.
          <br />
          ¿quieres tener una?
        </p>
        <a href="#contact">
          <button>Hablemos</button>
        </a>
      </div>
    </section>
  );
}

export default About;
