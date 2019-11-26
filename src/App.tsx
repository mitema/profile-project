import React from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";

import { routes } from "./constants/routes";

import Layout from "./components/Layout";

interface IAppProps {}

type Props = {
  component: React.FunctionComponent;
} & RouteComponentProps;

const RouterPage: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Layout>
    <Component {...rest} />
  </Layout>
);

const App: React.FC<IAppProps> = () => (
  <Router>
    {routes.map(({ path, component }, idx) => (
      <RouterPage key={`${path}-${idx}`} path={path} component={component} />
    ))}
  </Router>
);
export default App;
