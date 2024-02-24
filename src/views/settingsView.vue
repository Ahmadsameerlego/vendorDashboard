<template>
  <div>
    <div class="table-cont p-2">
      <div class="row align-items-center">
        <div class="dash-title col-md p-0 mt-0">
          <h6 class="bold">الاعدادات</h6>
          <p class="mb-1">الاعدادات / إعدادات الملف الشخصي</p>
        </div>
      </div>

      <!-- start tabs -->

      <!-- start tabs header -->
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            >البيانات الشخصية</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            >مواعيد العمل</a
          >
        </li>
        <li class="nav-item"></li>
      </ul>
      <!-- end tabs header -->
      <!-- start tabs content -->
      <div class="tab-content" id="pills-tabContent">
        <!-- البيانات الشخصة -->
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <!-- end tabs -->
          <form id="form">
            <div class="white-bg round7 mb-3 mt-2 p-3">
              <h6 class="bold border-bottom pt-3 pb-3 mb-4">
                بيانات الملف الشخصي
              </h6>

              <div class="w-md-75">
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
                  <label class="bold font14" for="name-ar">
                    اسم المتجر باللغة العربية
                    <span style="color: #ff3333; margin: auto 20px">
                      *
                    </span></label
                  >
                  <div class="password-cont">
                    <input
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="الرجاء ادخال اسم مدير النظام"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="bold font14" for="name-en">
                    اسم المتجر باللغة الانجليزية
                    <span style="color: #ff3333; margin: auto 20px">
                      *
                    </span></label
                  >
                  <div class="password-cont">
                    <input
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="الرجاء ادخال اسم مدير النظام"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="bold font14" for="exampleInputEmail1">
                    رقم الهاتف
                    <span style="color: #ff3333; margin: auto 20px">
                      *
                    </span></label
                  >
                  <div class="row">
                    <div class="col-4 col-md-2 p-1 pr-0">
                      <select class="form-control">
                        <option selected disabled>+966</option>
                      </select>
                    </div>
                    <div class="col pt-1 pb-1 pl-0 pr-1">
                      <div class="form-group">
                        <div class="password-cont">
                          <input
                            type="number"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="الرجاء ادخال رقم الهاتف"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label class="bold font14" for="Password1">
                    البريد الالكتروني
                    <span style="color: #ff3333; margin: auto 20px">
                      *
                    </span></label
                  >
                  <div class="password-cont">
                    <input
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="الرجاء ادخال البريد الالكتروني"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="address" class="bold font14">
                    عنوان المتجر
                    <span style="color: #ff3333; margin: auto 20px">
                      *
                    </span></label
                  >
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="form-control"
                  />
                  <br />
                  <div id="map" style="width: 100%; height: 250px"></div>
                  <input type="hidden" name="lat" id="lat" value="30" />
                  <input type="hidden" name="lng" id="lng" value="30" />
                </div>

                <h6 class="font-weight-bold mt-4">بيانات الحسال النكي</h6>
                <hr />
                <div class="form-group">
                  <label class="bold font14" for="name-ar">
                    اسم الحساب
                    <span style="color: #ff3333; margin: auto 20px">
                      *
                    </span></label
                  >
                  <div class="password-cont">
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="الرجاء ادخال اسم مدير النظام"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="bold font14" for="name-ar">
                    رقم البيان
                    <span style="color: #ff3333; margin: auto 20px">
                      *
                    </span></label
                  >
                  <div class="password-cont">
                    <input
                      type="number"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="الرجاء ادخال اسم مدير النظام"
                    />
                  </div>
                </div>
                <!--


                                    <h6 class="bold"> تغيير كلمة المرور</h6>
                    
                                    <div class="form-group">
                                        <label class="bold font14" for="Password1"> كلمة المرور الحالية </label>
                                        <div class="password-cont">
                                            <input type="password" class="form-control" id="Password1" aria-describedby="emailHelp" placeholder="الرجاء ادخال كلمة المرور الحالية">
                                            <i class="fa fa-eye color-gray" id="signInShowPassword1"></i>
                                        </div>
                                    </div>
                    
                                    <div class="form-group">
                                        <label class="bold font14" for="Password1">كلمة المرور الجديدة  </label>
                                        <div class="password-cont">
                                            <input type="password" class="form-control" id="Password2" aria-describedby="emailHelp" placeholder="الرجاء ادخال كلمة المرور الجديدة">
                                            <i class="fa fa-eye color-gray" id="signInShowPassword2"></i>
                                        </div>
                                    </div> -->
              </div>
            </div>

            <div class="d-flex align-items-baseline">
              <button class="button1 mt-3 material-button">
                حفظ التغييرات
              </button>
              <router-link to="/changePassword" class="change-pass"
                >تعديل كلمة المرور</router-link
              >
            </div>
          </form>
        </div>
        <!-- مواعيد العمل -->
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <section id="checks" class="white-bg round7 mt-4 mb-4 p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="font-weight-bold">ايام الاسبوع</h6>
                  <h6 class="font-weight-bold">متاح / غير متاح</h6>
                </div>
              </div>
            </div>
            <hr />

            <form class="">
              <div class="row">
                <div class="col-lg-6">
                  <section class="items">
                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">السبت</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاحد</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاثنين</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الثلاثاء</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاربعاء</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الخميس</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الجمعة</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </section>
                </div>
              </div>
              <button class="button1 mt-3 material-button">
                حفظ التغييرات
              </button>
            </form>
          </section>
        </div>
      </div>
      <!-- end tabs header -->
    </div>
  </div>
</template>

<script>
export default {
  name: "VendorDashboardSettingsView",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
