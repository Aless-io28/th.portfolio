import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky flex justify-between w-full px-10 py-4 mt-4 rounded-lg top-4 bg-back-sec">
      <img src="thlogo.png" alt="" className="w-8" />
      <ul className="flex gap-4">
        <li className="text-md">
          <Link to="/" className="p-4">
            Home
          </Link>
        </li>
        <li className="text-md">
          <Link to="/about" className="p-4">
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
