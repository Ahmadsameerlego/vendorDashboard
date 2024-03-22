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
        <div class="active">
          <span class="select-register-step">1</span>
          <span class="font16 bold"> البيانات الاساسية </span>
        </div>
        <div class="line-between"></div>
        <div class="current">
          <span class="select-register-step">2</span>
          <span class="font16 bold"> بيانات المتجر </span>
        </div>
      </div>
    </div>

    <div class="w-md-50 m-auto round10 p-3 form-cont">
      <form action="successfuly-sent.html" class="container">
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
              <div class="col img-input-title">الرجاء ارفاق صورة الغلاف</div>
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
            الاسم باللغة العربية
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
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
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
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
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <select class="form-control">
            <option selected disabled>الرجاء تحديد القسم</option>
          </select>
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            رقم السجل التجاري
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
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
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
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
          <input type="text" name="address" id="address" class="form-control" />
          <br />
          <div id="map" style="width: 100%; height: 250px"></div>
          <input type="hidden" name="lat" id="lat" value="30" />
          <input type="hidden" name="lng" id="lng" value="30" />
        </div>
      </form>
    </div>

    <div class="w-md-50 m-auto round10 p-3 pl-4 pr-4 form-cont">
      <div class="">
        <h6 class="bold border-bottom pt-3 pb-3 mb-3">اوقات العمل</h6>

        <div class="time-slider-cont">
          <div class="w-100 time-button text-center">
            <button onclick="addNewTimes()" class="btn mt-1">
              <img src="@/assets/imgs/icons/time.png" alt="" />
            </button>
            <h6 class="bold pt-2 pb-2">لاتوجد اوقات</h6>
            <p>برجاء الضغط على علامة الإضافة لاضافة أوقات عمل</p>
          </div>
          <div class="w-100 time-cont">
            <div class="">
              <div class="times-cont">
                <div class="container time m-auto">
                  <div class="row">
                    <div class="col-md p-1">
                      <label class="bold">اليوم</label>
                      <select class="form-control border no-arrow">
                        <option>السبت</option>
                        <option>الاحد</option>
                        <option>الاثنين</option>
                        <option>الثلاثاء</option>
                        <option>الاربعاء</option>
                        <option>الخميس</option>
                        <option>الجمعة</option>
                      </select>
                    </div>

                    <div class="col-md p-1">
                      <label class="bold">من </label>
                      <input
                        type="time"
                        class="p-3 border round5 w-100"
                        name="timesFrom[]"
                        id=""
                      />
                    </div>

                    <div class="col-md p-1">
                      <label class="bold">الي</label>
                      <input
                        type="time"
                        class="p-3 border round5 w-100"
                        name="timesTo[]"
                        id=""
                      />
                    </div>

                    <div class="col-md-1 p-1">
                      <label class="bold sn" style="color: #fff">.</label>
                      <button
                        class="button1 material-button time-add-button"
                        onclick="addTime()"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                      <button
                        class="button-error material-button time-remove-button d-none"
                        onclick="removeTime(this)"
                      >
                        <i class="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-md-50 m-auto round10 p-3 pl-4 pr-4 form-cont">
      <div class="">
        <h6 class="bold border-bottom pt-3 pb-3 mb-3">بيانات الحساب البنكي</h6>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            اسم الحساب
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
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
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
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

      <button class="button1 w-100 mt-3 material-button">تأكيد</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VendorDashboardCompleteRegister",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
