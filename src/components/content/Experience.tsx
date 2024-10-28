import CardPost from "./CardPost";
const Experience = () => {
  return (
    <CardPost
      img="/catPerfil.png"
      name="Alessio"
      date="Octubre 2024"
      text="Aprendiendo con proyectos reales y de forma autodidacta 😎"
      fixed={true}
    >
      <div className="absolute w-[4px] h-[80%] bottom-2 -left-0 z-10 bg-accent-sec rounded-full"></div>
      <h1 className="mb-4 text-xl font-bold">
        Experiencia{" "}
        <span className="font-medium text-color-sec">{"ヽ(^o^)ノ"}</span>
      </h1>
      <div className="flex flex-col gap-4 ml-4">
        <div className="flex flex-row gap-3 text-md">
          <p className="px-1 rounded-md bg-accent-sec h-max">2024</p>
          <div className="flex flex-col gap-3">
            <div>
              Creación de una página web para una galería de arte.
              <ul className="flex gap-3">
                <li className="text-color-sec">React</li>
                <li className="text-color-sec">Tailwind</li>
              </ul>
            </div>
            <div className="">
              Implementación de un sistema para la optimización de procesos
              empresariales
              <ul className="flex gap-3">
                <li className="text-color-sec">React</li>
                <li className="text-color-sec">Tailwind</li>
                <li className="text-color-sec">NodeJs</li>
                <li className="text-color-sec">MySql</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <p className="px-1 rounded-md bg-accent-sec h-max">2023</p>
          <div>
            <div>
              Desarrollo de un sistema de reservas eficiente para un hotel.
              <ul className="flex gap-3">
                <li className="text-color-sec">PHP</li>
                <li className="text-color-sec">CSS</li>
                <li className="text-color-sec">JQuery</li>
                <li className="text-color-sec">MySql</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CardPost>
  );
};

export default Experience;
