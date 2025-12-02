import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Division from "../pages/Division.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/division", component: Division },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
