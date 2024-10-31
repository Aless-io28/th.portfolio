import BtnFollow from "../buttons/BtnFollow";
import BtnSimple from "../buttons/BtnSimple";
import { IconEmail } from "../icons/IconsNet";
import { IconAge, IconLocation } from "../icons/IconsProf";

const Presentation = () => {
  return (
    <section className="flex flex-col justify-start w-full gap-2">
      <div className="flex items-end justify-between w-full">
        <img
          src="/profile.png"
          alt=""
          draggable="false"
          className="h-[85px] xs:h-[100px] md:h-[140px] object-cover rounded-full aspect-square border-2 border-white"
        />
        <div className="flex justify-center gap-4">
          <BtnSimple className="rounded-full">
            <IconEmail size="20px" className="mt-1" />
          </BtnSimple>
          <BtnFollow className="" text="Seguir-Siguiendo" />
        </div>
      </div>
      <div className="w-[90%]">
        <h1 className="mb-2 text-4xl leading-snug font-sec">
          th.<span className="text-accent-pri">Alessio</span>
        </h1>
        <p className="mb-2 text-color-pri">
          Soy un desarrollador web <b>Full-Stack </b>
          <span className="text-color-sec">{"</>"}</span>.
        </p>
        <p className="mb-2 text-color-pri">
          Con más de un año de experiencia como practicante, culminando la
          carrera de <b>Desarrollo de software</b>, disfruto{" "}
          <b>enfrentar desafíos</b> que me permiten aprender y mejorar mis
          habilidades.
          <span className="text-color-sec">{" ツ"}</span>.
        </p>
        <p>
          Teniendo un enfoque en lo <b>minimalista</b> y aprecio la simplicidad
          visual en mis proyectos, pero sin perder la <b>creatividad</b>{" "}
          <span className="text-color-sec">♟</span>.
        </p>
        <div className="flex flex-wrap mt-6 gap-y-1 gap-x-4">
          <div className="flex items-center justify-start gap-1 text-color-sec">
            <IconLocation size="20px" className="mb-1" fill="#646669" />
            Perú
          </div>
          <div className="flex items-center justify-start gap-1 text-color-sec">
            <IconAge size="22px" className="mb-1" fill="#646669" />
            28 de Octubre del 200*
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
