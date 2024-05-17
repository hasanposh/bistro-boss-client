import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import OurMneu from "../pages/Menu/OurMenu/OurMneu"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : "/menu",
        element: <OurMneu />,
      },
    ],
  },
]);
