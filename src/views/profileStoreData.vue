<template>


  <!-- start page content -->

  <div class="page-content">


    <div class=" m-auto round10 p-3 form-cont">
      <form ref="storeData" @submit.prevent="register" class="container">
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
            الوصف باللغة العربية
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <textarea
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="الوصف باللغة العربية"
            name="description_ar"
          />
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            الوصف باللغة الانجليزية
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <textarea
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="الوصف باللغة الانجليزية"
            name="description_en"
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
            name="commercial_name"
          />
        </div>
<div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            تاريخ الانتهاء
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <!-- <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            style="direction:rtl"
            aria-describedby="emailHelp"
            placeholder="commercial_expired "
            name="commercial_id"
          /> -->
          <Calendar v-model="commercial_expired" class="form-control" />

        </div>

        <div class="form-group">
          <label class="bold font14 d-block" for="coverImgcont3">
            <div class="mb-2">
              صورة السجل التجاري
              <span style="color: #ff3333; margin: auto 20px"> * </span>
            </div>

            <input
              type="file"
              onchange="viewImg(event ,'#coverImg2')"
              class="d-none w-100"
              id="coverImgcont3"
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
            name="tax_number"
          />
        </div>

         <div class="form-group">
          <label class="bold font14 d-block" for="coverImgcont4">
            <div class="mb-2">
              صورة الرقم الضريبي
              <span style="color: #ff3333; margin: auto 20px"> * </span>
            </div>

            <input
              type="file"
              onchange="viewImg(event ,'#coverImg3')"
              class="d-none w-100"
              id="coverImgcont4"
              name="tax_image"
            />
            <div
              class="row transition img-input align-items-center border w-100 p-2 round5"
            >
              <div class="col img-input-title">
                الرجاء ارفاق صورة الرقم الضريبي
              </div>
              <div class="col text-align2">
                <img
                  id="coverImg3"
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
          <label class="bold font14" for="exampleInputEmail1">
            المدينة
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
            <select name="city_id" id="" class="form-control" >
              <option value="" selected disabled hidden>اختر  المدينة</option>
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{  city.name  }}
              </option>
            </select>
        </div>

         
        <div class="form-group">
          <h3>العنوان :</h3>
         <GMapAutocomplete
                  placeholder="ابحث عن موقعك"
                  @place_changed="onPlaceChanged"
                  class="form-control"
                  v-model="address"
                >
              </GMapAutocomplete>
          <br />
          <!-- <div id="map" style="width: 100%; height: 250px"></div> -->
          <!-- <input type="hidden" name="lat" id="lat" value="30" />
          <input type="hidden" name="long" id="lng" value="30" /> -->
           <GMapMap
                :center="locations"
                :zoom="11"
                map-type-id="terrain"
                style=" height: 300px"
            >
              
            <GMapMarker
              :position="locations"
              :clickable="true"
              :draggable="true"
                @mouseover="onMarkerDragEnd($event)"
            />
            </GMapMap>

        </div>


          <button class="button1 w-25 mx-auto d-flex justify-content-center mt-3 material-button">

             <span v-if="loading">
              استكمال
             </span> 
             <div v-else class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>

          </button>
      </form>
    </div>




        

  </div>
</template>

<script>
import axios from 'axios';
import MultiSelect from 'primevue/multiselect';
import Calendar from 'primevue/calendar';

import moment from 'moment'

export default {
  name: "VendorDashboardCompleteRegister",

  data() {
    return {
      commercial_expired : '',
      countries : [],
      categories: [],
      selectedCategories: [],
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
      locations:
      {
          lat: 0,
          lng: 0
      },
      address: '',
      loading: true,
      cities : []

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
    this.geolocation();
    this.getCities();
  },

  methods: {
    geolocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locations = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    // get new value after dragged 
    onMarkerDragEnd(event) {
      // get new lat lang value 
      const newLat = event.latLng.lat()
      const newLng = event.latLng.lng()
      this.locations = {
        lat: newLat,
        lng: newLng
      }

      // get format_address 
      const latLng = event.latLng
      const geocoder = new window.google.maps.Geocoder()
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === 'OK') {
          this.address = results[0].formatted_address
        } else {
          console.error('Geocode was not successful for the following reason: ' + status)
        }
      })

    },

    onPlaceChanged(place) {
      if (place.geometry) {
        this.locations = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        this.address = place.formatted_address;
      }
    },
    async getCountries() {
      await axios.get('countries')
        .then((res) => {
          this.countries = res.data.data
        })
    },
    async getCities() {
      await axios.get('cities')
        .then((res) => {
          this.cities = res.data.data
        })
    },
    async getcategories() {
      await axios.get('categories')
        .then((res) => {
          this.categories = res.data.data
        })
    },

    async register() {
      console.log(this.selectedCategories)
      this.loading = false;
      const fd = new FormData(this.$refs.storeData)
      var cats = [];
      if (this.selectedCategories.length > 0) { 
        for (let i = 0; i < this.selectedCategories.length; i++){
          cats.push(this.selectedCategories[i].id)
        }
      }
      fd.append('categories', JSON.stringify(cats))
      fd.append('address', this.address)
      fd.append('lat', this.locations.lat)
      fd.append('long', this.locations.lng)
      fd.append('device_type', 'web')
      fd.append('device_id', 'test')
      fd.append('commercial_expired', moment(this.commercial_expired).format('YYYY-MM-DD'))
      fd.append('added_value', 20)
      await axios.post('store/register-store', fd, {
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
              this.$router.push('/timeWork')
            }, 2000);
          } else {
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
          this.loading = true;
        })
    },
  },
  components: {
    MultiSelect,
    Calendar
  }
}
</script>

<style lang="scss" >
.p-calendar{
  position: relative;
  border: none !important;
  .p-inputtext{
        width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    right: 0;
  }
}
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
