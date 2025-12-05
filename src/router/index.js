import { createRouter, createWebHistory } from "vue-router";
import AuthLogin from "../pages/AuthLogin.vue";
import AuthRegister from "../pages/AuthRegister.vue";
import Home from "../pages/Home.vue";

const routes = [
  { path: "/", redirect: "/login" },   // FIRST PAGE = LOGIN

  { path: "/login", component: AuthLogin },
  { path: "/register", component: AuthRegister },

  { path: "/home", component: Home },
   {
    path: "/division",
    name: "Division",
    component: () => import("../pages/Division.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
