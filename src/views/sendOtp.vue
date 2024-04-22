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
            <p class="text-center">برجاء ادخال الرقم المرسل الى هاتفك</p>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                ادخل الرقم
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
               <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="ادخل الرقم"
                    name="code"
                    v-model="code"
                />
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
        country_key: '',
      code : ""
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
        fd.append('phone', localStorage.getItem('phone'))
        fd.append('country_key', localStorage.getItem('country_key'))

      await axios.post('store/forget-password-check-code', fd)
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.$router.push('/resetPassword')
            }, 2000);
            localStorage.setItem('code', this.code)
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
