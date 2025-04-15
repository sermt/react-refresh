import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";

import Posts, { Loader } from "./routes/Posts";
import "./index.css";
import NewPost, { createPost } from "./routes/NewPost";
import PostDetails, {PostDetailsLoader} from "./routes/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: Loader,
        children: [
          { path: "/create-post", element: <NewPost />, action: createPost },
          { path: "/:id", element: <PostDetails />, loader: PostDetailsLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
