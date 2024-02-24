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

          <form action="" class="container loginForm">
            <h6 class="bold text-center">تسجيل الدخول</h6>
            <p class="text-center">برجاء ادخال بيانات حسابك حتى تتمكن الدخول</p>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                رقم الهاتف</label
              >
              <div class="row">
                <div class="col pt-1 pb-1 pl-0 pr-1">
                  <input
                    type="text"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="رقم الهاتف"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="bold font14" for="Password1"> كلمة المرور </label>
              <div class="password-cont">
                <input
                  type="password"
                  class="form-control"
                  id="Password1"
                  aria-describedby="emailHelp"
                  placeholder="كلمة المرور"
                />
                <i class="fa fa-eye color-gray" id="signInShowPassword1"></i>
              </div>
            </div>

            <div class="text-align2">
              <a href="forget-password.html" class="gray-a"
                >هل نسيت كلمة المرور؟</a
              >
            </div>

            <button class="button1 w-100 mt-3 material-button">
              تسجيل الدخول
            </button>

            <div class="text-center p-3">
              <p>
                ليس لديك حساب؟
                <router-link to="/register" class="color2"
                  >اضغط هنا</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- end page content -->
</template>

<script>
export default {
  name: "VendorDashboardLoginView",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
