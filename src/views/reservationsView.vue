<template>
  <div>
    <div class="table-cont p-2">
      <div class="row align-items-center flex-column">
        <div class="dash-title col-md p-0 mt-0 mb-2">
          <h6 class="bold">الحجوزات</h6>
          <p class="mb-1">يمكنك الاطلاع على جميع حجوزاتك من هنا</p>
        </div>

        <!-- <div
          class="form-group col-md p-2 m-0"
          style="background-color: #fff; border-radius: 5px"
        >
          <div class="row align-items-center justify-content-between">
            <div class="col-5 p-0 password-cont">
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
            <div
              class="d-flex justify-content-start align-items-center"
              style="margin: 0 17px"
            >
              <p style="margin: 4px">فلترة حسب</p>
              <select
                name=""
                id=""
                style="width: 70px; height: 38px !important"
                v-model="date"
                @change="getData()"
              >
                <option value="old" selected>الاقدم</option>
                <option value="recent">الاحدث</option>
              </select>
            </div>

            <div class="col p-0 text-align2">
              <router-link to="/addProduct"
                ><button
                  class="btn btn-warning color-white"
                  style="font-size: 13px"
                >
                  <span class="dash-add"><i class="fa fa-plus"></i></span> اضافة
                  منتج
                </button></router-link
              >
            </div>
          </div>
        </div> -->
      </div>

      <table
        id="dataTable1"
        data-order='[[ 1, "asc" ]]'
        data-page-length="25"
        class="table text-center table-striped table-ed"
        style="width: 100%"
      >
        <thead class="table-head">
          <tr>
            <th>رقم</th>
            <th>تاريخ الانشاء</th>
            <th>تاريخ الحضور</th>
            <th>وقت الحضور</th>
            <th>عدد المقاعد</th>
            <th>اسم العميل</th>
            <th> هاتف العميل</th>
            <th></th>
          </tr>
        </thead>
        <tbody data-class-name="table-body ">
          <tr v-for="(product,index) in products" :key="product.id">
            <td> {{ index+1 }} </td>
            <td> {{ product.created_at }} </td>
            <td>{{ product.date }} </td>
            <td>{{ product.time }} </td>
            <td>{{ product.members }} </td>
            <td>{{ product.user.name }} </td>
            <td>{{ product.user.phone }} </td>
            <td class="table-menu">
              <i
                @click="openTableMenu(index)"
                class="cp p-2 fa fa-ellipsis-h"
              ></i>
              <div class="menu-cont" v-if="showMenue[index]">
                <ul class="white-bg round7 pt-1 pb-1 shadow1">
                  
                  <li class="">
                    <button class="btn" @click.prevent="accept(product.id)"
                      > 
                      <i class="fa fa-check color1"></i>
                      قبول
                      </button
                    >
                  </li>
                  <li class="border-bottom"></li>
                  <li>
                    <button class="btn btn-danger" @click.prevent="refuse(product.id)"
                      > رفض</button
                    >
                  </li>
                  <li class="border-bottom"></li>
                  <li>
                    <button class="btn btn-danger" @click.prevent="cancel(product.id)"
                      > الغاء</button
                    >
                  </li>

                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  name: "VendorDashboardProductsView",

  data() {
    return {
      showMenue: [],
      products: [],
      name: '',
      date : ''
    };
  },
  methods: {
    openTableMenu(index) {
            // Initialize the showMenue array with false values if not already initialized
      if (this.showMenue.length !== this.products.length) {
        this.showMenue = Array(this.products.length).fill(false);
      }
      // Close all other menus and toggle the current menu
      this.showMenue = this.showMenue.map((_, i) => i === index ? !this.showMenue[i] : false);
    },
    getFilteredData() {
      this.getData();
    },
     async getData() {
        const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };

      await axios.get(`store/get-reservations?status=${0}`, { headers })
        .then((res) => {
          if (res.data.key == "success") {
            this.products = res.data.data.reservations;
        }
      } )
    },

    async accept(id) {
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
      };
      const fd = new FormData();
      fd.append('reservation_id', id)
      await axios.post(`store/accept-reservation`, fd , { headers })
      .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.getData()
            }, 1000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
    },
    async refuse(id) {
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
      };
      const fd = new FormData();
      fd.append('reservation_id', id)
      await axios.post(`store/refuse-reservation`, fd , { headers })
      .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.getData()
            }, 1000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
    },
    async cancel(id) {
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
      };
      const fd = new FormData();
      fd.append('reservation_id', id)
      await axios.post(`store/cancel-reservation`, fd , { headers })
      .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.getData()
            }, 1000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
    },
    
  },
  mounted() {
      this.getData();
  },
  components: {
      Toast
    }
};
</script>

<style lang="scss" scoped></style>
