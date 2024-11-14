import { dataProfile } from "../../data/DataProfile";
import BtnFollow from "../buttons/BtnFollow";
import BtnSimple from "../buttons/BtnSimple";
import { IconEmail } from "../icons/IconsNet";
import { IconAge, IconLocation } from "../icons/IconsProf";

const Presentation = () => {
  return (
    <section className="flex flex-col justify-start w-full gap-2">
      <div className="flex items-end justify-between w-full h-12 xs:h-14 md:h-16">
        {/* <img
          src={dataProfile.path}
          alt=""
          draggable="false"
          className="h-[85px] xs:h-[100px] bg-white md:h-[140px] object-cover rounded-full aspect-square border-4 border-back-sec shadow-md"
        /> */}
        <div className="relative h-[85px] xs:h-[100px] bg-back-cont md:h-[140px] object-cover rounded-full aspect-square border-4 border-back-sec shadow-md">
          <img
            src={dataProfile.path}
            alt=""
            draggable="false"
            className="object-cover w-full h-full transition-transform duration-300 rounded-full hover:scale-105 ease-coming"
          />
        </div>
        <div className="flex justify-center gap-4 md:mb-2">
          <BtnSimple
            className="flex items-center justify-center rounded-full"
            href="mailto:alessio.ths8@gmail.com"
          >
            <IconEmail size="20px" className="mt-[1px]" />
          </BtnSimple>
          <BtnFollow className="" text="Seguir-Siguiendo" />
        </div>
      </div>
      <div className="w-[90%]">
        <h1 className="mb-4 text-3xl leading-snug tracking-wide md:text-4xl font-sec">
          th.<span className="text-accent-pri font-sec">Alessio</span>
        </h1>
        <p className="mb-2 tracking-wide text-color-pri">
          Soy un desarrollador web <b>Full-Stack </b>
          Junior <span className="text-color-sec">{"</>"}</span>.
        </p>
        <p className="mb-2 tracking-wide text-color-pri">
          Con más de un año de experiencia como practicante, culminando la
          carrera de <b>Desarrollo de software</b>, disfruto{" "}
          <b>enfrentar desafíos</b> que me permiten aprender y mejorar mis
          habilidades.
          <span className="text-color-sec">{" ツ"}</span>.
        </p>
        <p className="mb-2 tracking-wide text-color-pri">
          Teniendo un enfoque en lo <b>minimalista</b> y aprecio la simplicidad
          visual en mis proyectos, pero sin perder la <b>creatividad</b>{" "}
          <span className="text-color-sec">♟</span>.
        </p>
        <div className="flex flex-wrap mt-6 gap-y-1 gap-x-4">
          <div className="flex items-center justify-start gap-1 text-color-sec">
            <IconLocation size="20px" className="mb-1" fill={dataProfile.svg} />
            Perú
          </div>
          <div className="flex items-center justify-start gap-1 text-color-sec">
            <IconAge size="22px" className="mb-1" fill={dataProfile.svg} />
            28 de Octubre del 200*
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
