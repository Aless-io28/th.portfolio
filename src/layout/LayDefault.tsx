import { useEffect, useRef } from "react";
import Presentation from "../components/content/Presentation";
import HeadCont from "../components/header/HeadCont";
import Navbar from "../components/header/Navbar";
import useNavbar from "../hooks/useNavbar";

const LayDefault = ({ children }: { children: React.ReactNode }) => {
  const { page } = useNavbar();
  const sectionSelect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (() => {
      let translate = "";
      if (page === "") {
        translate = "translateX(0)";
      } else if (page === "projects") {
        translate = "translateX(-100%)";
      } else if (page === "more") {
        translate = "translateX(-200%)";
      }
      sectionSelect.current?.setAttribute("style", `transform: ${translate}`);
      if (page !== "") {
        sectionSelect.current?.firstElementChild?.setAttribute(
          "style",
          `position: absolute;`
        );
        sectionSelect.current?.lastElementChild?.setAttribute(
          "style",
          `position: relative;`
        );
      } else {
        sectionSelect.current?.firstElementChild?.setAttribute(
          "style",
          `position: relative;`
        );
        sectionSelect.current?.lastElementChild?.setAttribute(
          "style",
          `position: absolute;`
        );
      }
    })();
  }, [page]);

  return (
    <div className="overflow-hidden">
      <HeadCont />
      <div className="px-12">
        <Presentation />
        <Navbar />
      </div>
      <div
        ref={sectionSelect}
        className="w-[100%] relative transition-transform duration-300 ease"
      >
        {children}
      </div>
    </div>
  );
};

export default LayDefault;
