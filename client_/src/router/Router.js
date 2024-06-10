// ** Router imports
import { useRoutes, Navigate } from "react-router-dom";

// ** GetRoutes
import {  DefaultRoute, getRoutes } from "./routes";

import Login from "../page/auth/login";


const Router = () => {

  const allRoutes = getRoutes();

  const routes = useRoutes([
    {
     path: "/",
     children: [...allRoutes],
    }
  ]);

  return routes;
};

export default Router;