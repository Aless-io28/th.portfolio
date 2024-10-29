import { IconReact, IconTailwind } from "../components/icons/IconsProgramming";
import CardProjectProps from "../interface/CardProjectProps";

export const dataProjects = [
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
