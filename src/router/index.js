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
      component: () => import("src/components/SignIn.vue"),
    },
    {
      path: "/signUp",
      name: "signUp",
      component: () => import("../components/SignUp.vue"),
    },
    {
      path: "/ToDoList",
      name: "ToDoList",
      component: () => import("../components/ToDoList.vue"),
    },
  ],
});

// router.beforeEach((to) => {
//   const userStore = useUserStore();
//   const { user } = storeToRefs(userStore);
//   if (to.meta.requiresAuth && !user.value) return "/home";
// });

export default router;
