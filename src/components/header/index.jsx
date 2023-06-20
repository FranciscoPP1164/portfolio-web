import {useState} from "react";
import "./styles.css";

const ROUTES = [
  {name: "INICIO", route: "home", selected: true},
  {name: "SOBRE MI", route: "about"},
  {name: "HABILIDADES", route: "skills"},
  {name: "SERVICIOS", route: "services"},
  {name: "PROYECTOS", route: "proyects"},
  {name: "CONTACTO", route: "contact"},
];

function Header() {
  const [routes, setRoutes] = useState(ROUTES);

  function handleClickRoute(e) {
    if (e.target.classList.contains("active")) {
      return;
    }

    const newRoutes = routes.map((route) => {
      if (e.target.classList.contains(route.route)) {
        return {...route, selected: true};
      }

      return {...route, selected: false};
    });

    setRoutes(newRoutes);
  }

  return (
    <header className="header">
      <ul className="routes">
        {routes.map(({name, route, selected}) => (
          <li key={route}>
            <a href={`#${route}`} onClick={handleClickRoute} className={`route ${route}${selected ? " active" : ""}`}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
