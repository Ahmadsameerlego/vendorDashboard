<template>
  <div class="table-cont p-2">
    <div class="row align-items-center">
      <div class="dash-title col-md p-0 mt-0">
        <h6 class="bold">تعديل المنتج</h6>
        <p class="mb-1">المنتجات / <span class="color2">تعديل المنتج</span></p>
      </div>
    </div>

    <form id="form" ref="addProductsForm" @submit.prevent="addProduct">
      <div class="white-bg round7 mb-3 mt-2 p-3">
        <div class="border-bottom pb-3 mb-4 d-flex justify-content-between">
          <h6 class="bold pt-3">بيانات المنتج الجديد</h6>

          <div>
            <h6 class="font-weight-bold">ايقاف المنتج</h6>
            <label class="switch mt-4">
              <input type="checkbox" v-model="satCheck" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <div class="w-md-75">
          <div class="form-group">
            <div class="row align-items-center justify-content-start">
              <div class=" ">
                <label for="file1">
                  <div class="input-img-cont">
                    <img :src="image" id="view1" class="input-img" alt="" />
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
                    name="image"
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
              name="name_ar"
              v-model="name_ar"
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
              name="name_en"
              v-model="name_en"
            />
          </div>

          <div class="form-group">
            <label class="bold font14" for="exampleInputEmail1">
              تحديد القسم
              <span style="color: #ff3333; margin: auto 20px"> * </span></label
            >
            <select class="form-control" name="menu_id" v-model="menu_id">
              <option :value="menu_id" selected disabled hidden>
                {{ CatName }}
              </option>
              <option v-for="cat in cats" :key="cat.id" :value="cat.id">
                {{ cat.name_ar }}
              </option>
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
              name="description_ar"
              v-model="description_ar"
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
              name="description_en"
              v-model="description_en"
            ></textarea>
          </div>
        </div>

        <!-- الاحجام  -->
        <h6 class="bold border-bottom mt-5">الاحجام</h6>
        <div
          class="feature w-md-75"
          v-for="(size, index) in sizes"
          :key="index"
        >
          <div class="d-flex align-items-center">
            <div class="mb-2 w-50">
              <label for=""> حجم {{ index + 1 }} </label>
              <input
                type="text"
                placeholder="الرجاء اسم الحجم"
                class="form-control"
                v-model="size.size"
              />
            </div>
            <div class="mb-2 w-50 mx-3">
              <label for=""> السعر {{ index + 1 }} </label>
              <input
                type="number"
                placeholder="الرجاء ادخال سعر الحجم"
                class="form-control"
                v-model="size.price"
              />
            </div>
            <div class="mb-2 w-50 mx-3">
              <label for=""> سعر الخصم {{ index + 1 }} </label>
              <input
                type="number"
                placeholder="الرجاء ادخال سعر الخصم ان وجد"
                class="form-control"
                v-model="size.price_discount"
              />
            </div>

            <div class="mt-4" @click="deleteSize(index)">
              <i class="far fa-trash-alt color-red"></i>
            </div>
          </div>
        </div>
        <button class="button1 mt-2" @click="addSize" type="button">
          اضافة جديدة
        </button>

        <!-- الاضافات  -->
        <h6 class="bold border-bottom mt-5">الاضافات</h6>
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
                v-model="feature.name"
              />
            </div>
            <div class="mb-2 w-50 mx-3">
              <label for=""> السعر {{ index + 1 }} </label>
              <input
                type="number"
                placeholder="الرجاء ادخال سعر الاضافة"
                class="form-control"
                v-model="feature.price"
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

      <button class="button1 mt-3 material-button" :disabled="disabled">
        تأكيد الاضافة
      </button>
    </form>
  </div>
  <Toast />
</template>

<script>
import axios from "axios";
import Toast from "primevue/toast";

export default {
  name: "VendorDashboardAddProduct",

  data() {
    return {
      features: [{}],
      sizes: [{}],
      cats: [],
      disabled: false,
      add_price: "",
      add_name: "",
      selectedCat: null,
      CatName: "",
      menu_id: "",
    };
  },

  mounted() {
    this.getStoreCategories();
    this.getSingleProduct();
  },

  methods: {
    addFeature() {
      this.features.push({
        name: "",
        price: "",
      });
      console.log(JSON.stringify(this.features));
    },
    deleteFeature(index) {
      this.features.splice(index, 1);
    },
    addSize() {
      this.sizes.push({
        size: "",
        price: "",
        price_discount: "",
      });
    },
    deleteSize(index) {
      this.sizes.splice(index, 1);
    },
    async getStoreCategories() {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.get("store/menus", { headers }).then((res) => {
        this.cats = res.data.data;
      });
    },

    // get single product
    async getSingleProduct() {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(`store/single-product?product_id=${this.$route.params.id}`, {
          headers,
        })
        .then((res) => {
          if (res.data.key == "success") {
            const product = res.data.data;
            this.image = product.image;
            this.name_ar = product.name_ar;
            this.name_en = product.name_en;
            this.description_ar = product.description_ar;
            this.description_en = product.description_en;
            this.features = product.additives;
            this.sizes = product.sizes;
            this.CatName = product.menu.name;
            this.menu_id = product.menu.id;
            for (let i = 0; i < this.cats.length; i++) {
              if (product.menu.id == this.cats[i].id) {
                this.selectedCat == this.cats[i];
              }
            }
            console.log(this.selectedCat);
            console.log(this.CatName);
            // this.description_en = product.description_en;
          }
        });
    },
    //   get product
    async addProduct() {
      this.disabled = true;
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const fd = new FormData(this.$refs.addProductsForm);
      fd.append("additives", JSON.stringify(this.features));
      fd.append("product_id", this.$route.params.id);
      fd.append("menu_id", this.menu_id);
      fd.append("sizes", JSON.stringify(this.sizes));
      await axios.post("store/update-product", fd, { headers }).then((res) => {
        if (res.data.key == "success") {
          this.$toast.add({
            severity: "success",
            summary: res.data.msg,
            life: 4000,
          });
          setTimeout(() => {
            this.$router.push("/products");
          }, 2000);
        } else {
          this.$toast.add({
            severity: "error",
            summary: res.data.msg,
            life: 4000,
          });
        }
        this.disabled = false;
      });
    },
  },
  components: {
    Toast,
  },
};
</script>

<style lang="scss" scoped></style>
