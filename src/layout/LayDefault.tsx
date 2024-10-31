import Presentation from "../components/content/Presentation";
import HeadCont from "../components/header/HeadCont";
import Navbar from "../components/header/Navbar";
import Gradient from "../components/mouse/Gradient";

const LayDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative overflow-hidden max-w-[758px] mx-auto z-10 bg-[#24283050]">
        <HeadCont />
        <div className="px-3 xs:px-6 md:px-12">
          <Presentation />
          <Navbar />
        </div>
        <div className="relative w-full">{children}</div>
      </div>
      <Gradient />
    </>
  );
};

export default LayDefault;
