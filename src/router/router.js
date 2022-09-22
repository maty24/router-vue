import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    //si cae en esta ruta me dirige a la nueva ruta
    path: "/",
    redirect: "/home",
  },
  {
    path: "/homr",
    name: "home",
    component: () => import("../modules/pokemon/pages/ListPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../modules/pokemon/pages/AboutPage.vue"),
  },
  {
    path: "/:id", //este id sera un argumento
    name: "pokemon-id",
    component: () => import("../modules/pokemon/pages/PokemonPage.vue"),
    //manda el id en las props
    props: (route) => {
      const id = Number(route.params.id); //parsea el string a number y me trar el numero del param
      return isNaN(id) ? { id: 1 } : { id }; //pregunta si es  number
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../modules/shared/pages/noPageFound.vue"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
