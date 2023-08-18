import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import LoginPage from "./pages/LoginPage.vue";
import UsersPage from "./pages/UsersPage.vue";
import SongsPage from "./pages/SongsPage.vue";
import CategoriesPage from "./Pages/CategoriesPage.vue";

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/users",
    component: UsersPage,
  },
  {
    path: "/songs",
    component: SongsPage,
  },
  {
    path: "/categories",
    component: CategoriesPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
