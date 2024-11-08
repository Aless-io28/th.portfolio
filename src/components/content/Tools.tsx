import { dataProfile } from "../../data/DataProfile";
import BtnLink from "../buttons/BtnLink";
import {
  IconGit,
  IconGitHub,
  IconLaragon,
  IconNpm,
  IconVisualCode,
  IconVite,
  IconXampp,
} from "../icons/IconsProgramming";
import CardPost from "./CardPost";

const dataTools = [
  {
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
    icon: <IconVisualCode size="42px" className="p-1" />,
    hover: "#3ca9f220",
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    icon: <IconGit size="42px" className="p-1" />,
    hover: "#f34f2920",
  },
  {
    name: "Github",
    link: "https://github.com/",
    icon: <IconGitHub size="42px" className="p-1" />,
    hover: "#d1d0c520",
  },
  {
    name: "Vite",
    link: "https://vitejs.dev/",
    icon: <IconVite size="42px" className="p-1" />,
  },
  {
    name: "Laragon",
    link: "https://laragon.org/",
    icon: <IconLaragon size="46px" sizeY="42px" className="p-1" />,
    hover: "#0097d220",
  },
  {
    name: "Xampp",
    link: "https://www.apachefriends.org/",
    icon: <IconXampp size="42px" className="p-1" />,
    hover: "#fb7a2420",
  },
  {
    name: "Npm",
    link: "https://www.npmjs.com/",
    icon: <IconNpm size="42px" className="p-1" />,
    hover: "#cb383720",
  },
];

const Tools = () => {
  return (
    <CardPost
      img={dataProfile.path}
      name="Alessio"
      date="Octubre 2024"
      text="Herramientas claves en mi flujo de trabajo 🛠️"
    >
      <div className="flex flex-wrap w-full gap-1">
        {dataTools.map((tool, index) => (
          <BtnLink key={index} href={tool.link} title={tool.name} hover={true}>
            {tool.icon}
          </BtnLink>
        ))}
      </div>
    </CardPost>
  );
};

export default Tools;
