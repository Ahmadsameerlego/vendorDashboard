<template>
  <div class="table-cont p-2">
    <div class="row align-items-center">
      <div class="dash-title col-md p-0 mt-0">
        <h6 class="bold">إضافة منتج جديد</h6>
        <p class="mb-1">
          فروع المطعم / <span class="color2">إضافة منتج جديد</span>
        </p>
      </div>
    </div>

    <form id="form" action="new-branch1.html">
      <div class="white-bg round7 mb-3 mt-2 p-3">
        <h6 class="bold border-bottom pt-3 pb-3 mb-4">بيانات المنتج الجديد</h6>

        <div class="w-md-75">
          <div class="form-group">
            <div class="row align-items-center justify-content-start">
              <div class=" ">
                <label for="file1">
                  <div class="input-img-cont">
                    <img
                      src="@/assets/imgs/icons/upload-img.png"
                      id="view1"
                      class="input-img"
                      alt=""
                    />
                    <img
                      src="@/assets/imgs/icons/camera.png"
                      class="input-img-camera"
                      alt=""
                    />
                  </div>
                  <input
                    onchange="viewImg(event ,'#view1')"
                    class="d-none"
                    type="file"
                    name=""
                    id="file1"
                  />
                </label>
              </div>
              <div class="col">
                <h6 class="bold font14">صورة المنتج</h6>
                <!-- <p class="font12 color-gray">يرجي رفع صورة مقاس 200 * 200</p> -->
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="bold font14" for="exampleInputEmail1">
              الاسم باللغة العربية
              <span style="color: #ff3333; margin: auto 20px"> * </span></label
            >
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="الاسم باللغة العربية"
            />
          </div>

          <div class="form-group">
            <label class="bold font14" for="exampleInputEmail1">
              الاسم باللغة الانجليزية
              <span style="color: #ff3333; margin: auto 20px"> * </span></label
            >
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="الاسم باللغة الانجليزية "
            />
          </div>

          <div class="row justify-content-between">
            <div class="form-group p-0 col-md ml-lang2">
              <label class="bold font14" for="exampleInputEmail1">
                سعر المنتج
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="الرجاء ادخال سعر المنتج"
              />
            </div>

            <div class="form-group p-0 col-md mr-lang2">
              <label class="bold font14" for="exampleInputEmail1">
                سعر المنتج بعد الخصم
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="الرجاء ادخال سعر المنتج بعد الخصم "
              />
            </div>
          </div>

          <div class="form-group">
            <label class="bold font14" for="exampleInputEmail1">
              تحديد القسم
              <span style="color: #ff3333; margin: auto 20px"> * </span></label
            >
            <select class="form-control">
              <option>بسيط</option>
              <option>متعدد السمات</option>
            </select>
          </div>

          <div class="form-group">
            <label class="bold font14" for="exampleInputEmail1">
              وصف المنتج باللغة العربية
              <span style="color: #ff3333; margin: auto 20px"> * </span></label
            >
            <textarea
              type="text"
              rows="6"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="الرجاء كتابة وصف المنتج باللغة العربية "
            ></textarea>
          </div>

          <div class="form-group">
            <label class="bold font14" for="exampleInputEmail1">
              وصف المنتج باللغة الانجليزية
              <span style="color: #ff3333; margin: auto 20px"> * </span></label
            >
            <textarea
              type="text"
              rows="6"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="الرجاء كتابة وصف المنتج باللغة الانجليزية "
            ></textarea>
          </div>
        </div>

        <h6 class="bold border-bottom">الاضافات</h6>
        <div
          class="feature w-md-75"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="d-flex align-items-center">
            <div class="mb-2 w-50">
              <label for=""> الاضافة ({{ index + 1 }}) </label>
              <input
                type="text"
                placeholder="الرجاء ادخال اسم الاضافة"
                class="form-control"
              />
            </div>
            <div class="mb-2 w-50 mx-3">
              <label for=""> السعر {{ index + 1 }} </label>
              <input
                type="number"
                placeholder="الرجاء ادخال سعر الاضافة"
                class="form-control"
              />
            </div>

            <div class="mt-4" @click="deleteFeature(index)">
              <i class="far fa-trash-alt color-red"></i>
            </div>
          </div>
        </div>
        <button class="button1 mt-2" @click="addFeature" type="button">
          اضافة جديدة
        </button>
      </div>

      <button class="button1 mt-3 material-button" type="button">
        تأكيد الاضافة
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "VendorDashboardAddProduct",

  data() {
    return {
      features: [],
    };
  },

  mounted() {},

  methods: {
    addFeature() {
      this.features.push({});
    },
    deleteFeature(index) {
      this.features.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
