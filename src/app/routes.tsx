import { createBrowserRouter } from "react-router";
import { ElderHome } from "./pages/ElderHome";
import { FamilyDashboard } from "./pages/FamilyDashboard";
import { HealthPage } from "./pages/HealthPage";
import { MessagesPage } from "./pages/MessagesPage";
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
  {
    path: "/health",
    Component: HealthPage,
  },
  {
    path: "/messages",
    Component: MessagesPage,
  },
]);
