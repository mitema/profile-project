import React from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";

import RouterPage from "./components/RouterPage";
import { routes } from "./constants/routes";

import WorkPage from "./views/WorkPage";
import MusicPage from "./views/MusicPage";

interface IAppProps {}

const App: React.FC<IAppProps> = () => (
  <Router>
    {routes.map(({ path, component }, idx) => (
      <RouterPage path={path} component={component}></RouterPage>
    ))}
  </Router>
);
export default App;
