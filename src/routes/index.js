import { useRoutes } from "react-router-dom";
import { mainRoutes } from "./main.routes";

export const Routes = () => {
  // routes based on the presence of a token
  return useRoutes(mainRoutes);
};
