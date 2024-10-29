import CardProject from "../../components/content/CardProject";
import Footer from "../../components/header/Footer";
import { dataProjects } from "../../data/DataProjects";
import useNavbar from "../../hooks/useNavbar";

const Projects = () => {
  const { page } = useNavbar();
  return (
    <div
      className={`${
        page == "1" ? "relative translate-x-0" : "absolute  translate-x-[100%]"
      } w-[100%] top-0 transition-transform duration-nav ease-back`}
    >
      <section className="flex flex-wrap items-stretch justify-center gap-8">
        {dataProjects.map((item, index) => (
          <CardProject props={item} key={index} />
        ))}
      </section>
      <div className="w-full h-[1px] bg-back-bor mt-24 rounded-md"></div>
      <Footer />
    </div>
  );
};

export default Projects;
