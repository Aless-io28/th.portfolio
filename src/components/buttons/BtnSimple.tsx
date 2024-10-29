import { ReactNode } from "react";

type BtnSimpleProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  title?: string;
};

const BtnSimple = ({ children, href, title }: BtnSimpleProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
      className="px-2 py-1 transition-all duration-200 border rounded cursor-pointer ease-coming bg-back-sec hover:shadow-sm border-back-sec hover:border-back-bor"
    >
      {children}
    </a>
  );
};

export default BtnSimple;
