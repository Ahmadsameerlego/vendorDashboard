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
        <div class=" active">
          <span class="select-register-step">2</span>
          <span class="font16 bold"> بيانات المتجر </span>
        </div>
        <div class="line-between"></div>
        <div class="current active">
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
        <h6 class="bold border-bottom pt-3 pb-3 mb-3">اوقات العمل</h6>

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
                        <input type="checkbox" v-model="satCheck" />
                        <span class="slider round"></span>
                      </label>

                      <div class="d-flex" v-if="isSatCheck" style="transform: translateY(-30px)">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            @select="setDay"
                            @change="setDay"
                            v-model="satFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="satTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاحد</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="sunCheck"  />
                        <span class="slider round"></span>
                      </label>
                      <div v-if="isSunCheck" class="d-flex" style="transform: translateY(-30px)"  >
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="sunFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="sunTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاثنين</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="monCheck"  />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="iMonCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="monFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="monTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الثلاثاء</h6>
                      <label class="switch">
                        <input type="checkbox"  v-model="thuCheck" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="isThuCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="tueFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="tueTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاربعاء</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="wedCheck"/>
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="isWedCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="wedFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="wedTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الخميس</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="tueCheck" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="isTueCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="thFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="thTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الجمعة</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="fridCheck" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="isFriCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="friFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="friTo"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <button class="button1 mt-3 material-button" @click.prevent="register">
               <span v-if="loading">
              استكمال
             </span> 
             <div v-else class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
              </button>
            </form>
          </section>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
// import MultiSelect from 'primevue/multiselect';
// import moment from 'moment'

export default {
  name: "VendorDashboardCompleteRegister",

  data() {
    return {
      loading : true ,
      countries : [],
      categories: [],
      satFrom: null,
      satTo : null ,
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
      wedCheck: null,
      sunFrom: null,
      sunTo: null,
      friFrom: null,
      friTo: null,
      thTo: null,
      thFrom: null,
      wedTo: null,
      wedFrom: null,
      tueTo: null,
      tueFrom: null,
      monFrom: null,
      monTo: null,
    };
  },
  watch: {
    satCheck() {
      if (this.satCheck == true) {
        this.isSatCheck = true;    
      } 
      else {
        this.isSatCheck = false;
      }
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
  updated() {
      console.log(this.times)
  },
  computed: {
    times() {
      return [
        
        this.satFrom !== null && this.satTo != null ? { day: "saturday", from: this.satFrom, to: this.satTo } : undefined,       
        this.sunFrom !== null && this.sunTo != null ?  {day: "sunday" ,from: this.sunFrom,to : this.sunTo} : undefined ,        
        this.monFrom !== null && this.monTo != null ?  {day: "Monday" ,from: this.monFrom,to : this.monTo} : undefined ,        
        this.tueFrom !== null && this.tueTo != null ?  {day: "Tuesday" ,from: this.tueFrom,to : this.tueTo} : undefined ,        
        this.wedFrom !== null && this.wedTo != null ?  {day: "Wednesday" ,from: this.wedFrom,to : this.wedTo} : undefined ,        
        this.thFrom !== null && this.thTo != null ?  {day: "Thursday" ,from: this.thFrom,to : this.thTo} : undefined ,        
        this.friFrom !== null && this.friTo != null ?  {day: "Friday" ,from: this.friFrom,to : this.friTo} : undefined ,        
       
      ]
    }
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
    async register() {
      this.loading = false;
      const fd = new FormData()
      const filteredTimes = this.times.filter(item => item !== undefined);

      // Append filteredTimes to fd
      fd.append('times', JSON.stringify(filteredTimes));

       fd.append('device_type', 'web')
      fd.append('device_id', 'test')
      await axios.post('store/register-times', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          lang : 'ar'
        }
      })
     
        .then((res) => {
          if (res.data.key === 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            localStorage.setItem('user', JSON.stringify(res.data.data))
            localStorage.setItem('token', res.data.data.token)
          setTimeout(() => {
            this.$router.push('/bankData')
          }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.loading = true;
      } )
    }
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
