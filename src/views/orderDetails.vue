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
        <div :class="{current : status == 'pending' ||status == 'inprogress'||status == 'finished'}">
          <span class="select-register-step step">1</span>
          <span class="select-register-step check"
            ><i class="fa fa-check"></i
          ></span>
          <span class="font12 bold"> قيد الموافقة </span>
        </div>
        <div class="line-between"></div>
        <div :class="{current : status == 'inprogress'||status == 'finished'}">
          <span class="select-register-step step">2</span>
          <span class="select-register-step check"
            ><i class="fa fa-check"></i
          ></span>
          <span class="font12 bold"> تم تجهيز الطلب </span>
        </div>

        <div class="line-between"></div>
        <div class="" :class="{current : status == 'inprogress'||status == 'finished'}">
          <span class="select-register-step step">2</span>
          <span class="select-register-step check"
            ><i class="fa fa-check"></i
          ></span>
          <span class="font12 bold"> في انتظار التسليم </span>
        </div>

        <div class="line-between"></div>
        <div class="" :class="{current :status == 'finished'}">
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
      <h6 class="bold border-bottom p-3 mb-4">تفاصيل الطلب</h6>

      <!-- single -->
      <div class="row">
        <div class="col-md-6">
          <div
            class="single-info-order "
          >
            <!-- order info -->
            <div class="d-flex justify-content-between align-items-center mb-3" v-for="product in products" :key="product.id">
              <h6 class="color-gray"> {{ product.name }} </h6>
              <div class="order-quantity">
                <span> الكمية : <span class="color1">{{product.qty}}</span> </span>
              </div>
              <div class="order-quantity">
                <span> الحجم : <span class="color1">{{product.size}}</span> </span>
              </div>
              <div class="order-quantity">
                <span> الاضافة : <span class="color1" v-for="prod in product.additives" :key="prod.id">{{prod.price}} رس : {{prod.name}}</span> </span>
              </div>
            </div>

            <!-- quantity -->
            
          </div>
        </div>
      </div>
      <hr />
    </div>

    <!-- بيانات الطلب -->
    <div class="white-bg round7 mb-3 mt-2">
      <h6 class="bold border-bottom p-3 mb-4">بيانات الطلب</h6>

      <!-- <div class="p-3 order-info row">
        <div class="col-3 color-gray">الاختيار المطلوب</div>
        <div class="col">سكر زيادة</div>
      </div> -->

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">القسم</div>
        <div class="col">قهوة</div>
      </div>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">رقم الطلب</div>
        <div class="col"> {{  order.order_num  }}  </div>
      </div>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">تاريخ الطلب</div>
        <div class="col">  {{ order.order_date }} </div>
      </div>

      <div class="p-3 order-info row">
        <div class="col-3 color-gray">تاريخ / وقت الاستلام</div>
        <div class="col">{{ order.receive_date }}</div>
      </div>

      <div class="p-3 order-info row text-white bg-dark">
        <div class="col-3 text-white">المجموع الكلى</div>
        <div class="col"> {{ order.total_price }} </div>
      </div>
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
                    :src="user.image"
                    style="width: 80px; border-radius: 50%; height: 80px"
                    class="m-0 round7 m-md-1"
                    alt=""
                  />
                </div>
                <div class="col-10 col-md-7 col-lg-10 p-1">
                  <h6 class="bold font14">{{ user.name }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="status=='pending'">
    <button class="button5 m-2 material-button" @click="accept($route.params.id)">
 قبول الطلب
  </button>
  <button
    class="button4 m-2 material-button"
     @click="refuse($route.params.id)"
  >
    رفض الطلب
  </button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "VendorDashboardOrderDetails",

  data() {
    return {
      order: {},
      status: '',
      user: {},
      products : []
    };
  },

  mounted() {
    this.getOrderDetails();
  },

  methods: {
    async getOrderDetails() {
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
      await axios.get(`store/order-details?order_id=${this.$route.params.id}`, { headers })
        .then((res) => {
          this.order = res.data.data;
          this.status = res.data.data.status;
          this.user = res.data.data.user;
          this.products = res.data.data.products;
      } )
    },

      // accept order 
     async accept(id) {
        const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
          lang : 'ar'
        };

      await axios.get(`store/accept-order?order_id=${id}`, { headers })
      .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.$router.push('/activeOrders')
            }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
    },
    // accept order 
     async refuse(id) {
        const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
          lang : 'ar'
        };

      await axios.get(`store/refuse-order?order_id=${id}`, { headers })
      .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.$router.push('/activeOrders')
            }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
    }
  },
};
</script>

<style lang="scss" scoped></style>
