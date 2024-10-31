import { useEffect, useState } from "react";

const Gradient = () => {
  const [x, setX] = useState(0);

  useEffect(() => {
    (() => {
      const handleMouseMove = (e: MouseEvent) => {
        const centerX = window.innerWidth / 2 + 150;
        setX(e.clientX - centerX);
      };

      window.addEventListener("mousemove", handleMouseMove);
    })();
  }, []);

  return (
    <div>
      <div
        className="hidden md:block fixed transition-transform duration-700 ease-coming -bottom-[245px] left-1/2 blur-md -z-50 w-[300px] pointer-events-none aspect-square bg-sul"
        style={{
          transform: `translate(${x}px)`,
        }}
      ></div>
    </div>
  );
};

export default Gradient;
