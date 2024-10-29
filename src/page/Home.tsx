import Experience from "../components/content/Experience";
import TopLanguage from "../components/content/TopLanguage";
import LayDefault from "../layout/LayDefault";
import Libraries from "../components/content/Libraries";
import Tools from "../components/content/Tools";
import { dataProjects } from "../data/DataProjects";
import CardProject from "../components/content/CardProject";
import Footer from "../components/header/Footer";

function Home() {
  return (
    <LayDefault>
      <div className="relative w-[100%] top-0 left-0">
        <Experience />
        <TopLanguage />
        <Tools />
        <Libraries />
        <Footer />
      </div>
      {/*  */}
      <div className="relative w-[100%] left-[100%] top-0 absolute">
        <section className="flex flex-wrap items-stretch justify-center gap-8">
          {dataProjects.map((item, index) => (
            <CardProject props={item} key={index} />
          ))}
        </section>
        <div className="w-full h-[1px] bg-back-bor mt-24 rounded-md"></div>
        <Footer />
      </div>
    </LayDefault>
  );
}

export default Home;
