import Vue from "vue";
import VueRouter from "vue-router";
import CartPage from "../views/CartPage.vue";
import ProductDetailsPage from "../views/ProductDetailsPage.vue";
import ProductPage from "../views/ProductPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/products/:id",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
