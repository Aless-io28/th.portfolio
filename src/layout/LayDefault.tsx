import Presentation from "../components/content/Presentation";
import HeadCont from "../components/header/HeadCont";
import Navbar from "../components/header/Navbar";

const LayDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden">
      <HeadCont />
      <div className="px-6 md:px-12">
        <Presentation />
        <Navbar />
      </div>
      <div className="relative w-full">{children}</div>
    </div>
  );
};

export default LayDefault;
