import "./styles.css";
import HTML_LOGO from "../../assets/HTML_logo.png";
import CSS_LOGO from "../../assets/CSS_logo.png";
import JS_LOGO from "../../assets/JS_logo.png";
import NODEJS_LOGO from "../../assets/nodejs_logo.png";
import REACT_LOGO from "../../assets/react_icon.png";
import NEXT_LOGO from "../../assets/Next_logo.png";
import GIT_LOGO from "../../assets/git_logo.png";
import MYSQL_LOGO from "../../assets/MySQL_logo.png";
import DOCKER_LOGO from "../../assets/docker_logo.png";
import ANGULAR_LOGO from "../../assets/angular-icon.png";
import HardSkill from "../../components/hard-skill";

const HARD_SKILLS = [HTML_LOGO, CSS_LOGO, JS_LOGO, NODEJS_LOGO, REACT_LOGO, NEXT_LOGO, ANGULAR_LOGO, GIT_LOGO, MYSQL_LOGO, DOCKER_LOGO];
const SOFT_SKILLS = ["Pensamiento Analítico", "Amigable", "Investigador", "Trabajo en Equipo", "Liderazgo", "Adaptable", "Aprendizaje Rápido", "Paciencia", "Atención al Detalle", "Auto Deasrrollo", "Manejo de Conflictos"];

function Skills() {
  return (
    <section id="skills">
      <article className="hard-skills">
        <h2>HABILIDADES TÉCNICAS</h2>
        <ul>
          {HARD_SKILLS.map((logo, index) => (
            <HardSkill key={index} imageURL={logo} />
          ))}
        </ul>
      </article>
      <article className="soft-skills">
        <h2>HABILIDADES BLANDAS</h2>
        <ul>
          {SOFT_SKILLS.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Skills;
