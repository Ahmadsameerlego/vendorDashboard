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
            id="pills-market-tab"
            data-toggle="pill"
            href="#pills-market"
            role="tab"
            aria-controls="pills-market"
            aria-selected="true"
            >بيانات المتجر</a
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

        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-charge-tab"
            data-toggle="pill"
            href="#pills-charge"
            role="tab"
            aria-controls="pills-charge"
            aria-selected="false"
            >وقت التحضير</a
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
          <form action="" class="white-bg round7 mb-3 mt-2 p-3">
            <h6 class="bold border-bottom pt-3 pb-3 mb-4">
              بيانات مدير النظام
            </h6>

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
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
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
                رقم الهوية
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="رقم الهوية"
              />
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
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="البريد الالكتروني"
              />
            </div>
            <div class="m-auto round10 p-3 pl-4 pr-4 form-cont">
              <div class="">
                <h6 class="bold border-bottom pt-3 pb-3 mb-3">
                  بيانات الحساب البنكي
                </h6>

                <div class="form-group">
                  <label class="bold font14" for="exampleInputEmail1">
                    اسم الحساب
                    <span style="color: #ff3333; margin: auto 20px">
                      *
                    </span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="اسم الحساب "
                  />
                </div>

                <div class="form-group">
                  <label class="bold font14" for="exampleInputEmail1">
                    رقم الايبان
                    <span style="color: #ff3333; margin: auto 20px">
                      *
                    </span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="رقم الايبان "
                  />
                </div>
              </div>
            </div>

            <button class="button1 w-100 mt-3 material-button">حفظ</button>
          </form>

          <div class="d-flex align-items-baseline">
            <router-link to="/changePassword" class="change-pass"
              >تعديل كلمة المرور</router-link
            >
          </div>
        </div>

        <!-- البيانات المتجر -->
        <div
          class="tab-pane fade"
          id="pills-market"
          role="tabpanel"
          aria-labelledby="pills-market-tab"
        >
          <form
            action="successfuly-sent.html"
            class="white-bg round7 mb-3 mt-2 p-3"
          >
            <h6 class="bold border-bottom pt-3 pb-3 mb-4">بيانات المتجر</h6>

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
                  <h6 class="bold font14">صورة الشعار</h6>
                  <!-- <p class="font12 color-gray">يرجي رفع صورة مقاس 200 * 200</p> -->
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="bold font14 d-block" for="coverImgcont">
                <div class="mb-2">
                  صورة الغلاف
                  <span style="color: #ff3333; margin: auto 20px"> * </span>
                </div>

                <input
                  type="file"
                  onchange="viewImg(event ,'#coverImg')"
                  class="d-none w-100"
                  id="coverImgcont"
                />
                <div
                  class="row transition img-input align-items-center border w-100 p-2 round5"
                >
                  <div class="col img-input-title">
                    الرجاء ارفاق صورة الغلاف
                  </div>
                  <div class="col text-align2">
                    <img
                      id="coverImg"
                      style="max-width: 120px"
                      src="@/assets/imgs/icons/camera.svg"
                      alt=""
                    />
                  </div>
                </div>
              </label>
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
                الاسم باللغة العربية
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="الاسم باللغة العربية"
              />
            </div>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                الاسم باللغة الانجليزية
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="الاسم باللغة الانجليزية "
              />
            </div>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                تحديد القسم
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <select class="form-control">
                <option selected disabled>الرجاء تحديد القسم</option>
              </select>
            </div>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                رقم السجل التجاري
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="رقم السجل التجاري "
              />
            </div>

            <div class="form-group">
              <label class="bold font14 d-block" for="coverImgcont2">
                <div class="mb-2">
                  صورة السجل التجاري
                  <span style="color: #ff3333; margin: auto 20px"> * </span>
                </div>

                <input
                  type="file"
                  onchange="viewImg(event ,'#coverImg2')"
                  class="d-none w-100"
                  id="coverImgcont2"
                />
                <div
                  class="row transition img-input align-items-center border w-100 p-2 round5"
                >
                  <div class="col img-input-title">
                    الرجاء ارفاق صورة السجل التجاري
                  </div>
                  <div class="col text-align2">
                    <img
                      id="coverImg2"
                      style="max-width: 120px"
                      src="@/assets/imgs/icons/camera.svg"
                      alt=""
                    />
                  </div>
                </div>
              </label>
            </div>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                رقم السجل التجاري
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="رقم السجل التجاري "
              />
            </div>

            <div class="form-group">
              <h3>العنوان :</h3>
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
                  <h6 class="font-weight-bold" style="margin-left: 50px">
                    متاح / غير متاح
                  </h6>
                </div>
              </div>
            </div>
            <hr />

            <form class="">
              <div class="row">
                <div class="col-lg-12">
                  <section class="items">
                    <div
                      class="item d-flex justify-content-between align-items-baseline"
                    >
                      <h6 class="font-weight-bold">السبت</h6>
                      <label class="switch mt-4">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>

                      <div class="d-flex" style="transform: translateY(-30px)">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاحد</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاثنين</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الثلاثاء</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاربعاء</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الخميس</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الجمعة</h6>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                          />
                        </div>
                      </div>
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

        <!-- وقت التحضير -->
        <div
          class="tab-pane fade"
          id="pills-charge"
          role="tabpanel"
          aria-labelledby="pills-charge-tab"
        >
          <form
            action="successfuly-sent.html"
            class="white-bg round7 mb-3 mt-2 p-3"
          >
            <h6 class="bold border-bottom pt-3 pb-3 mb-4">بيانات المتجر</h6>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                متوسط وقت التحضير
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
                  <input
                    type="number"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="متوسط وقت التحضير (بالدقائق)"
                  />
            </div>
          </form>
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
