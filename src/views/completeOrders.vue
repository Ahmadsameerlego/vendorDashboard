<template>
  <div>
    <div class="table-cont p-2">
      <div class="row align-items-center flex-column">
        <div class="dash-title col-md p-0 mt-0">
          <h6 class="bold">الطلبات الجديدة</h6>
          <p class="mb-1">ظهور احدث الطلبات التي تحتاج الى موافقة</p>
        </div>

        <div
          class="form-group col-md p-2 m-2"
          style="background-color: #fff; border-radius: 5px"
        >
          <div class="row align-items-center justify-content-between">
            <div class="col p-0 password-cont">
              <input
                type="text"
                class="form-control"
                id="dataTableSearchInput1"
                aria-describedby="emailHelp"
                placeholder="كلمات مفتاحية"
                                v-model="name"
                @input="getFilteredData()"

              />
              <i class="fa fa-search color-gray"></i>
            </div>
            <div class="d-flex justify-content-start align-items-center">
              <p style="margin: 4px">فلترة حسب</p>
              <select
                name=""
                id=""
                style="width: 70px; height: 38px !important"
                 v-model="date"
                @change="getOrders()"
              >
                <option value="old" selected>الاقدم</option>
                <option value="recent">الاحدث</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <table
        id="dataTable1"
        data-order='[[ 1, "asc" ]]'
        data-page-length="25"
        class="table text-center table-striped table-ed mt-3"
        style="width: 100%"
      >
        <thead class="table-head">
          <tr>
            <th>رقم</th>
            <th>رقم الطلب</th>
            <th>اسم العميل</th>
            <th>اسم المنتج</th>
            <th>السعر الاجمالي</th>
            <th>تاريخ الطلب</th>
            <th>تاريخ الاستلام</th>
            <th>وقت الاستلام</th>
            <th></th>
          </tr>
        </thead>
        <tbody data-class-name="table-body" v-if="orders.length > 0">
          <tr v-for="(order, index) in orders" :key="index">
            <td> {{ index+1}}</td>
            <td> {{ order.order_num }} </td>
            <td>{{ order.user_name }}</td>
            <td>{{ order.products }}</td>
            <td>{{ order.total_price }} </td>
            <td>{{ order.order_date }} </td>
            <td>{{ order.receive_date }} </td>
            <td>{{ order.receive_time }}</td>
            <td class="table-menu">
              <i
                @click="showTableMenu(index)"
                class="cp p-2 fa fa-ellipsis-h"
              ></i>
              <div class="menu-cont" v-if="showMenue[index]">
                <ul class="white-bg round7 pt-1 pb-1 shadow1">
                  <li>
                    <router-link :to="'/orderDetails/'+order.id"
                      ><i class="fa fa-edit color1"></i> التفاصيل</router-link>
                  </li>
                  <li class="border-bottom"></li>
                  <!-- <li v-if="order.payment_status !== 'true'">
                    <button class="btn" @click="accept(order.id)"><i class="fa fa-check color1"></i> قبول</button>
                  </li>
                  <li class="border-bottom"></li>
                  <li v-if="order.payment_status !== 'true'">
                    <button class="btn btn-danger" @click="refuse(order.id)"> رفض</button>
                  </li> -->
                </ul>
              </div>
            </td>
          </tr>
        </tbody>

        <tbody data-class-name="table-body" v-else>
          <td :colspan="12">
            <Message severity="error">لا توجد طلبات الى الان</Message>

          </td>
        </tbody>
      </table>
    </div>
  </div>
  <Toast />
</template>

<script>
import Message from 'primevue/message';
import Toast from 'primevue/toast';

import axios from 'axios';
export default {
  name: "VendorDashboardOrdersVue",
  data() {
    return {
      showMenue: [],
      status: 'finished',
        orders: [],
       name: '',
      date : ''
    };
  },
    methods: {
     getFilteredData() {
      this.getOrders();
    },
     showTableMenu(index) {
      // Initialize the showMenue array with false values if not already initialized
      if (this.showMenue.length !== this.orders.length) {
        this.showMenue = Array(this.orders.length).fill(false);
      }
      // Close all other menus and toggle the current menu
      this.showMenue = this.showMenue.map((_, i) => i === index ? !this.showMenue[i] : false);
    },
    async getOrders() {
      const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
      await axios.get(`store/get-orders?status=${this.status}&search=${this.name}&date=${this.date}`, { headers })
        .then((res) => {
          this.orders = res.data.data.orders;
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
              this.getOrders();
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
              this.getOrders();
            }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
    }
  },
  components: {
    Message,
    Toast
  },
 watch: {
    // '$route.fullPath'(newPath) {
    //   if (newPath.includes('newOrders')) {
    //     this.status = 'pending';
    //     this.getOrders()
    //   } else if (newPath.includes('activeOrders')) {
    //     this.status = 'inprogress';
    //     this.getOrders()
    //   } else if (newPath.includes('completeOrders')) {
    //     this.status = 'finished';
    //     this.getOrders()
    //   }
    // }
  },
  mounted() {
    this.getOrders();
  }
};
</script>

<style lang="scss" scoped></style>
