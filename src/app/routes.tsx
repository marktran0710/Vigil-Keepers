import { createBrowserRouter } from "react-router";
import { ElderHome } from "./pages/ElderHome";
import { FamilyDashboard } from "./pages/FamilyDashboard";
import { Presentation } from "./pages/Presentation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Presentation,
  },
  {
    path: "/elder",
    Component: ElderHome,
  },
  {
    path: "/family",
    Component: FamilyDashboard,
  },
  {
    path: "/presentation",
    Component: Presentation,
  },
]);
