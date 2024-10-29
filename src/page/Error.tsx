import { Link } from "react-router-dom";
import Footer from "../components/header/Footer";
import LayDefault from "../layout/LayDefault";

const Error = () => {
  return (
    <LayDefault>
      <div className="flex flex-col items-center w-full gap-4 my-32">
        <h1 className="w-full text-3xl text-center text-color-sec">
          Página no encontrada
          <span className="block my-3 text-color-sec">{"(◑_◑)"}</span>
        </h1>
        <Link
          to={"/"}
          className="w-full mx-auto text-lg text-center text-color-pri hover:underline"
        >
          Volver al inicio
        </Link>
      </div>
      <Footer />
    </LayDefault>
  );
};

export default Error;
