import { useState } from "react";

const Lamp = () => {
  const [light, setLight] = useState(true);

  const handleLight = () => {
    console.log(light);
    setLight(!light);
  };

  return (
    <div className="relative z-10 w-full h-full">
      <div className="absolute top-0 w-1 h-20 rounded-b-lg bg-back-bor left-1/2"></div>
      <div
        onClick={handleLight}
        className="absolute w-24 -translate-x-1/2 rounded-b-sm bg-back-bor h-14 top-16 rounded-t-3xl left-1/2"
      ></div>
      <div
        className={`${
          light ? "bg-light" : ""
        }  h-44 w-80 luz_lmp absolute transition-all duration-75 linear -translate-x-1/2 rounded-b-lg left-1/2 top-28 -z-10`}
      ></div>
    </div>
  );
};

export default Lamp;
