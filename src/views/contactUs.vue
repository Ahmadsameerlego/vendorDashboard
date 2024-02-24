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

    <form id="form">
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
            ></textarea>
          </div>
        </div>
      </div>

      <button class="button1 mt-3 material-button">ارسال الرسالة</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "VendorDashboardContactUs",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
