// @ts-check
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import * as OUR_ROUTES from "./constants/routes";
import NavHeader from "./components/NavHeader";

const Home = lazy(() => import("./pages/Home/Home"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <section>
            <div className="flex h-screen">
              <div className="m-auto">
                <img
                  width="128px"
                  height="128px"
                  src="/images/moving_train.gif"
                  alt="loader"
                />
              </div>
            </div>
          </section>
        }
      >
        <NavHeader />
        <Routes>
          <Route path={OUR_ROUTES.HOME} element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
