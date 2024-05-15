import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import products from "../views/productsView.vue";
import addProduct from "../views/addProduct.vue";
import newOrders from "../views/ordersVue.vue";
import activeOrders from "../views/ordersVue.vue";
import completeOrders from "../views/ordersVue.vue";
import orderDetails from "../views/orderDetails.vue";
import finance from "../views/financeView.vue";
import newFinance from "../views/newFinance.vue";
import settings from "../views/settingsView.vue";
import changePassword from "../views/changePass.vue";
import reviews from "../views/reviewsView.vue";
import addAdvertisement from "../views/addAdvertisement.vue";
import contactUs from "../views/contactUs.vue";
import notification from "../views/notificationsView.vue";
import loginView from "../views/loginView.vue";
import register from "../views/registerView.vue";
import completeRegister from "../views/completeRegister.vue";
import discounts from "../views/discountsView.vue";
import forgetPassword from "../views/forgetPassword.vue"
import sendOtp from "../views/sendOtp.vue"
import resetPassword from "../views/resetPassword.vue";
import timeWork from "../views/regTimeWork.vue";
import bankData from "../views/bankData.vue";
import editProduct from "../views/editProduct.vue"
     
import reservations from '../views/reservationsView.vue'
import categories from '../views/categoriesView.vue'
const routes = [
  {
    path: "/categories",
    component: categories,
  },
  {
    path: "/reservations",
    component: reservations,
  },
  {
    path: "/editProduct/:id",
    component: editProduct,
  },
  {
    path: "/bankData",
    component: bankData,
  },
  {
    path: "/timeWork",
    component: timeWork,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    component: products,
  },
  {
    path: "/addProduct",
    component: addProduct,
  },
  {
    path: "/newOrders",
    component: newOrders,
  },
  {
    path: "/activeOrders",
    component: activeOrders,
  },
  {
    path: "/completeOrders",
    component: completeOrders,
  },
  {
    path: "/orderDetails/:id",
    component: orderDetails,
  },
  {
    path: "/finance",
    component: finance,
  },
  {
    path: "/newFinance",
    component: newFinance,
  },
  {
    path: "/settings",
    component: settings,
  },
  {
    path: "/changePassword",
    component: changePassword,
  },
  {
    path: "/reviews",
    component: reviews,
  },
  {
    path: "/addAdvertisement",
    component: addAdvertisement,
  },
  {
    path: "/contactUs",
    component: contactUs,
  },
  {
    path: "/notification",
    component: notification,
  },
  {
    path: "/login",
    component: loginView,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/completeRegister",
    component: completeRegister,
  },
  {
    path: "/discounts",
    component: discounts,
  },
  {
    path: "/forgetPassword",
    component: forgetPassword,
  },
  {
    path: "/sendOtp",
    component: sendOtp,
  },
  {
    path: "/resetPassword",
    component: resetPassword,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
