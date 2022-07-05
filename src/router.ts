import { createRouter, createWebHistory } from "vue-router"
import Test from "./components/Test.vue"
import Play from "./components/Play.vue"

const routes = [
  { path: '/', component: Test },
  { path: '/play', component: Play },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
