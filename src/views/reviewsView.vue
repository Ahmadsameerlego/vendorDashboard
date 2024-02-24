<template>
  <div class="dash-title p-2">
    <h6 class="bold">التقييمات</h6>
    <p class="mb-1">يتم عرض التعليقات والتقييمات الخاصة بك</p>
  </div>

  <div class="m-2 p-0">
    <div class="white-bg round7">
      <div class="dash-card-content text-center p-4">
        <h1 class="font60">4.8</h1>

        <div class="stars-cont d-inline-block direction2">
          <i class="fa fa-star font20 gold"></i>
          <i class="fa fa-star font20 gold"></i>
          <i class="fa fa-star font20 gold"></i>
          <i class="fa fa-star font20 gold"></i>
          <i class="fa fa-star font20 gray"></i>
        </div>

        <p class="font18 mt-2">(333) تقييما</p>
      </div>
    </div>
  </div>

  <!-- openions -->
  <div class="m-2 p-0">
    <div class="white-bg round7">
      <h6 class="bold border-bottom p-3">اراء العملاء</h6>
      <div class="dash-card-content pl-2 pr-2">
        <div
          class="row m-0 pt-1 pb-1 align-items-center justify-content-center"
        >
          <div class="col-md p-0 p-md-1 text-center">
            <img
              src="@/assets/imgs/users/user1.png"
              style="max-width: 80px"
              class="m-0 m-md-1 round7"
              alt=""
            />
          </div>
          <div class="col-11 col-md-10 p-1">
            <h6 class="bold font14">أبو جود</h6>
            <div class="">
              <div class="d-flex justify-content-start align-items-center">
                <i class="far fa-clock" style="color: gray"></i>
                <span class="text-muted">ساعة</span>
              </div>
              <div class="stars-cont d-inline-block direction2">
                <i class="fa fa-star font8 gold"></i>
                <i class="fa fa-star font8 gold"></i>
                <i class="fa fa-star font8 gold"></i>
                <i class="fa fa-star font8 gold"></i>
                <i class="fa fa-star font8 gray"></i>
              </div>
            </div>
            <p class="mb-1">الاكل الخاص بالمطعم جميل , وأسعار مناسبة</p>
          </div>
        </div>

        <hr />

        <div
          class="row m-0 pt-1 pb-1 align-items-center justify-content-center"
        >
          <div class="col-md p-0 p-md-1 text-center">
            <img
              src="@/assets/imgs/users/user1.png"
              style="max-width: 80px"
              class="m-0 m-md-1 round7"
              alt=""
            />
          </div>
          <div class="col-11 col-md-10 p-1">
            <h6 class="bold font14">أبو جود</h6>
            <div class="">
              <div class="d-flex justify-content-start align-items-center">
                <i class="far fa-clock" style="color: gray"></i>
                <span class="text-muted">ساعة</span>
              </div>
              <div class="stars-cont d-inline-block direction2">
                <i class="fa fa-star font8 gold"></i>
                <i class="fa fa-star font8 gold"></i>
                <i class="fa fa-star font8 gold"></i>
                <i class="fa fa-star font8 gold"></i>
                <i class="fa fa-star font8 gray"></i>
              </div>
            </div>
            <p class="mb-1">الاكل الخاص بالمطعم جميل , وأسعار مناسبة</p>
          </div>
        </div>

        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VendorDashboardReviewsView",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
