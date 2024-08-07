import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/style.css";


// import primevue
import PrimeVue from "primevue/config";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

import ToastService from "primevue/toastservice";

import axios from "axios";
axios.defaults.baseURL = "https://coffeekies.trysnapus.com/api/";
axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.lang = 'ar'

import VueGoogleMaps from "@fawmi/vue-google-maps";


createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .use(ToastService)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBzyIm5j_8mK6y2CoOkrYA5VdZma3Sulsc",
      libraries: "places",
    },
  })
  .mount("#app");
