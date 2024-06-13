import { lazy } from "react";

const LazyRegeister= lazy(() =>
  import("../../page/auth/register")
);

const LazyLogin= lazy(() =>
  import("../../page/auth/login")
);

const LazyProtectPublicRoutesLayout= lazy(() =>
  import("../../layouts/ProtectPublicRoutesLayout")
);


const AuthRouter = [
  {
    path:'auth',
    element: <LazyProtectPublicRoutesLayout />,
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