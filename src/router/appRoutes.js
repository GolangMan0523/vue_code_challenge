import DashboardView from "@/views/application/DashboardView";
import ProfileView from "@/views/application/ProfileView";

const routes = [
  {
    name: "dashboard",
    path: "dashboard",
    component: DashboardView,
  },
  {
    name: "profile",
    path: "profile",
    component: ProfileView,
  },
];

export default routes;
