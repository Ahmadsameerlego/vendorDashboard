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
          <form action="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <div class="form-group">
                  <label for="" class="bold font14">نسبة الخصم</label>
                  <input
                    type="number"
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
                  />
                </div>
              </div>
            </div>
            <div class="">
              <button class="button1 mt-3 material-button px-5">تأكيد</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VendorDashboardFinanceView",

  data() {
    return {
      showTableActions: [],
    };
  },

  mounted() {},

  methods: {
    openTableMenu(index) {
      this.showTableActions[index] = !this.showTableActions[index];
    },
  },
};
</script>

<style lang="scss" scoped></style>
