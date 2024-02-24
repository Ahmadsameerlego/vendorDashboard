<template>
  <div>
    <div class="table-cont p-2">
      <div class="row align-items-center flex-column">
        <div class="dash-title col-md p-0 mt-0">
          <h6 class="bold">الحسابات المالية</h6>
          <p class="mb-1">ظهور طلبات التسوية التي قمت بها</p>
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
              />
              <i class="fa fa-search color-gray"></i>
            </div>
            <div class="d-flex justify-content-start align-items-center">
              <p style="margin: 4px">فلترة حسب</p>
              <select
                name=""
                id=""
                style="width: 70px; height: 38px !important"
              >
                <option value="" selected>الاقدم</option>
                <option value="">الاحدث</option>
              </select>
            </div>
            <div class="col p-0 text-align2">
              <router-link to="/newFinance"
                ><button
                  class="btn btn-warning color-white"
                  style="font-size: 13px"
                >
                  <span class="dash-add"><i class="fa fa-plus"></i></span>
                  طلب تسوية جديدة
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
            <th>رقم الطلب</th>
            <th>طريقة الاستلام</th>
            <th>قيمة التسوية</th>
            <th>تاريخ الطلب</th>
            <th>تاريخ استلام التسوية</th>
            <th></th>
          </tr>
        </thead>
        <tbody data-class-name="table-body">
          <tr>
            <td>1</td>
            <td>#215487</td>
            <td>اونلاين</td>
            <td>4000 ريال</td>
            <td>2 يناير 2020</td>
            <td>2 يناير 2020</td>
            <td class="table-menu">
              <i
                @click="openTableMenu(index)"
                class="cp p-2 fa fa-ellipsis-h"
              ></i>
              <div class="menu-cont" v-if="showTableActions[index]">
                <ul class="white-bg round7 pt-1 pb-1 shadow1">
                  <li>
                    <a onclick="deleteElement()" href="#"
                      ><i class="far fa-trash-alt color-red"></i> حذف</a
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
</template>

<script>
export default {
  name: "VendorDashboardFinanceView",

  data() {
    return {
      showTableActions: [],
    };
  },

  mounted() {},

  methods: {
    openTableMenu(index) {
      this.showTableActions[index] = !this.showTableActions[index];
    },
  },
};
</script>

<style lang="scss" scoped></style>
