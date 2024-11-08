import { dataProfile } from "../../data/DataProfile";
import CardPost from "./CardPost";

const dataExperience = [
  {
    year: 2024,
    info: [
      {
        title: "Creación de una página web para una galería de arte.",
        skills: ["React", "Tailwind"],
      },
      {
        title:
          "Implementación de un sistema para la optimización de procesos empresariales.",
        skills: ["React", "Tailwind", "NodeJs", "MySql"],
      },
    ],
  },
  {
    year: 2023,
    info: [
      {
        title: "Desarrollo de un sistema de reservas hoteleras.",
        skills: ["PHP", "Bootstrap", "Laragon", "MySql"],
      },
    ],
  },
];

const Experience = () => {
  return (
    <CardPost
      img={dataProfile.path}
      name="Alessio"
      date="Octubre 2024"
      text="Resumen de los proyectos claves que he desarrollado en los últimos años 👨‍💻"
      fixed={true}
    >
      <h1 className="mb-4 text-xl font-bold">
        Experiencia{" "}
        {/* <span className="font-medium text-color-sec">{"ヽ(^o^)ノ"}</span> */}
      </h1>
      <div className="relative flex flex-col gap-4 ml-4">
        <div className="absolute w-[4px] h-[105%] -bottom-3 -left-4 z-10 bg-long rounded-full"></div>
        {dataExperience.map((experience, index) => (
          <div key={index} className="flex flex-row gap-3">
            <p className="px-1 rounded-md bg-accent-sec h-max">
              {experience.year}
            </p>
            <div className="flex flex-col gap-3 mt-[2px]">
              {experience.info.map((info, index) => (
                <div key={index}>
                  <p>{info.title}</p>
                  <ul className="flex flex-wrap gap-x-3">
                    {info.skills.map((skill, index) => (
                      <li key={index} className="text-color-sec">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CardPost>
  );
};

export default Experience;
