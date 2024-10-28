import {
  IconGmail,
  IconInstagram,
  IconLinkedin,
  IconX,
} from "../icons/IconsNet";
import { IconGitHub } from "../icons/IconsProgramming";

const dataNetworks = [
  {
    link: "https://github.com/AlessioTh",
    icon: <IconGitHub size="26px" sizeY="24px" />,
  },
  {
    link: "https://github.com/AlessioTh",
    icon: <IconLinkedin size="28px" />,
  },
  {
    link: "https://instagram.com/alessioth",
    icon: <IconInstagram size="26px" />,
  },
  {
    link: "https://mail.google.com/mail/u/0/#inbox",
    icon: <IconGmail size="24px" />,
  },
  {
    link: "https://x.com/home",
    icon: <IconX size="22px" />,
  },
];

const Footer = () => {
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
        <p className="text-xs font-sec text-color-pri">th.Alessio © 2004</p>
      </div>
    </footer>
  );
};

export default Footer;
