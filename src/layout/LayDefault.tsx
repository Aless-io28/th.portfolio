import { useRef } from "react";
import Presentation from "../components/content/Presentation";
import HeadCont from "../components/header/HeadCont";
import Navbar from "../components/header/Navbar";
import Gradient from "../components/mouse/Gradient";
import useNavbar from "../hooks/useNavbar";

const LayDefault = ({ children }: { children: React.ReactNode }) => {
  const initialPosition = useRef({ x: 0 });
  const { setPage } = useNavbar();

  // Mouse
  const dragContent = (e: React.MouseEvent) => {
    const { clientX } = e;
    initialPosition.current = { x: clientX };

    if (
      (e.target as HTMLElement).nodeName !== "DIV" &&
      (e.target as HTMLElement).nodeName !== "SECTION"
    ) {
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX } = e;
    const deltaX = clientX - initialPosition.current.x;
    const threshold = 80;
    if (deltaX > threshold && initialPosition.current.x < clientX)
      return setPage("0");
    if (deltaX < -threshold && initialPosition.current.x > clientX)
      return setPage("1");
  };

  // Touch
  const dragTouches = (e: React.TouchEvent) => {
    const { touches } = e;
    const touch = touches[0];
    initialPosition.current = { x: touch.clientX };

    if (
      (e.target as HTMLElement).nodeName !== "DIV" &&
      (e.target as HTMLElement).nodeName !== "SECTION"
    ) {
      return;
    }

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", () => {
      document.removeEventListener("touchmove", handleTouchMove);
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    const { touches } = e;
    const touch = touches[0];
    const deltaX = touch.clientX - initialPosition.current.x;
    const threshold = 90;
    if (deltaX > threshold && initialPosition.current.x < touch.clientX)
      return setPage("0");
    if (deltaX < -threshold && initialPosition.current.x > touch.clientX)
      return setPage("1");
  };

  return (
    <>
      <div className="relative md:mt-4 rounded-t-lg overflow-hidden max-w-[758px] mx-auto z-10 bg-[#24283050]">
        <HeadCont />
        <div className="px-3 xs:px-6 md:px-12">
          <Presentation />
          <Navbar />
        </div>
        <div
          className="relative w-full"
          onMouseDown={dragContent}
          onTouchStart={dragTouches}
        >
          {children}
        </div>
      </div>
      <Gradient />
    </>
  );
};

export default LayDefault;
