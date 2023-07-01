import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Services from "./pages/services";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Contact></Contact>
    </>
  );
}

export default App;
