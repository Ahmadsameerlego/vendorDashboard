<template>
  <div>
    <div class="table-cont p-2">
      <div class="row align-items-center flex-column">
        <div class="dash-title col-md p-0 mt-0">
          <h6 class="bold">الاقسام</h6>
          <p class="mb-1">يمكنك اضافة اقسام المنتجات من هنا</p>
        </div>

        <div
          class="form-group col-md p-2 m-2"
          style="background-color: #fff; border-radius: 5px"
        >
          <form @submit.prevent="discount" ref="discountForm">
            <div class="row">
              <div class="col-md-6 mb-3">
                <div class="form-group">
                  <label for="" class="bold font14">اسم القسم بالعربية</label>
                  <input
                    type="text"
                    name="name_ar"
                    v-model="name_ar"
                    class="form-control"
                    placeholder="يرجى تحديد اسم القسم بالعربية "
                  />
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="form-group">
                  <label for="" class="bold font14">اسم القسم بالانجليزية</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="يرجى تحديد اسم القسم بالانجليزية"
                    name="name_en"
                    v-model="name_en"
                  />
                </div>
              </div>

              
            </div>
            <div class="">
              <button class="button1 mt-3 material-button px-5" :disabled="disabled">تأكيد</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  name: "VendorDashboardFinanceView",

  data() {
    return {
      showTableActions: [],
      disabled: false,
      period: '',
      name_en: '',
      name_ar : ''
    };
  },

  mounted() {},

  methods: {

     async discount() {
      this.disabled = true;
       const token = localStorage.getItem('token');  
        const headers = {
            Authorization: `Bearer ${token}`,
          lang : 'ar'
      };
      const fd = new FormData(this.$refs.discountForm)
      await axios.post('store/add-menu', fd, {headers})
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
          
            this.name_en = ''
            this.name_ar = ''
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
