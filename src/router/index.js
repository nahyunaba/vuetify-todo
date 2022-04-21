import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PurchaseView from "../views/PurchaseView.vue";
import StockView from "../views/StockView.vue";

Vue.use(VueRouter);

const routes = [
  {
    // 主页面（订单管理）
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // 采购页面
    path: "/perchase",
    name: "PurchaseView",
    component: PurchaseView,
  },
  {
    //库存管理
    path: "/stock",
    name: "StockView",
    component: StockView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
