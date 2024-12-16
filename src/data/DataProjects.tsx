import {
  IconAstro,
  IconReact,
  IconTailwind,
} from "../components/icons/IconsProgramming";
import CardProjectProps from "../interface/CardProjectProps";

export const dataProjects = [
  {
    title: "Sitio web - Galería  de arte",
    description:
      "Creación de una plataforma web interactiva para exhibir y promocionar obras del artista Mad Royer, diseñada para ofrecer una experiencia visual envolvente y facilitar la conexión con amantes del arte.",
    link: "https://madroyer.com/",
    image: "projects/madroyer.png",
    skills: [
      <IconReact size="20px" className="mb-1" />,
      <IconTailwind size="20px" />,
    ],
  },
  {
    title: "Sitio web - Vaya Valla Publicidad",
    description:
      "Desarrollo de secciones dinámicas y optimizadas para el sitio web de la empresa Vaya Valla Publicidad, proporcionando una experiencia de navegación fluida y atractiva para los usuarios.",
    link: "https://vayapublicidad.com/",
    image: "projects/sitewebvayavalla.png",
    skills: [<IconAstro size="20px" />, <IconTailwind size="20px" />],
  },
] as CardProjectProps[];
