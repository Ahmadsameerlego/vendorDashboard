<template>
  <div>
    <div class="table-cont p-2">
      <div class="row align-items-center flex-column">
        <div class="dash-title col-md p-0 mt-0">
          <h6 class="bold">الخصومات</h6>
          <p class="mb-1">يمكنك تحديد تفاصيل الخصومات من هنا</p>
        </div>

        <div
          class="form-group col-md p-2 m-2"
          style="background-color: #fff; border-radius: 5px"
        >
          <form @submit.prevent="discount" ref="discountForm">
            <div class="row">
              <div class="col-md-6 mb-3">
                <div class="form-group">
                  <label for="" class="bold font14">نسبة الخصم</label>
                  <input
                    type="number"
                    name="discount_percentage"
                    v-model="discount_percentage"
                    class="form-control"
                    placeholder="يرجى تحديد نسبة الخصم (%)"
                  />
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="form-group">
                  <label for="" class="bold font14">سعر الحد الادنى</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="يرجى تحديد سعر الحد الادنى"
                    name="min_price"
                    v-model="min_price"
                  />
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <div class="form-group">
                  <label for="" class="bold font14">مدة العرض</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="يرجى تحديد مدة العرض (بالأيام)"
                    name="period"
                    v-model="period"
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
      min_price: '',
      discount_percentage : ''
    };
  },

  mounted() {},

  methods: {
    openTableMenu(index) {
      this.showTableActions[index] = !this.showTableActions[index];
    },
     async discount() {
      this.disabled = true;
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
      };
      const fd = new FormData(this.$refs.discountForm)
      await axios.post('store/add-discount', fd, {headers})
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            this.period = '';
            this.min_price = ''
            this.discount_percentage = ''
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
