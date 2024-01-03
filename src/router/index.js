import { createRouter, createWebHistory } from "vue-router";

import Top from "../views/top/Top.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Top,
    },
  ],
});

export default router;
