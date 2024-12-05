import { createBrowserRouter } from "react-router-dom";
import Motions from "./components/Motions";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Motions />,
  },
  {
    path: "/variants",
    element: <Variants />,
  },
  {
    path: "/gestures",
    element: <Gestures />,
  },
]);

export default router;
