<template>
  <div class="dash-title p-2">
    <h6 class="bold">لوحة التحكم</h6>
    <p class="mb-1">مرحبا بك أحمد سمير , اهلا بعودتك</p>
  </div>

  <div class="row">
    <div class="col-sm-6 col-md-3 p-2">
      <div class="dash-header-card color-white p-3 round5 gradient-bg">
        <h3 class="bold"> {{  home.new_orders_count  }} </h3>
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
        <h3 class="bold"> {{  home.waiting_orders_count  }} </h3>
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
        <h3 class="bold">{{  home.total_sales  }} ريال</h3>
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
        <h3 class="bold">{{  home.total_profits  }} ريال</h3>
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

  <div class="dash-title p-2">
    <h6 class="bold">الارباح</h6>
    <p class="mb-1">يمكنك الاطلاع على الارباح بالتفصيل من هنا</p>
  </div>

   <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" style="height:300px" />
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
        <tr v-for="order in new_orders" :key="order.id">
          <td>1</td>
          <td> {{  order.order_num  }} </td>
          <td> {{  order.user_name  }} </td>
          <td> {{  order.products  }} </td>
          <td> {{  order.total_price  }} </td>
          <td> {{ order.order_date  }} </td>
          <td> {{ order.receive_date }}</td>
          <td> {{ order.receive_time }} </td>
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
import axios from 'axios';
import Chart from 'primevue/chart';

export default {
  name: "HomeView",
  components: {
    Chart
  },
  data() {
    return {
      showMenue: [],
      home: {},
      new_orders: [],
      chartData: null,
            chartOptions: null
    };
  },
  methods: {
    showTableMenu(index) {
      this.showMenue[index] = !this.showMenue[index]
    },
    getData() {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token');  
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios.get('store/home', { headers })
            .then((res) => {
                if (res.data.key === "success") {
                    this.home = res.data.data;
                    this.new_orders = res.data.data.new_orders;
                    resolve(res.data); // Resolve with the response data
                } else {
                    reject(new Error("Request was not successful")); // Reject if the response key is not "success"
                }
            })
            .catch(error => {
                reject(error); // Reject with the caught error
            });
    });
    },


            setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'اجمالي الارباح على مدار السنة',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--cyan-500'),
                        tension: 0.4
                    },
                   
                ]
            };
        },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          }
        }
      };

    }
  },
  mounted() {
    this.getData()
            this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();

  }
};
</script>
