// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
import AuthRouter from "./Auth";
import CommentRouter from "./Comment";
import ProductRouter from "./Product";

const DefaultRoute = "/profile";

// ** Merge Routes
const Routes = [
  ...AuthRouter,
  ...CommentRouter,
  ...ProductRouter
];

const MergeLayoutRoutes = () => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRouteMeta = (route) => {
  const AllRoutes = [];


    AllRoutes.push(Routes);
  return AllRoutes;
};


const getRoutes = () => {
  const defaultLayout = "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

;
  return Routes;
};

export { DefaultRoute, getRoutes };