import "./styles.css";
import image from "../../assets/home-image.jpeg";

function Home() {
  return (
    <section id="home">
      <div className="text">
        <h1>Bienvenido</h1>
        <h2 className="name">
          Soy
          <p>&nbsp;Francisco</p>
          <p>&nbsp;Parra</p>
        </h2>
        <h2 className="rol">Desarrollador web</h2>
        <i className="message">
          &quot;El trabajo duro te pone donde la buena suerte pueda encontrarte&quot;
          <br />
          Anonimo
        </i>
      </div>
      <div className="image">
        <img src={image} alt="home-image" />
      </div>
    </section>
  );
}

export default Home;
