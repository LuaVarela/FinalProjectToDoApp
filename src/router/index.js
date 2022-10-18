import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/Home.vue"),
    },
    {
      path: "/singIn",
      name: "singIn",
      component: () => import("../components/singIn.vue"),
    },
    {
      path: "/singUp",
      name: "singUp",
      component: () => import("../components/singUp.vue"),
    },
  ],
});

export default router;
