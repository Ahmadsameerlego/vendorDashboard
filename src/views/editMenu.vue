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
              <button class="button1 mt-3 material-button px-5" :disabled="disabled">تعديل</button>
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
        name_ar: '',
      menue : null
    };
  },

    mounted() {
        this.getMenue();
  },

  methods: {

     async discount() {
      this.disabled = true;
       const token = localStorage.getItem('token');  
        const headers = {
            Authorization: `Bearer ${token}`,
          lang : 'ar'
      };
          const fd = new FormData(this.$refs.discountForm)
      fd.append('menu_id', this.$route.params.id)
      await axios.post('store/update-menu', fd, {headers})
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
          
            this.name_en = ''
            this.name_ar = ''

            setTimeout(() => {
              this.$router.push('/menus')
            }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
      },

      async getMenue() {
         const token = localStorage.getItem('token');  
        const headers = {
            Authorization: `Bearer ${token}`,
          lang : 'ar'
          };

          await axios.get(`store/single-menu?menu_id=${this.$route.params.id}`, { headers })
              .then((res) => {
                  this.menue = res.data.data;
                  this.name_ar = res.data.data.name_ar;
                  this.name_en = res.data.data.name_en;
          } )
      }
  },
  components: {
    Toast
  }
};
</script>

<style lang="scss" scoped></style>
