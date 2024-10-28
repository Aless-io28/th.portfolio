import Presentation from "../components/content/Presentation";
import Footer from "../components/header/Footer";
import HeadCont from "../components/header/HeadCont";
import Navbar from "../components/header/Navbar";

const LayDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeadCont />
      <div className="px-12">
        <Presentation />
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default LayDefault;
