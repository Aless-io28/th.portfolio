import { createContext, useState } from "react";

type NavigationContextType = {
  page: string;
  setPage: (page: string) => void;
};

export const NavigationContext = createContext<NavigationContextType>(
  {} as NavigationContextType
);

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<string>("");

  return (
    <NavigationContext.Provider value={{ page, setPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
