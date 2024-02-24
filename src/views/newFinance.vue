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
        <div class="col">100 ريال</div>
      </div>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">عمولة التطبيق</div>
        <div class="col">10 ريال</div>
      </div>

      <div class="p-3 order-info row text-white bg-dark">
        <div class="col-3 text-white">اجمالي ارباحك</div>
        <div class="col">90 ريال</div>
      </div>
    </div>

    <button class="button5 m-2 material-button px-5">طلب تسوية</button>
  </div>
</template>

<script>
export default {
  name: "VendorDashboardNewFinance",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
