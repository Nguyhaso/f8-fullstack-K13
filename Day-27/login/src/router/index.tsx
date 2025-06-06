import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage.tsx"
import PostPage from "../pages/Postpage.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
  ])
export default router;