<template>
  <div class="table-cont p-2">
    <div class="row align-items-center flex-column">
      <div class="dash-title col-md p-0 mt-0">
        <h6 class="bold">طلب اعلان</h6>
        <p class="mb-1">يمكنك اضافة اعلان من هنا</p>
      </div>
    </div>

    <section class="white-bg round7 mt-4 mb-4 p-3">
      <h6 class="bold">بيانات طلب اعلان</h6>
      <hr />

      <form @submit.prevent="postAdd" ref="addPost" style="width: 60%">
        <div class="form-group">
          <label class="bold font14" for="name-ar"> مدة الاعلان بالايام </label>
          <div class="password-cont">
            <input
              type="number"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="الرجاء ادخال مدة الاعلان بالايام"
              name="period"
            />
            <span class="with-days">بالايم</span>
          </div>
        </div>

        <h5>
          <span class="text-muted">السعر</span>
          <span class="bold color1">{{  price  }} ر.س</span>
        </h5>

                  <label class="bold font14 d-block mt-5" for="name-ar"> صورة الاعلان </label>

        <!-- image preview -->
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
                    name="files[]"
                    id="file1"
                  />
                </label>

        <div class="d-flex align-items-baseline justify-content-center">
          <button class="button1 mt-3 material-button px-5" :disabled="disabled">رفع الاعلان</button>
        </div>
      </form>
    </section>
  </div>
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  name: "VendorDashboardAddAdvertisement",

  data() {
    return {
      price: '',
      disabled : false
    };
  },

  mounted() {
    this.getAddPrice();
  },
  components: {
    Toast
  },
  methods: {
    async getAddPrice() {
      const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
      await axios.get('store/get-ad-price', { headers })
        .then((res) => {
          this.price = res.data.data.ad_price;
      } )
    },
    async postAdd() {
      this.disabled = true;
        const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
          lang : 'ar'
        };

      const fd = new FormData(this.$refs.addPost)
      fd.append('payment_type', 2)
      await axios.post('store/post-ad-request', fd, { headers })
      .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.$router.push('/')
            }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
    }
  },
};
</script>

<style lang="scss" scoped></style>
