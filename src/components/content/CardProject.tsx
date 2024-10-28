import CardProjectProps from "../../interface/CardProjectProps";
import { IconRedirect } from "../icons/IconsProf";

const CardProject = ({ props }: { props: CardProjectProps }) => {
  return (
    <article className="w-[45%] p-3 py-4 border-2 rounded-md border-back-bor group hover:shadow-md">
      <div className="w-full overflow-hidden rounded-md h-[240px]">
        <img
          src={props.image}
          alt=""
          draggable="false"
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 ease-coming"
        />
      </div>
      <h1 className="mt-4 text-xl font-bold font-sec">{props.title}</h1>
      <p className="my-2">{props.description}</p>
      <div className="flex items-center justify-start gap-3 my-5">
        {props.skills?.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1 hover:underline text-color-sec"
      >
        Ver proyecto{" "}
        <IconRedirect size="20px" className="mt-1 -rotate-90" fill="#646669" />
      </a>
    </article>
  );
};

export default CardProject;
