import { lazy } from "react";

const LazyStoreComment = lazy(() =>
  import("../../page/comments/store")
);

const LazyProtectAuthRoutesLayout= lazy(() =>
  import("../../layouts/ProtectAuthRoutesLayout")
);

const CommentRouter = [
  {
    path:'comments',
    element: <LazyProtectAuthRoutesLayout />,
    children:[
      {
        path: "store",
        element: <LazyStoreComment />,
      }
    ]
  }
];

export default CommentRouter;