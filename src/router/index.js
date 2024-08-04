import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import products from "../views/productsView.vue";
import addProduct from "../views/addProduct.vue";
import newOrders from "../views/ordersVue.vue";
import activeOrders from "../views/activeOrders.vue";
import completeOrders from "../views/completeOrders.vue";
import waitingPayment from "../views/waintingPaymentOrders.vue";
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
import acceptedReservations from "../views/acceptedReservations.vue"
import refusedReservations from "../views/refusedReservations.vue";
import canceledReservations from "../views/canceledReservations.vue";
import clientCanceled from "../views/clientCanceled.vue";
import categories from '../views/categoriesView.vue'
import plans from "../views/plansView.vue";
import menus from "../views/menusView.vue"
import editMeue from "../views/editMenu.vue"
const routes = [
  {
    path: "/editMenue/:id",
    component: editMeue,
  },
  {
    path: "/menus",
    component: menus,
  },
  {
    path: "/plans",
    component: plans,
  },
  {
    path: "/categories",
    component: categories,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/reservations",
    component: reservations,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/accepted-reservations",
    component: acceptedReservations,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/refused-reservations",
    component: refusedReservations,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/canceled-reservations",
    component: canceledReservations,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/client-canceled-reservations",
    component: clientCanceled,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/editProduct/:id",
    component: editProduct,
    meta: {
      requiresAuth: true,
    },
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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products",
    component: products,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/addProduct",
    component: addProduct,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/newOrders",
    component: newOrders,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/waiting-payment",
    component: waitingPayment,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/activeOrders",
    component: activeOrders,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/completeOrders",
    component: completeOrders,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/orderDetails/:id",
    component: orderDetails,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/finance",
    component: finance,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/newFinance",
    component: newFinance,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/settings",
    component: settings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/changePassword",
    component: changePassword,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/reviews",
    component: reviews,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/addAdvertisement",
    component: addAdvertisement,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/contactUs",
    component: contactUs,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/notification",
    component: notification,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
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
    meta: {
      requiresAuth: true,
    },
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


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem("token")||localStorage.getItem('auth')) {
      next({ name: "login" });
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

export default router;
