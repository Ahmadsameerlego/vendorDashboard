<template>
  <div class="background" style="background: #fff">
    <img src="@/assets/imgs/bg/header.svg" alt="" />
  </div>

  <!-- start page content -->

  <div class="page-content">
    <div class="row">
      <div class="col-md p-3">
        <div class="ml-md-5 mr-md-5 p-3">
          <div class="formLogoImage">
            <img src="@/assets/imgs/logo.png" alt="" />
          </div>

          <form
            @submit.prevent="login"
            class="container loginForm"
            ref="loginForm"
          >
            <h6 class="bold text-center">هل نسيت كلمة المرور؟</h6>
            <p class="text-center">ادخل كلمة المرور الجديدة</p>

            <div class="form-group">
              <label class="bold font14" for="Password1"> كلمة المرور </label>
              <div class="password-cont">
                <input
                  type="password"
                  class="form-control"
                  id="Password1"
                  aria-describedby="emailHelp"
                  placeholder="كلمة المرور"
                  name="password"
                  v-model="password"
                  required
                />
                <i class="fa fa-eye color-gray" id="signInShowPassword1"></i>
              </div>
            </div>

            <div class="form-group">
              <label class="bold font14" for="Password1"
                >تأكيد كلمة المرور
              </label>
              <div class="password-cont">
                <input
                  type="password"
                  class="form-control"
                  id="Password2"
                  aria-describedby="emailHelp"
                  placeholder="كلمة المرور"
                  v-model="password_confirmation"
                  required
                />
                <i class="fa fa-eye color-gray" id="signInShowPassword2"></i>
              </div>
            </div>

            <button
              class="button1 w-100 mt-3 material-button"
              :disabled="disabled"
            >
              التالي
              <ProgressSpinner v-if="disabled" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Toast />
  <!-- end page content -->
</template>

<script>
import ProgressSpinner from "primevue/progressspinner";

import axios from "axios";
import Toast from "primevue/toast";

export default {
  name: "VendorDashboardLoginView",

  data() {
    return {
      countries: [],
      disabled: true,
      phone: "",
      country_key: "",
        code: "",
        password: "",
      password_confirmation : ""
    };
  },
    watch: {
        password() {
            if (this.password == this.password_confirmation) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },
        password_confirmation() {
            if (this.password == this.password_confirmation) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },
  },
  mounted() {
    this.getCountries();

    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => localStorage.setItem("device_id", data.ip))
      .catch((error) => console.error(error));
  },

  methods: {
    // get countries
    async getCountries() {
      await axios.get("countries").then((res) => {
        this.countries = res.data.data;
      });
    },

    // login
    async login() {
      this.disabled = true;
      const fd = new FormData(this.$refs.loginForm);
      fd.append("phone", localStorage.getItem("phone"));
      fd.append("country_key", localStorage.getItem("country_key"));
      fd.append("code", localStorage.getItem("code"));

      await axios.post("store/reset-password", fd).then((res) => {
        if (res.data.key == "success") {
          this.$toast.add({
            severity: "success",
            summary: res.data.msg,
            life: 4000,
          });
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        } else {
          this.$toast.add({
            severity: "error",
            summary: res.data.msg,
            life: 4000,
          });
        }
        this.disabled = false;
      });
    },
  },
  components: {
    Toast,
    ProgressSpinner,
  },
};
</script>

<style lang="scss">
.p-progress-spinner {
  position: relative;
  margin: 0 auto;
  width: 45px;
  height: 18px;
  display: inline-block;
  color: #fff;
}
</style>
