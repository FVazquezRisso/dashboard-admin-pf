import LoginPage from "./Pages/LoginPage.vue";
import UsersPage from "./Pages/UsersPage.vue";
import SongsPage from "./Pages/SongsPage.vue";
import CategoriesPage from "./Pages/CategoriesPage.vue";

export const routes = [
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
