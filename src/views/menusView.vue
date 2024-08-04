<template>
  <div>
    <div class="table-cont p-2">
      <div class="row align-items-center flex-column">
        <div class="dash-title col-md p-0 mt-0">
          <h6 class="bold">الأقسام</h6>
          <p class="mb-1">يمكنك الاطلاع على جميع الأقسام من هنا</p>
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
                @change="getAddPrice()"
              >
                <option value="old" selected>الاقدم</option>
                <option value="recent">الاحدث</option>
              </select>
            </div>
            <div class="col p-0 text-align2">
              <router-link to="/categories"
                ><button
                  class="btn btn-warning color-white"
                  style="font-size: 13px"
                >
                  <span class="dash-add"><i class="fa fa-plus"></i></span>
                  إضافة قسم
                </button></router-link
              >
            </div>
          </div>
        </div>
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
            <th>الاسم بالعربية</th>
            <th>الاسم بالانجليزية</th>
            <th></th>
          </tr>
        </thead>
        <tbody data-class-name="table-body">
          <tr v-for="(fin, index) in finance" :key="fin.id">
            <td> {{  index + 1  }} </td>
            <td> {{  fin.name_ar  }} </td>
            <td> {{ fin.name_en }} </td>
            <td class="table-menu">
              <i
                @click="openTableMenu(index)"
                class="cp p-2 fa fa-ellipsis-h"
              ></i>
              <div class="menu-cont" v-if="showTableActions[index]">
                <ul class="white-bg round7 pt-1 pb-1 shadow1">
                  <li>
                    <router-link :to="'editMenue/'+fin.id" class="btn"
                      >
<i class="fa fa-edit color1"></i>                       تعديل
                      </router-link>
                  </li>
                  <li>
                    <button class="btn" @click="deleteFinance(fin.id)"
                      ><i class="far fa-trash-alt color-red"></i> حذف
                      </button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "VendorDashboardFinanceView",

  data() {
    return {
      showTableActions: [],
        finance: [],
        name: '',
      date : ''
    };
  },

  mounted() {
    this.getAddPrice()
  },

    methods: {
    getFilteredData() {
      this.getAddPrice();
    },
    openTableMenu(index) {
          // Initialize the showMenue array with false values if not already initialized
      if (this.showTableActions.length !== this.finance.length) {
        this.showTableActions = Array(this.finance.length).fill(false);
      }
      // Close all other menus and toggle the current menu
      this.showTableActions = this.showTableActions.map((_, i) => i === index ? !this.showTableActions[i] : false);
    },
      async getAddPrice() {
      const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
      await axios.get(`store/get-menus?search=${this.name}&date=${this.date}`, { headers })
        .then((res) => {
          this.finance = res.data.data.menus;
      } )
    },
    async deleteFinance(id) {
        const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
          lang : 'ar'
        };

      const fd = new FormData()
      fd.append('settlement_id', id)
      await axios.delete(`store/delete-menu?menu_id=${id}`, { headers })
      .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.getAddPrice();
            }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
      } )
    }
  },
};
</script>

<style lang="scss" scoped></style>
