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

          <form @submit.prevent="login" class="container loginForm" ref="loginForm">
            <h6 class="bold text-center">هل نسيت كلمة المرور؟</h6>
            <p class="text-center">برجاء ادخال بيانات حسابك حتى تتمكن من استرجاعه</p>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                رقم الهاتف
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <div class="row">
                <div class="col-4 col-md-2 p-1 pr-0">
                  <select class="form-control" name="country_key" v-model="country_key">
                    <option
                      v-for="count in countries"
                      :value="count.code"
                      :key="count.id"
                    >
                      {{ count.code }}
                    </option>
                  </select>
                </div>
                <div class="col pt-1 pb-1 pl-0 pr-1">
                  <input
                    type="tel"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="رقم الهاتف"
                    name="phone"
                    v-model="phone"
                    required
                  />
                 
                </div>
              </div>
            </div>

           

           

            <button class="button1 w-100 mt-3 material-button" :disabled="disabled">
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
import ProgressSpinner from 'primevue/progressspinner';

import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  name: "VendorDashboardLoginView",

  data() {
    return {
      countries: [],
        disabled: false,
        phone: '',
      country_key : ''
    };
  },

  mounted() {
    this.getCountries()
    
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => localStorage.setItem('device_id', data.ip))
    .catch(error => console.error(error));
  },

  methods: {
    // get countries 
    async getCountries() {
      await axios.get('countries')
        .then((res) => {
        this.countries = res.data.data
      } )
    },

    // login 
    async login() {
      this.disabled = true;
      const fd = new FormData(this.$refs.loginForm)

      await axios.post('store/forget-password', fd)
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.$router.push('/sendOtp')
            }, 2000);
            localStorage.setItem('phone', this.phone)
            localStorage.setItem('country_key', this.country_key)
          } else {
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
                        this.disabled = false ;

        }
        )

    }
  },
  components: {
    Toast,
    ProgressSpinner
  }
};
</script>

<style lang="scss" >
.p-progress-spinner {
    position: relative;
    margin: 0 auto;
    width: 45px;
    height: 18px;
    display: inline-block;
    color: #fff;
}


</style>
