import { lazy } from "react";

const LazyRegeister= lazy(() =>
  import("../../page/auth/register")
);

const LazyLogin= lazy(() =>
  import("../../page/auth/login")
);

const LazyProtectAuthRoutesLayout= lazy(() =>
  import("../../layouts/ProtectAuthRoutesLayout")
);

const AuthRouter = [
  {
    path:'auth',
    element: <LazyProtectAuthRoutesLayout />,
    children:[
      {
        path: "register",
        element: <LazyRegeister />,
      },
      {
        path: "login",
        element: <LazyLogin />,
      },
    ]
  }
];

export default AuthRouter;