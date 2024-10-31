import { IconReact, IconTailwind } from "../components/icons/IconsProgramming";
import CardProjectProps from "../interface/CardProjectProps";

export const dataProjects = [
  {
    title: "Página web - Galería  de arte",
    description:
      "Creación de una plataforma web interactiva para exhibir y promocionar obras del artista Mad Royer, diseñada para ofrecer una experiencia visual envolvente y facilitar la conexión con amantes del arte.",
    link: "https://madroyer.com/",
    image: "projects/madroyer.png",
    skills: [
      <IconReact size="20px" className="mb-1" />,
      <IconTailwind size="20px" />,
    ],
  },
] as CardProjectProps[];
