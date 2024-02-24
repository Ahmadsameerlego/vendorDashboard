<template>
  <div class="background">
    <img src="@/assets/imgs/bg/header.svg" alt="" />
  </div>

  <!-- start page content -->

  <div class="page-content">
    <div class="mt-4 mb-3 text-center">
      <h5 class="bold">انشاء حساب جديد</h5>
      <p class="m-3">من اجل تسجيل متجرك يرجى ادخال البيانات التالية</p>
    </div>

    <div class="w-md-50 m-auto round10 p-3 pl-4 pr-4 form-cont">
      <div class="container register-header m-auto">
        <div class="current">
          <span class="select-register-step">1</span>
          <span class="font16 bold"> البيانات الاساسية </span>
        </div>
        <div class="line-between"></div>
        <div>
          <span class="select-register-step">2</span>
          <span class="font16 bold"> بيانات المتجر </span>
        </div>
      </div>
    </div>

    <div class="w-md-50 m-auto round10 p-3 form-cont">
      <form action="" class="container">
        <h6 class="bold border-bottom pt-3 pb-3 mb-4">بيانات مدير النظام</h6>

        <div class="form-group">
          <div class="row align-items-center justify-content-start">
            <div class=" ">
              <label for="file1">
                <div class="input-img-cont">
                  <img
                    src="@/assets/imgs/icons/upload-img.png"
                    id="view1"
                    class="input-img"
                    alt=""
                  />
                  <img
                    src="@/assets/imgs/icons/camera.png"
                    class="input-img-camera"
                    alt=""
                  />
                </div>
                <input
                  onchange="viewImg(event ,'#view1')"
                  class="d-none"
                  type="file"
                  name=""
                  id="file1"
                />
              </label>
            </div>
            <div class="col">
              <h6 class="bold font14">الصورة الشخصية</h6>
              <!-- <p class="font12 color-gray">يرجي رفع صورة مقاس 200 * 200</p> -->
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            اسم مدير النظام
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="اسم مدير النظام"
          />
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            رقم الهاتف
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <div class="row">
            <div class="col-4 col-md-2 p-1 pr-0">
              <select class="form-control">
                <option selected disabled>+966</option>
              </select>
            </div>
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
          <label class="bold font14" for="exampleInputEmail1">
            البريد الالكتروني
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="البريد الالكتروني"
          />
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

        <div class="form-group">
          <label class="bold font14" for="Password1">تأكيد كلمة المرور </label>
          <div class="password-cont">
            <input
              type="password"
              class="form-control"
              id="Password2"
              aria-describedby="emailHelp"
              placeholder="كلمة المرور"
            />
            <i class="fa fa-eye color-gray" id="signInShowPassword2"></i>
          </div>
        </div>

        <button class="button1 w-100 mt-3 material-button">
          <router-link to="/completeRegister"> استكمال </router-link>
        </button>

        <div class="text-center p-3">
          <p>لديك حساب بالفعل ؟ <a href="login.html">اضغط هنا</a></p>
        </div>
      </form>
    </div>
  </div>

  <!-- end page content -->
</template>

<script>
export default {
  name: "VendorDashboardRegisterView",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
