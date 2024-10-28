import BtnFollow from "../buttons/BtnFollow";
import { IconAge, IconLocation } from "../icons/IconsProf";

const Presentation = () => {
  return (
    <section className="flex flex-col justify-start w-full gap-2 mt-16">
      <div className="flex justify-between w-full">
        <img
          src="/catPerfil.png"
          alt=""
          draggable="false"
          className="w-[160px] object-cover rounded-full aspect-square border-2 border-white"
        />
        <BtnFollow className="mt-24" text="Seguir-Siguiendo" />
      </div>
      <div className="w-[90%]">
        <h1 className="mb-2 text-4xl leading-snug font-sec">
          th.<span className="text-accent-pri">Alessio</span>
        </h1>
        <p className="mb-2 text-color-pri">
          Desarrollador web Full-Stack, Junior{" "}
          <span className="text-color-sec">{"</>"}</span>.
        </p>
        <p className="mb-2 text-color-pri">
          Más de un año de experiencia como practicante. Me gusta los desafíos
          por que gracias a ello aprendo, así como lo minimalista y lo simple
          <span className="text-color-sec">{" ツ"}</span>.
        </p>
        <div className="flex gap-4">
          <div className="flex items-center justify-start gap-1 mt-6 text-color-sec">
            <IconLocation size="20px" className="mb-1" fill="#646669" />
            Perú
          </div>
          <div className="flex items-center justify-start gap-1 mt-6 text-color-sec">
            <IconAge size="22px" className="mb-1" fill="#646669" />
            28 de Octubre del 200*
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
