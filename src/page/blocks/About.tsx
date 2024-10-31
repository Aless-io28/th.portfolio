import Experience from "../../components/content/Experience";
import Libraries from "../../components/content/Libraries";
import Tools from "../../components/content/Tools";
import TopLanguage from "../../components/content/TopLanguage";
import Footer from "../../components/header/Footer";
import useNavbar from "../../hooks/useNavbar";

const About = () => {
  const { page } = useNavbar();

  return (
    <section
      className={`${
        page == "0" ? "relative translate-x-0" : "absolute -translate-x-[100%]"
      } flex flex-col w-[100%] top-0 left-0 transition-transform duration-nav ease-back`}
    >
      <Experience />
      <TopLanguage />
      <Tools />
      <Libraries />
      <Footer />
    </section>
  );
};

export default About;
