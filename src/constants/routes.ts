import React from "react";
import WorkPage from "../views/WorkPage";
import MusicPage from "../views/MusicPage";

export const routes = [
  { path: "/music", component: MusicPage },
  { path: "/", component: WorkPage }
];
