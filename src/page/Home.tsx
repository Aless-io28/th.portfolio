import LayDefault from "../layout/LayDefault";
import About from "./blocks/About";
import Projects from "./blocks/Projects";

function Home() {
  return (
    <LayDefault>
      <About />
      <Projects />
    </LayDefault>
  );
}

export default Home;
