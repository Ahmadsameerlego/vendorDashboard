<template>
  <div class="table-cont p-2">
    <div class="row align-items-center">
      <div class="dash-title col-md p-0 mt-0">
        <h6 class="bold">بيانات التواصل</h6>
        <p class="mb-1">
          يمكنك التواصل مع الإدارة وذلك من خلال تعبئة البيانات التالية
        </p>
      </div>
    </div>

    <form id="form" ref="contactUsForm" @submit.prevent="contactUs">
      <div class="white-bg round7 mb-3 mt-2 p-3">
        <h6 class="bold border-bottom pt-3 pb-3 mb-4">تواصل معنا</h6>

        <div class="w-md-75">
          <div class="form-group">
            <label class="bold font14" for="exampleInputEmail1">
              عنوان الرسالة
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="الرجاء ادخال عنوان الرسالة"
              name="title"
              v-model="title"
            />
          </div>

          <div class="form-group">
            <label class="bold font14" for="exampleInputEmail1">
              الرسالة
            </label>
            <textarea
              type="text"
              rows="6"
              class="form-control"
              id="exampleInputEmail1"
              placeholder=" الرجاء ادخال رسالتك "
              name="message"
              v-model="message"
            ></textarea>
          </div>
        </div>
      </div>

      <button class="button1 mt-3 material-button" :disabled="disabled">ارسال الرسالة</button>
    </form>
  </div>
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  name: "VendorDashboardContactUs",

  data() {
    return {
      disabled: false,
      title: '',
      message : ''
    };
  },

  mounted() {},

  methods: {
    async contactUs() {
      this.disabled = true;
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
      };
      const fd = new FormData(this.$refs.contactUsForm)
      await axios.post('store/contact-us', fd, {headers})
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            this.title = '';
            this.message = ''
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
    }
  },
  components: {
    Toast
  }
};
</script>

<style lang="scss" scoped></style>
