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


    <div class="m-auto round10 p-3 pl-4 pr-4 form-cont">
      <div class="">
        <h6 class="bold border-bottom pt-3 pb-3 mb-3">بيانات الحساب البنكي</h6>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            اسم البنك
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="اسم البنك "
          />
        </div>

         <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            اسم المستفيد
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="اسم المستفيد "
          />
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            رقم الحساب
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="رقم الحساب "
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
import axios from 'axios';
// import MultiSelect from 'primevue/multiselect';

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
    // MultiSelect
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
