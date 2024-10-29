import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

const useNavbar = () => {
  const { page, setPage } = useContext(NavigationContext);

  return {
    page,
    setPage,
  };
};

export default useNavbar;
