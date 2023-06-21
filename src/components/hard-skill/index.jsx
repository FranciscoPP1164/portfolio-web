import "./styles.css";

function HardSkill({imageURL}) {
  return (
    <li className="hard-skill">
      <img src={imageURL} alt="" />
    </li>
  );
}

export default HardSkill;
