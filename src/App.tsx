import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const dataRoutes = [
  {
    path: "/",
    element: lazy(() => import("./page/Home")),
  },
  {
    path: "/projects",
    element: lazy(() => import("./page/Projects")),
  },
];

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
  );
}

export default App;
