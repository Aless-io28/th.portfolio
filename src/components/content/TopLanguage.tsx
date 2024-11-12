import CardPost from "./CardPost";
import {
  IconAstro,
  IconBootstrap,
  IconCss,
  IconExpress,
  IconHtml,
  IconJs,
  IconMySql,
  IconNextJs,
  IconNode,
  IconPhp,
  IconReact,
  IconTailwind,
  IconTs,
} from "../icons/IconsProgramming";
import BtnLink from "../buttons/BtnLink";
import { dataProfile } from "../../data/DataProfile";

const dataLanguages = [
  [
    {
      name: "HTML",
      link: "https://developer.mozilla.org/es/docs/Web/HTML",
      icon: <IconHtml size="38px" />,
    },
    {
      name: "CSS",
      link: "https://developer.mozilla.org/es/docs/Web/CSS",
      icon: <IconCss size="38px" />,
    },
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      icon: <IconJs size="38px" />,
    },
    {
      name: "React",
      link: "https://es.legacy.reactjs.org/",
      icon: <IconReact size="38px" />,
    },
  ],
  [
    {
      name: "Tailwind",
      link: "https://tailwindcss.com/",
      icon: <IconTailwind size="38px" />,
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
      icon: <IconTs size="38px" />,
    },
    {
      name: "Express",
      link: "https://expressjs.com/",
      icon: <IconExpress size="38px" />,
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/en/",
      icon: <IconNode size="34px" className="mt-1" />,
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      icon: <IconBootstrap size="38px" />,
    },
    {
      name: "MySql",
      link: "https://www.mysql.com/",
      icon: <IconMySql size="46px" sizeY="40px" />,
    },
  ],
  [
    {
      name: "Astro",
      link: "https://astro.build/",
      icon: <IconAstro size="38px" className="mt-1" />,
    },
    {
      name: "Next.js",
      link: "https://nextjs.org/",
      icon: <IconNextJs size="38px" />,
    },
    {
      name: "PHP",
      link: "https://www.php.net/",
      icon: <IconPhp size="43px" />,
    },
  ],
  // [
  //   {
  //     name: "Python",
  //     link: "https://python.org/",
  //     icon: <IconPython size="36px" />,
  //   },
  //   {
  //     name: "Flask",
  //     link: "https://flask.palletsprojects.com/",
  //     icon: <IconFlask size="44px" sizeY="38px" />,
  //   },
  // ],
];

const TopLanguage = () => {
  return (
    <CardPost
      img={dataProfile.path}
      name="Alessio"
      date="Octubre 2024"
      text="Principales lenguajes, frameworks, etc. que he dominado en mis proyectos 💻"
    >
      <div className="absolute w-[5px] h-[99%] bottom-0 -left-0  z-10 bg-rank rounded-full"></div>
      <div className="flex flex-col gap-8 ml-5">
        {dataLanguages.map((languages, index) => (
          <div key={index} className="flex flex-wrap gap-4 sm:gap-8">
            {languages.map((language, index) => (
              <BtnLink key={index} href={language.link} title={language.name}>
                {language.icon}
              </BtnLink>
            ))}
          </div>
        ))}
      </div>
    </CardPost>
  );
};

export default TopLanguage;
