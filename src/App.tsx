import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavigationProvider from "./context/NavigationContext";
import LoadApp from "./components/loading/LoadApp";

const dataRoutes = [
  {
    path: "/",
    element: lazy(() => import("./page/Home")),
  },
  {
    path: "*",
    element: lazy(() => import("./page/Error")),
  },
];

function App() {
  return (
    <NavigationProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadApp />}>
          <Routes>
            {dataRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                Component={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </NavigationProvider>
  );
}

export default App;
