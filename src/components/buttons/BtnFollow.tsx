import { useState } from "react";
import { IconPadlock } from "../icons/IconsProf";

type BtnPrimaryProps = {
  text: string;
  className?: string;
  type?: string;
};

const BtnFollow = ({ text, className }: BtnPrimaryProps) => {
  const [follow, setFollow] = useState<boolean>(() => {
    return localStorage.getItem("follow") === "true";
  });
  const [showIcon, setShowIcon] = useState(false);

  const handleFollow = () => {
    setFollow(true);
    localStorage.setItem("follow", JSON.stringify(true));
    if (follow) setShowIcon(true);
  };

  return (
    <button
      className={`${className} flex text-sm font-bold items-center justify-center py-2 border-2 rounded-full px-5 h-max cursor-pointer ${
        !follow
          ? "text-color-pry bg-back-sec border-back-cont transition-color hover:bg-back-cont hover:text-color-cont"
          : "text-color-cont bg-back-cont"
      }`}
      onClick={() => handleFollow()}
    >
      {showIcon && (
        <IconPadlock size="15px" className="mr-[2px] mb-[2px]" fill="#646669" />
      )}
      {!follow ? text.split("-")[0] : text.split("-")[1]}
    </button>
  );
};

export default BtnFollow;
