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

    <div class="m-auto round10 p-3 form-cont">
      <form ref="managerData" class="container"  @submit.prevent="register">
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
                  name="image"
                  id="file1"
                  required
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
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="اسم مدير النظام"
            name="manager_name"
            required
          />
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            رقم الهوية
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="tel"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="رقم الهوية"
            name="identity_number"
            required
            v-model="identity_number"
          />
          <span class="text-danger" v-if="isIDentityValid">يجب ان يتكون رقم الهوية من 10 ارقام</span>

        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            رقم الهاتف
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <div class="row">
            <div class="col-4 col-md-2 p-1 pr-0">
              <select class="form-control" name="country_key" v-model="country_key">
                <option v-for="count in countries" :value="count.code" :key="count.id"> {{ count.code }} </option>
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
              <span class="text-danger" v-if="!isPhoneValid&&isPhoneEntered">يجب ان يكون رقم الهاتف اكبر من او يساي 9 ارقام</span>
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
            name="email"
            required
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
              name="password"
              v-model="password"
              required
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
              v-model="password_confirmation"
              required
            />
            <i class="fa fa-eye color-gray" id="signInShowPassword2"></i>
          </div>
        </div>

        <button class="button1 w-100 mt-3 material-button" :disabled="!isPassowrdMatch">
          <!-- <router-link to="/completeRegister"> -->
             <span v-if="loading">
              استكمال
             </span> 
             <div v-else class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <!-- </router-link> -->
        </button>

        <div class="text-center p-3">
          <p>لديك حساب بالفعل ؟ <router-link to="/login" >اضغط هنا</router-link></p>
        </div>
      </form>
    </div>
  </div>

  <!-- end page content -->
  <Toast />


  <Dialog v-model:visible="visible" modal  :style="{ width: '25rem' }">
     <form @submit.prevent="login" class="container px-5 py-5" ref="loginForm">
            <h6 class="bold text-center">برجاء ادخال الرقم المرسل الى هاتفك</h6>
            <!-- <p class="text-center">برجاء ادخال الرقم المرسل الى هاتفك</p> -->

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
  </Dialog>

</template>

<script>
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';

import axios from 'axios';
export default {
  name: "VendorDashboardRegisterView",

  data() {
    return {
      password: '',
      password_confirmation : '',
      countries: [],
      phone: '',
      isPhoneEntered: false,
      identity_number: '',
      isIDentityValid: false,
      loading : true ,
      visible: false,
      code: '',
      disabled: false,
      country_key : ''
    };
  },
  watch: {
    phone() {
      this.isPhoneEntered = true
    },
    identity_number() {
      this.isIDentityValid = true
      if (this.identity_number.length == 10) {
        this.isIDentityValid = false;
      } else {
        this.isIDentityValid = true
      }
    }
  }
  ,
  computed:{
      isPassowrdMatch(){
        return  this.password === this.password_confirmation&& this.password !=='' && this.password.length >= 6&&this.phone.length>=9
    },
    isPhoneValid() {
        return this.phone.length >= 9
      }
  },
  mounted() {
    this.getCountries();
  },
  components: {
    Toast,
    Dialog
  },
  methods: {
    // get countries 
    async getCountries() {
      await axios.get('countries')
        .then((res) => {
        this.countries = res.data.data
      } )
    },
    storeManagerData() {
      const formData = {
          manager_name: this.$refs.managerData.manager_name.value,
          email: this.$refs.managerData.email.value,
          image: this.$refs.managerData.image.value,
          country_key: this.$refs.managerData.country_key.value,
          phone: this.$refs.managerData.phone.value,
          identity_number: this.$refs.managerData.identity_number.value,
          password: this.$refs.managerData.password.value,
        };

        // Convert the data to a JSON string
        const jsonData = JSON.stringify(formData);

        // Store the JSON string in localStorage
      localStorage.setItem('managerData', jsonData);
            setTimeout(() => {
              this.$router.push('/completeRegister');
            }, 200);
    },
    async register() {
      this.loading = false;
      const fd = new FormData(this.$refs.managerData)
       fd.append('device_type', 'web')
      fd.append('device_id', 'test')
      await axios.post('store/register', fd)
     
        .then((res) => {
          if (res.data.key === 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            localStorage.setItem('user', JSON.stringify(res.data.data))
            localStorage.setItem('token', res.data.data.token)
          setTimeout(() => {
            this.visible = true;
          }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.loading = true;
      } )
    },
    async login() {
      this.disabled = true;
        const fd = new FormData(this.$refs.loginForm)
        fd.append('phone', JSON.parse(localStorage.getItem('user')).phone.phone)
      fd.append('country_key', this.country_key)
      fd.append('code', this.code)
      fd.append('device_type', 'web')
      fd.append('device_id', 'test')
        

      await axios.post('store/activate', fd)
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.$router.push('/completeRegister')
              this.visible = false;
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
};
</script>

<style lang="scss">
select.form-control{
      background-blend-mode: exclusion;
}
</style>
