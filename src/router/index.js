import { createRouter, createWebHistory } from "vue-router";
import Users from "../views/Users.vue";

const routes = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;