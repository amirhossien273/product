import { lazy } from "react";

const LazyIndexProduct = lazy(() =>
  import("../../page/products/index")
);

const LazyProtectAuthRoutesLayout= lazy(() =>
  import("../../layouts/ProtectAuthRoutesLayout")
);

const ProductRouter = [
  {
    path:'products',
    element: <LazyProtectAuthRoutesLayout />,
    children:[
      {
        path: "",
        element: <LazyIndexProduct />,
      }
    ]
  }
];

export default ProductRouter;