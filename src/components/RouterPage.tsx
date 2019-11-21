import React from "react";
import { RouteComponentProps } from "@reach/router";

type Props = {
  component: React.FunctionComponent;
} & RouteComponentProps;

const RouterPage: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);
export default RouterPage;
