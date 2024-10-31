import { ReactNode, useState } from "react";
import { IconFixed, IconLike } from "../icons/IconsProf";

interface CardPostProps {
  img: string;
  name: string;
  date: string;
  text: string;
  children?: ReactNode;
  fixed?: boolean;
}

const CardPost = ({
  img,
  name,
  date,
  text,
  children,
  fixed,
}: CardPostProps) => {
  const [isLike, setIsLike] = useState<boolean>(() => {
    const firstTwoWords = text.split(" ").slice(0, 2).join("");
    const nameLocal = "isLike" + firstTwoWords;
    return localStorage.getItem(nameLocal) === "true" ? true : false;
  });
  const [numLikes, setNumLikes] = useState<number>(() => {
    return Math.floor(Math.random() * 100) + 28;
  });

  const handleLike = () => {
    let num: number = 0;
    setIsLike(!isLike);
    if (isLike) {
      num = numLikes - 1;
    } else {
      num = numLikes + 1;
    }
    setNumLikes(num);
    const firstTwoWords = text.split(" ").slice(0, 2).join("");
    const nameLocal = "isLike" + firstTwoWords;
    localStorage.setItem(nameLocal, JSON.stringify(!isLike));
  };

  return (
    <article className="relative p-4 mt-6 rounded-md posts_container hover:bg-back-hov2">
      <img src={img} alt="" className="w-[42px] rounded-full aspect-square" />
      <div className="flex items-start justify-start gap-4 mt-2 md:mt-0 post_name h-max">
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="mt-[6px] text-sm text-color-sec w-max">{date}</p>
        {fixed && (
          <span className="absolute ml-auto right-4 top-5">
            <IconFixed size="18px" fill="#646669" />
          </span>
        )}
      </div>
      <div className="mt-3 post_txt md:mt-0">
        <p>{text}</p>
      </div>
      <div className="relative mb-4 mt-7 post_content">{children}</div>
      <div className="flex items-center justify-end w-full px-6 my-2 post_btn">
        <div
          className="flex items-center justify-center p-1 pl-2 text-xs rounded-md cursor-pointer hover:bg-back-hov"
          onClick={() => handleLike()}
        >
          <span>{numLikes}</span>
          <IconLike className="p-1" size="24px" state={isLike} />
        </div>
      </div>
      <div className="absolute w-[99%] left-1/2 -translate-x-1/2 h-[1px] bg-back-bor bottom-0"></div>
    </article>
  );
};

export default CardPost;
