import { ReactNode } from "react";

type BtnLinkProps = {
  href: string;
  title?: string;
  children: ReactNode;
  hover?: boolean;
};

const BtnLink = ({ href, title, children, hover }: BtnLinkProps) => {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer"
      className={
        hover
          ? "p-2 transition-colors duration-200 rounded-full cursor-pointer hover:bg-back-hov"
          : ""
      }
    >
      {children}
    </a>
  );
};

export default BtnLink;
