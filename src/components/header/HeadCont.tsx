// import Lamp from "../content/Lamp";
import { useState } from "react";
import ThreeLine from "../content/ThreeLine";

const HeadCont = () => {
  const [hover, setHover] = useState(false);

  return (
    <header className="">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative flex items-center justify-center w-full overflow-hidden h-52 md:h-60 bg-back-sec"
      >
        {/* <Lamp /> */}
        <ThreeLine hover={hover} />
      </div>
    </header>
  );
};

export default HeadCont;
