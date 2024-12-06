import { createBrowserRouter } from "react-router-dom";
import Motions from "./components/Motions";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import MotionValue from "./components/MotionValue";
import MotionSVG from "./components/MotionSVG";

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
  {
    path: "/motion-value",
    element: <MotionValue />,
  },
  {
    path: "/motion-svg",
    element: <MotionSVG />,
  },
]);

export default router;
