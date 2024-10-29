import useNavbar from "../../hooks/useNavbar";

const Navbar = () => {
  const { page, setPage } = useNavbar();

  return (
    <nav className="w-full">
      <ul className="relative flex justify-between gap-0 my-8 text-md">
        <li
          className="flex-1 py-4 text-center cursor-pointer rounded-t-md hover:bg-back-sec"
          onClick={() => setPage("0")}
        >
          Sobre mí
        </li>
        <li
          className="flex-1 py-4 text-center cursor-pointer rounded-t-md hover:bg-back-sec"
          onClick={() => setPage("1")}
        >
          Proyectos
        </li>
        <li
          className={`translate-x-${
            page == "0" ? "0" : "[100%]"
          } w-[50%] absolute h-1 bottom-0 bg-accent-sec rounded-md transition-transform duration-nav ease-back`}
        ></li>
      </ul>
    </nav>
  );
};

export default Navbar;
