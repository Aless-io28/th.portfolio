import CardProject from "../components/content/CardProject";
import { IconReact, IconTailwind } from "../components/icons/IconsProgramming";
import CardProjectProps from "../interface/CardProjectProps";
import LayDefault from "../layout/LayDefault";

const dataProjects = [
  {
    title: "Página web - Galería  de arte",
    description: "Desarrollo de una página web para una galería de arte.",
    link: "https://madroyer.com/",
    image: "projects/madroyer.png",
    skills: [
      <IconReact size="20px" className="mb-1" />,
      <IconTailwind size="20px" />,
    ],
  },
] as CardProjectProps[];

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
