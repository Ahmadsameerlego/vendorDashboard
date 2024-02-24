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

      <form action="payment-method.html" style="width: 60%">
        <div class="form-group">
          <label class="bold font14" for="name-ar"> مدة الاعلان بالايام </label>
          <div class="password-cont">
            <input
              type="number"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="الرجاء ادخال مدة الاعلان بالايام"
            />
            <span class="with-days">بالايم</span>
          </div>
        </div>

        <h5>
          <span class="text-muted">السعر</span>
          <span class="bold color1">500 ر.س</span>
        </h5>

        <!-- image preview -->
        <div class="d-flex flex-wrap parent-img">
          <div class="drop-box mr-2 ml-2">
            <div class="text-center m-2 box-up">
              <div class="images-upload-block">
                <label class="upload-img">
                  <span class="d-flex flex-column">
                    <i class="fas fa-cloud-upload-alt color1"></i>
                    <h6 class="">ارفاق صورة الاعلان</h6>
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    class="form-control image-uploader"
                    name="imageArr[]"
                    required=""
                    multiple
                  />
                </label>
              </div>
            </div>
          </div>
          <div
            class="d-flex align-items-center justify-content-center position-relative"
          >
            <button class="click_event m-2">
              <span class="plus"><i class="fa fa-plus-square"></i></span>
            </button>
          </div>
        </div>

        <div class="d-flex align-items-baseline">
          <button class="button1 mt-3 material-button">اختر طريقة الدفع</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "VendorDashboardAddAdvertisement",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
