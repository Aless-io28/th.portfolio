import useNavbar from "../../hooks/useNavbar";

const Navbar = () => {
  const { setPage } = useNavbar();

  return (
    <nav className="w-full">
      <ul className="flex justify-between gap-3 my-8 text-md">
        <li
          className="flex-1 py-4 text-center cursor-pointer rounded-t-md hover:bg-back-sec"
          onClick={() => setPage("")}
        >
          Sobre mí
        </li>
        <li
          className="flex-1 py-4 text-center cursor-pointer rounded-t-md hover:bg-back-sec"
          onClick={() => setPage("projects")}
        >
          Proyectos
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
