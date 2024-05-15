<template>
  <div>
    <div class="dash-title col-md p-0 mt-0">
      <h6 class="bold">طلب تسوية جديدة</h6>

      <p class="mb-1 text-danger">
        يجب ان يكون مبلغ التسوية اكثر من 500 ريال , او اسبوعيا
      </p>
    </div>

    <div class="white-bg round7 mb-3 mt-2">
      <h6 class="bold border-bottom p-3">اجمالي معاملاتك</h6>
      <div class="p-3 order-info row">
        <div class="col-3 color-gray">اجمالي مبيعاتك</div>
        <div class="col">{{  total_sales  }} ريال</div>
      </div>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">عمولة التطبيق</div>
        <div class="col">{{  total_app_percentage  }} ريال</div>
      </div>

      <div class="p-3 order-info row text-white bg-dark">
        <div class="col-3 text-white">اجمالي ارباحك</div>
        <div class="col">{{ total_profits }} ريال</div>
      </div>
    </div>

    <button class="button5 m-2 material-button px-5" @click.prevent="settlement" :disabled="disabled">طلب تسوية</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "VendorDashboardNewFinance",

  data() {
    return {
      total_sales: '',
      total_app_percentage: '',
      total_profits: '',
      disabled : false
    };
  },

  mounted() {
    this.getAddPrice();
  },

  methods: {
      async getAddPrice() {
      const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
      await axios.get('store/get-total-finance', { headers })
        .then((res) => {
          this.total_sales = res.data.data.total_sales;
          this.total_app_percentage = res.data.data.total_app_percentage;
          this.total_profits = res.data.data.total_profits;
      } )
    },
    async settlement() {
        const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
          lang : 'ar'
        };
      const fd = new FormData()
      await axios.post('store/send-settlement', fd, { headers })
      .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.$router.push('/finance')
            }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
      } )
    }
  },
};
</script>

<style lang="scss" scoped></style>
