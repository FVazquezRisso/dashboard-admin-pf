import LoginPage from "./pages/LoginPage.vue";
import UsersPage from "./pages/UsersPage.vue";
import SongsPage from "./pages/SongsPage.vue";
import CategoriesPage from './Pages/CategoriesPage.vue'


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
