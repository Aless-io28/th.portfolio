import CardProject from "../components/content/CardProject";
import { dataProjects } from "../data/DataProjects";
import LayDefault from "../layout/LayDefault";

const Projects = () => {
  return (
    <LayDefault>
      <section className="flex flex-wrap items-stretch justify-center gap-8">
        {dataProjects.map((item, index) => (
          <CardProject props={item} key={index} />
        ))}
      </section>
      <div className="w-full h-[1px] bg-back-bor mt-24 rounded-md"></div>
    </LayDefault>
  );
};

export default Projects;
