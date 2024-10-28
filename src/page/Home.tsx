import Experience from "../components/content/Experience";
import TopLanguage from "../components/content/TopLanguage";
import LayDefault from "../layout/LayDefault";
import Libraries from "../components/content/Libraries";
import Tools from "../components/content/Tools";

function Home() {
  return (
    <LayDefault>
      <Experience />
      <TopLanguage />
      <Tools />
      <Libraries />
    </LayDefault>
  );
}

export default Home;
