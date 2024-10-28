import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full">
      <ul className="flex justify-between gap-3 my-8 text-md">
        <li
          className={`${
            location.pathname === "/" ? "border-accent-sec" : "border-none"
          } flex-1 text-center border-b-4 cursor-pointer rounded-t-md hover:bg-back-sec`}
        >
          <Link to="/" className="block w-full h-full py-4">
            Sobre mí
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/projects"
              ? "border-accent-sec"
              : "border-none"
          } flex-1 text-center border-b-4 cursor-pointer rounded-t-md hover:bg-back-sec`}
        >
          <Link to="/projects" className="block w-full h-full py-4">
            Proyectos
          </Link>
        </li>
        <li
          className={`${
            location.pathname === "/more" ? "border-accent-sec" : "border-none"
          } flex-1 text-center border-b-4 cursor-pointer rounded-t-md hover:bg-back-sec`}
        >
          <Link to="/projects" className="block w-full h-full py-4">
            Más
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
