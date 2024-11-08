import {
  IconGmail,
  IconLinkedin,
  // IconInstagram,
  // IconX,
} from "../icons/IconsNet";
import { IconGitHub } from "../icons/IconsProgramming";

export const dataNetworks = [
  {
    link: "https://github.com/Aless-io28",
    icon: <IconGitHub size="26px" sizeY="24px" />,
  },
  {
    link: "https://www.linkedin.com/in/alessio-fernandez-406244336/",
    icon: <IconLinkedin size="29px" className="mt-[1.5px]" />,
  },
  // {
  //   link: "https://instagram.com/alessioth",
  //   icon: <IconInstagram size="26px" />,
  // },
  {
    link: "mailto:alessio.ths8@gmail.com",
    icon: <IconGmail size="26px" className="mt-[1px]" />,
  },
  // {
  //   link: "https://x.com/home",
  //   icon: <IconX size="22px" />,
  // },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-4 py-5 mt-10 ">
      <div className="flex items-center justify-center gap-4">
        {dataNetworks.map((network, index) => (
          <a
            key={index}
            href={network.link}
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-200 hover:scale-110"
          >
            {network.icon}
          </a>
        ))}
      </div>
      <div>
        <p className="text-xs font-sec text-color-pri">th.Alessio © {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
