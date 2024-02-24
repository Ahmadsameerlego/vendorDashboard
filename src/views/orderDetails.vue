<template>
  <div class="table-cont p-2">
    <div class="row align-items-center">
      <div class="dash-title col-md p-0 mt-0">
        <h6 class="bold">تفاصيل الطلب</h6>
        <p class="mb-1">
          الطلبات / الطلبات الجديدة /
          <span class="color1 bold">تفاصيل الطلب</span>
        </p>
      </div>
    </div>

    <!-- use class active , current -->

    <div class="m-auto round10 p-3 pl-4 pr-4 form-cont">
      <div class="container register-header m-auto">
        <div class="current">
          <span class="select-register-step step">1</span>
          <span class="select-register-step check"
            ><i class="fa fa-check"></i
          ></span>
          <span class="font12 bold"> قيد الموافقة </span>
        </div>
        <div class="line-between"></div>
        <div class="">
          <span class="select-register-step step">2</span>
          <span class="select-register-step check"
            ><i class="fa fa-check"></i
          ></span>
          <span class="font12 bold"> تم تجهيز الطلب </span>
        </div>

        <div class="line-between"></div>
        <div class="">
          <span class="select-register-step step">2</span>
          <span class="select-register-step check"
            ><i class="fa fa-check"></i
          ></span>
          <span class="font12 bold"> في انتظار التسليم </span>
        </div>

        <div class="line-between"></div>
        <div class="">
          <span class="select-register-step step">2</span>
          <span class="select-register-step check"
            ><i class="fa fa-check"></i
          ></span>
          <span class="font12 bold"> تم التسليم </span>
        </div>
      </div>
    </div>

    <!-- بيانات الاسمنت -->
    <div class="white-bg round7 mb-3 mt-2">
      <h6 class="bold border-bottom p-3 mb-4">بيانات العميل</h6>

      <!-- single -->
      <div class="row">
        <div class="col-md-6">
          <div
            class="single-info-order d-flex justify-content-between align-items-center"
          >
            <!-- order info -->
            <div>
              <h6 class="bold">أحمد سمير</h6>
              <h6 class="color-gray">قهوة اسبيرسو</h6>
            </div>

            <!-- quantity -->
            <div class="order-quantity">
              <span> الكمية : <span class="color1">2</span> </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>

    <!-- بيانات الطلب -->
    <div class="white-bg round7 mb-3 mt-2">
      <h6 class="bold border-bottom p-3 mb-4">بيانات الطلب</h6>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">الاختيار المطلوب</div>
        <div class="col">سكر زيادة</div>
      </div>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">القسم</div>
        <div class="col">قهوة</div>
      </div>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">رقم الطلب</div>
        <div class="col">#44444</div>
      </div>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">تاريخ الطلب</div>
        <div class="col">12/3/2022 7 صباحا</div>
      </div>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">تاريخ / وقت الاستلام</div>
        <div class="col">12/3/2022 7 صباحا</div>
      </div>

      <div class="p-3 order-info row text-white bg-dark">
        <div class="col-3 text-white">المجموع الكلى</div>
        <div class="col">50.00 رس</div>
      </div>
    </div>

    <div class="white-bg round7 mt-2 pt-3 pb-3">
      <h6 class="bold border-bottom p-3 mb-4">ملاحظات</h6>

      <p class="pl-3 pr-3">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا
        النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
        مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
        الأخرى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>

  <div class="p-2">
    <div class="col-md p-0">
      <div class="white-bg round7">
        <h6 class="bold border-bottom p-3">معلومات العميل</h6>
        <div class="dash-card-content pl-2 pr-2">
          <div
            class="row m-0 pt-1 pb-1 align-items-center justify-content-center"
          >
            <div class="col-md">
              <div class="row align-items-center">
                <div class="col-md p-0 p-md-1 text-center">
                  <img
                    src="@/assets/imgs/users/user1.png"
                    style="width: 80px; border-radius: 50%; height: 80px"
                    class="m-0 round7 m-md-1"
                    alt=""
                  />
                </div>
                <div class="col-10 col-md-7 col-lg-10 p-1">
                  <h6 class="bold font14">احمد سمير</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button class="button5 m-2 material-button">
    <a href="order-details2.html" style="color: inherit">قبول الطلب</a>
  </button>
  <button
    class="button4 m-2 material-button"
    type="button"
    data-toggle="modal"
    data-target="#exampleModalLong"
  >
    رفض الطلب
  </button>
</template>

<script>
export default {
  name: "VendorDashboardOrderDetails",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
