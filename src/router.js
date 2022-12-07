import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/routes/main.vue"),
  },
  {
    path: "/dev",
    component: () => import("@/routes/dev.vue"),
  },
  {
    path: "/slp",
    component: () => import("@/routes/position.vue"),
  },
  {
    path: "/iot",
    component: () => import("@/routes/iot.vue"),
  },
  {
    path: "/about",
    component: () => import("@/routes/about.vue"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
