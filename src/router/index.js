import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import appRoutes from "./appRoutes";
import ApplicationLayout from "@/layouts/ApplicationLayout";
import NotFound from "@/views/NotFound";
import { authenticationGuard } from "@/auth/authentication-guard";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "MarketingLayout",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      layout: "MarketingLayout",
    },
  },
  {
    name: "Application",
    path: "/app",
    component: ApplicationLayout,
    children: [...appRoutes],
    meta: {
      layout: "none",
    },
    beforeEnter: authenticationGuard,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound,
    meta: {
      layout: "none",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
