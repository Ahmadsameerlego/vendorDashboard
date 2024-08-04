<template>

  <div class="subscribe_alerts d-flex justify-content-between align-items-center">
    <div class="text">
          <img
            class="icon-img"
            src="@/assets/imgs/icons/dash1 (1).svg"
            alt=""
          />
          

      تم انتهاء وقت الباقة الخاصة بك
    </div>

    <div>
      <router-link to="/plans">
        تجديد
      </router-link>
    </div>
  </div>
  <div class="dash-title p-2">
    <h6 class="bold">لوحة التحكم</h6>
    <p class="mb-1">مرحبا بك {{ user_name }}  , اهلا بعودتك</p>
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
  <div class="dash-title p-2 mt-4">
    <h6 class="bold">الحجوزات</h6>
    <p class="mb-1">اختر اليوم لترى حجوزات اليوم</p>
  </div>

   <div class="card">
<Calendar v-model="date" inline showWeek />
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
        <tr v-for="(order, index) in new_orders" :key="order.id">
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
                    <router-link :to="'/orderDetails/'+order.id"
                      ><i class="fa fa-edit color1"></i> التفاصيل</router-link>
                  </li>
                  <li class="border-bottom"></li>
                  <li v-if="order.payment_status !== 'true'">
                    <button class="btn" @click="accept(order.id)"><i class="fa fa-check color1"></i> قبول</button>
                  </li>
                  <li class="border-bottom"></li>
                  <li v-if="order.payment_status !== 'true'">
                    <button class="btn btn-danger" @click="refuse(order.id)"> رفض</button>
                  </li>
                </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Toast />
</template>



<script>
// @ is an alias to /src
import axios from 'axios';
import Chart from 'primevue/chart';
import Toast from 'primevue/toast';
import Calendar from 'primevue/calendar';

export default {
  name: "HomeView",
  components: {
    Chart,
    Toast,
    Calendar
  },
  data() {
    return {
      showMenue: [],
      home: {},
      new_orders: [],
      chartData: null,
      chartOptions: null,
      user: {},
      user_name: '',
            date : ''
    };
  },
  
  methods: {
    showTableMenu(index) {
      // Initialize the showMenue array with false values if not already initialized
      if (this.showMenue.length !== this.new_orders.length) {
        this.showMenue = Array(this.new_orders.length).fill(false);
      }
      // Close all other menus and toggle the current menu
      this.showMenue = this.showMenue.map((_, i) => i === index ? !this.showMenue[i] : false);
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
                  reject(new Error("Request was not successful")); 
                    localStorage.setItem('auth', true)
                }
            })
            .catch(error => {
                reject(error); // Reject with the caught error
            });
    });
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
              this.getData();
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
              this.getData();
            }, 2000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.disabled = false;
      } )
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
    if (localStorage.getItem('user')) {
      this.user_name = JSON.parse(localStorage.getItem('user')).name
    }
  }
};
</script>



<style lang="scss">
.p-datepicker-next , .p-datepicker-prev{
  transform : rotate(180deg)
}
.subscribe_alerts{
      background: #d42c2c;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    a{
    color: #744c21;
    background: #f0f0f0;
    border-radius: 6px;
    padding: 3px 20px;
    &:hover{
      color:#744c21 !important ;
    }
    }
}
</style>