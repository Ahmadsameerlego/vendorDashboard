<template>
  <div class="dash-title p-2">
    <h6 class="bold">لوحة التحكم</h6>
    <p class="mb-1">مرحبا بك أحمد سمير , اهلا بعودتك</p>
  </div>

  <div class="row">
    <div class="col-sm-6 col-md-3 p-2">
      <div class="dash-header-card color-white p-3 round5 gradient-bg">
        <h3 class="bold">10</h3>
        <h6 class="font12">الطلبات الجديدة</h6>
        <div class="icon">
          <img
            class="icon-img"
            src="@/assets/imgs/icons/dash1 (2).svg"
            alt=""
          />
          <img
            class="rect"
            src="@/assets/imgs/icons/Rectangle 1906.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 p-2">
      <div class="dash-header-card color-white p-3 round5 gradient-bg">
        <h3 class="bold">5</h3>
        <h6 class="font12">الطلبات في الانتظار</h6>
        <div class="icon">
          <img
            class="icon-img"
            src="@/assets/imgs/icons/dash1 (1).svg"
            alt=""
          />
          <img
            class="rect"
            src="@/assets/imgs/icons/Rectangle 1906.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 p-2">
      <div class="dash-header-card color-white p-3 round5 gradient-bg">
        <h3 class="bold">2000 ريال</h3>
        <h6 class="font12">اجمالي المبيعات</h6>
        <div class="icon">
          <img
            class="icon-img"
            src="@/assets/imgs/icons/dash1 (3).svg"
            alt=""
          />
          <img
            class="rect"
            src="@/assets/imgs/icons/Rectangle 1906.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 p-2">
      <div class="dash-header-card color-white p-3 round5 gradient-bg">
        <h3 class="bold">1000 ريال</h3>
        <h6 class="font12">اجمالي الارباح</h6>
        <div class="icon">
          <img
            class="icon-img"
            src="@/assets/imgs/icons/dash1 (4).svg"
            alt=""
          />
          <img
            class="rect"
            src="@/assets/imgs/icons/Rectangle 1906.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div class="table-cont p-2">
    <div class="row align-items-center">
      <div class="dash-title col-md p-0 mt-3">
        <h6 class="bold">الطلبات الجديدية</h6>
        <p class="mb-1">ظهور احدث الطلبات التي تحتاج الى موافقة</p>
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
      <tbody data-class-name="table-body">
        <tr>
          <td>1</td>
          <td>#215487</td>
          <td>احمد سمير</td>
          <td>قهوة اسبريسو</td>
          <td>40 ريال</td>
          <td>2 يناير 2020</td>
          <td>2 يناير 2020</td>
          <td>2 pm</td>
          <td class="table-menu">
            <i @click="showTableMenu(index)" class="cp p-2 fa fa-ellipsis-h"></i>
            <div class="menu-cont" v-if="showMenue[index]">
                <ul class="white-bg round7 pt-1 pb-1 shadow1">
                  <li>
                    <router-link to="/orderDetails/1"
                      ><i class="fa fa-eye color1"></i> التفاصيل</router-link
                    >
                  </li>
                  <li class="border-bottom"></li>
                  <li>
                    <a href="#"><i class="fa fa-check color1"></i> قبول</a>
                  </li>
                  <li class="border-bottom"></li>
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
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      showMenue: [],
    };
  },
  methods: {
    showTableMenu(index) {
      this.showMenue[index] = !this.showMenue[index]
    }
  }
};
</script>
