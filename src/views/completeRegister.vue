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

    <div class=" m-auto round10 p-3 pl-4 pr-4 form-cont">
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
        <div class="line-between"></div>
        <div class="current">
          <span class="select-register-step">3</span>
          <span class="font16 bold"> اوقات العمل </span>
        </div>
        <div class="line-between"></div>
        <div class="current">
          <span class="select-register-step">4</span>
          <span class="font16 bold"> البيانات البنكية </span>
        </div>
      </div>
    </div>

    <div class=" m-auto round10 p-3 form-cont">
      <form ref="storeData" class="container">
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
                  id="file1"
                  name="logo"
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
              name="cover"
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
              <select class="form-control" name="store_country_key">
                <option v-for="count in countries" :value="count.code" :key="count.id"> {{ count.code }} </option>
              </select>
            </div>
            <div class="col pt-1 pb-1 pl-0 pr-1">
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="رقم الهاتف"
                name="store_phone"
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
            name="name_ar"
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
            name="name_en"
          />
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            تحديد نوع المحل
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <div>
            <MultiSelect v-model="selectedCategories" :options="categories" optionLabel="name" placeholder="اختر نوع المحل"
    :maxSelectedLabels="3" class="w-full md:w-20rem" />

          </div>
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
            name="commercial_id"
          />
        </div>
        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            اسم السجل التجاري
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="اسم السجل التجاري "
            name="commercial_id"
          />
        </div>
<div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            تاريخ الانتهاء
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="تاريخ الانتهاء "
            name="commercial_id"
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
              name="commercial_image"
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
            الرقم الضريبي
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="الرقم الضريبي "
            name="commercial_id"
          />
        </div>

         <div class="form-group">
          <label class="bold font14 d-block" for="coverImgcont2">
            <div class="mb-2">
              صورة الرقم الضريبي
              <span style="color: #ff3333; margin: auto 20px"> * </span>
            </div>

            <input
              type="file"
              onchange="viewImg(event ,'#coverImg2')"
              class="d-none w-100"
              id="coverImgcont2"
              name="commercial_image"
            />
            <div
              class="row transition img-input align-items-center border w-100 p-2 round5"
            >
              <div class="col img-input-title">
                الرجاء ارفاق صورة الرقم الضريبي
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
            القيمة المضافة
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
            <select name="" id="" class="form-control">
              <option value="" selected>اختر نسبة القيمة المضافة</option>
            </select>
        </div>

          <div class="form-group">
          <label class="bold font14 d-block" for="coverImgcont2">
            <div class="mb-2">
              صورة الرقم الضريبي
              <span style="color: #ff3333; margin: auto 20px"> * </span>
            </div>

            <input
              type="file"
              onchange="viewImg(event ,'#coverImg2')"
              class="d-none w-100"
              id="coverImgcont2"
              name="commercial_image"
            />
            <div
              class="row transition img-input align-items-center border w-100 p-2 round5"
            >
              <div class="col img-input-title">
                الرجاء ارفاق صورة الرقم الضريبي
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
          <h3>العنوان :</h3>
          <input type="text" name="address" id="address" class="form-control" />
          <br />
          <div id="map" style="width: 100%; height: 250px"></div>
          <input type="hidden" name="lat" id="lat" value="30" />
          <input type="hidden" name="long" id="lng" value="30" />
        </div>
      </form>
    </div>




          <button class="button1 w-25 mx-auto d-flex justify-content-center mt-3 material-button">تأكيد</button>

  </div>
</template>

<script>
import axios from 'axios';
import MultiSelect from 'primevue/multiselect';

export default {
  name: "VendorDashboardCompleteRegister",

  data() {
    return {
      countries : [],
      categories: [],
      selectedCategories: null,
      satCheck: null,
      isSatCheck: false,
      isThuCheck: false,
      thuCheck: null,
      monCheck: null,
      iMonCheck: false,
      sunCheck: null,
      isSunCheck: false,
      isFriCheck: false,
      fridCheck: null,
      isTueCheck: false,
      tueCheck: null,
      isWedCheck: false,
      wedCheck : null
    };
  },
  watch: {
    satCheck() {
      if(this.satCheck  == true) this.isSatCheck = true ;
      else this.isSatCheck = false ;
    },
    sunCheck() {
      if(this.sunCheck  == true) this.isSunCheck = true ;
      else this.isSunCheck = false ;
    },
    monCheck() {
      if(this.monCheck  == true) this.iMonCheck = true ;
      else this.iMonCheck = false ;
    },
    thuCheck() {
      if(this.thuCheck  == true) this.isThuCheck = true ;
      else this.isThuCheck = false ;
    },
    wedCheck() {
      if(this.wedCheck  == true) this.isWedCheck = true ;
      else this.isWedCheck = false ;
    },
    tueCheck() {
      if(this.tueCheck  == true) this.isTueCheck = true ;
      else this.isTueCheck = false ;
    },
    fridCheck() {
      if(this.fridCheck  == true) this.isFriCheck = true ;
      else this.isFriCheck = false ;
    },
  },
  mounted() {
    this.getCountries();
    this.getcategories();
  },

  methods: {
    async getCountries() {
      await axios.get('countries')
        .then((res) => {
        this.countries = res.data.data
      } )
    },
    async getcategories() {
      await axios.get('categories')
        .then((res) => {
        this.categories = res.data.data
      } )
    },
  },
  components: {
    MultiSelect
  }
};
</script>

<style lang="scss" >
.p-multiselect{
      display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.p-multiselect-trigger{
      position: absolute;
    left: 0px;
    top: 43px;
}
</style>
