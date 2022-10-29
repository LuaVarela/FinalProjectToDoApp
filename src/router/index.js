import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../components/Home.vue"),
    },
    {
      path: "/signIn",
      name: "signIn",
      component: () => import("../components/signIn.vue"),
    },
    {
      path: "/signUp",
      name: "signUp",
      component: () => import("../components/signUp.vue"),
    },
    {
      path: "/ToDoList",
      name: "ToDoList",
      component: () => import("../components/ToDoList.vue"),
    },
  ],
});

export default router;
