<template>
  <nav class="dashboard-sidebar white-bg">
    <div class="side-logo mb-3">
      <div class="row align-items-center">
        <div class="col p-0">
          <a href="index.html">
            <img
              src="@/assets/imgs/logo.png"
              class="sm-img dash-logo mx-auto d-block"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>

    <div id="sideButtons" class="d-lg-none"></div>

    <!-- start side links -->
    <div class="side-buttons">
      <div>
        <ul>
          <li class="side-button material-button p-1 round5 mt-1">
            <router-link class="color-gray" to="/">
              <button class="dashboard-button color-gray">
                <i class="fa fa-home"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">الرئيسية</span>
                <i class="fa fa-angle-left y180"></i>
              </div>
            </router-link>
          </li>
          <li class="side-button material-button p-1 round5 mt-1">
            <router-link class="color-gray" to="/menus">
              <button class="dashboard-button color-gray">
                <i class="fa fa-store"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2"> الاقسام</span>
                <i class="fa fa-angle-left y180"></i>
              </div>
            </router-link>
          </li>
          <li class="side-button material-button p-1 round5 mt-1">
            <router-link class="color-gray" to="/products">
              <button class="dashboard-button color-gray">
                <i class="fa fa-store"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2"> المنتجات</span>
                <i class="fa fa-angle-left y180"></i>
              </div>
            </router-link>
          </li>

          <li class="side-button material-button p-1 round5 mt-1">
            <a
              onclick="oppenSideDropDown(this)"
              class="color-gray drop-toggler d-block"
              href="#"
            >
              <button class="dashboard-button color-gray">
                <i class="fa fa-clipboard-list"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">طلباتى</span>
                <i class="fa fa-angle-left arrow y180"></i>
              </div>
            </a>
            <ul class="side-dropdown">
              <li class="side-drop-button p-1 round5 mt-1">
                <router-link class="color-gray" to="/newOrders">
                  <button class="color-gray">
                    <i class="far fa-plus-square"></i>
                  </button>
                  <div class="side-button-content">
                    <span class="font12 ml-2 mr-2">الطلبات الجديدية</span>
                    <i class="fa fa-angle-left y180"></i>
                  </div>
                </router-link>
             </li>
             <li class="side-drop-button p-1 round5 mt-1">
                <router-link class="color-gray" to="/waiting-payment">
                  <button class="color-gray">
                    <i class="far fa-plus-square"></i>
                  </button>
                  <div class="side-button-content">
                    <span class="font12 ml-2 mr-2">في انتظار الدفع</span>
                    <i class="fa fa-angle-left y180"></i>
                  </div>
                </router-link>
             </li>
              <li class="side-drop-button p-1 round5 mt-1">
                <router-link class="color-gray" to="/activeOrders">
                  <button class="color-gray">
                    <i class="far fa-plus-square"></i>
                  </button>
                  <div class="side-button-content">
                    <span class="font12 ml-2 mr-2">الطلبات النشطة</span>
                    <i class="fa fa-angle-left y180"></i>
                  </div>
                </router-link>
              </li>

              <li class="side-drop-button p-1 round5 mt-1">
                <router-link class="color-gray" to="/completeOrders">
                  <button class="color-gray">
                    <i class="far fa-plus-square"></i>
                  </button>
                  <div class="side-button-content">
                    <span class="font12 ml-2 mr-2">الطلبات المكتملة</span>
                    <i class="fa fa-angle-left y180"></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="side-button material-button p-1 round5 mt-0">
            <router-link class="color-gray" to="/finance">
              <button class="dashboard-button color-gray">
                <i class="fa fa-money-bill"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">المالية</span>
                <i class="fa fa-angle-left y180"></i>
              </div>
            </router-link>
          </li>
           <li class="side-button material-button p-1 round5 mt-1">
            <a
              onclick="oppenSideDropDown(this)"
              class="color-gray drop-toggler d-block"
              href="#"
            >
              <button class="dashboard-button color-gray">
                <i class="fa fa-clipboard-list"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">الحجوزات</span>
                <i class="fa fa-angle-left arrow y180"></i>
              </div>
            </a>
            <ul class="side-dropdown">
              <li class="side-drop-button p-1 round5 mt-1">
                <router-link class="color-gray" to="/reservations">
                  <button class="color-gray">
                    <i class="far fa-plus-square"></i>
                  </button>
                  <div class="side-button-content">
                    <span class="font12 ml-2 mr-2">الحجوزات الجديدية</span>
                    <i class="fa fa-angle-left y180"></i>
                  </div>
                </router-link>
             </li>
             <li class="side-drop-button p-1 round5 mt-1">
                <router-link class="color-gray" to="/accepted-reservations">
                  <button class="color-gray">
                    <i class="far fa-plus-square"></i>
                  </button>
                  <div class="side-button-content">
                    <span class="font12 ml-2 mr-2">الحجوزات المقبولة</span>
                    <i class="fa fa-angle-left y180"></i>
                  </div>
                </router-link>
             </li>
              <li class="side-drop-button p-1 round5 mt-1">
                <router-link class="color-gray" to="/refused-reservations">
                  <button class="color-gray">
                    <i class="far fa-plus-square"></i>
                  </button>
                  <div class="side-button-content">
                    <span class="font12 ml-2 mr-2">الحجوزات المرفوضة</span>
                    <i class="fa fa-angle-left y180"></i>
                  </div>
                </router-link>
              </li>

              <li class="side-drop-button p-1 round5 mt-1">
                <router-link class="color-gray" to="/canceled-reservations">
                  <button class="color-gray">
                    <i class="far fa-plus-square"></i>
                  </button>
                  <div class="side-button-content">
                    <span class="font12 ml-2 mr-2">الحجوزات الملغاة</span>
                    <i class="fa fa-angle-left y180"></i>
                  </div>
                </router-link>
              </li>
              <li class="side-drop-button p-1 round5 mt-1">
                <router-link class="color-gray" to="/client-canceled-reservations">
                  <button class="color-gray">
                    <i class="far fa-plus-square"></i>
                  </button>
                  <div class="side-button-content">
                    <span class="font12 ml-2 mr-2">الملغاة من المتجر</span>
                    <i class="fa fa-angle-left y180"></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="side-button material-button p-1 round5 mt-1">
            <router-link class="color-gray" to="/settings">
              <button class="dashboard-button color-gray">
                <i class="fa fa-clipboard-list"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">الاعدادات</span>
                <i class="fa fa-angle-left arrow y180"></i>
              </div>
            </router-link>
          </li>
          <li class="side-button material-button p-1 round5 mt-1">
            <router-link class="color-gray" to="/reviews">
              <button class="dashboard-button color-gray">
                <i class="far fa-comment-alt"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">التقييمات</span>
                <i class="fa fa-angle-left y180"></i>
              </div>
            </router-link>
          </li>

          <li class="side-button material-button p-1 round5 mt-1">
            <router-link class="color-gray" to="/addAdvertisement">
              <button class="dashboard-button color-gray">
                <i class="fa fa-boxes"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">طلب اعلان</span>
                <i class="fa fa-angle-left y180"></i>
              </div>
            </router-link>
          </li>

          <li class="side-button material-button p-1 round5 mt-1">
            <router-link class="color-gray" to="/discounts">
              <button class="dashboard-button color-gray">
                <i class="fa fa-boxes"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">الخصومات</span>
                <i class="fa fa-angle-left y180"></i>
              </div>
            </router-link>
          </li>

          <li class="side-button material-button p-1 round5 mt-1">
            <router-link class="color-gray" to="/contactUs">
              <button class="dashboard-button color-gray">
                <i class="fa fa-phone-alt"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">تواصل معنا</span>
                <i class="fa fa-angle-left y180"></i>
              </div>
            </router-link>
          </li>
          <li class="side-button material-button p-1 round5 mt-1">
            <button class="btn color-gray" @click="logout">
              <button class="dashboard-button color-gray">
                <i class="fa color-red fa-sign-out-alt"></i>
              </button>
              <div class="side-button-content">
                <span class="font12 ml-2 mr-2">تسجيل الخروج</span>
                <i class="fa fa-angle-left y180"></i>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- end side links -->

    <!-- <div class="side-footer font10">
      <p class="font10">جميع الحقوق محفوظة @2024</p>
      <p class="font10">
        تصميم بواسطة
        <i class="fa fa-heart" style="color: #ff0000"></i>
        <a
          href="https://www.facebook.com/profile.php?id=100009373168874"
          target="_blank"
          style="color: #000"
          >احمد سمير</a
        >
      </p>
    </div> -->
  </nav>
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  name: "VendorDashboardSidebar",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    async logout() {
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
      };
      const fd = new FormData();
      await axios.post(`store/logout?device_id=${localStorage.getItem('active_id')}&device_type=web`, fd, { headers })
       .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setTimeout(() => {
              this.$router.push('/login');

            }, 1000);
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
      } )
    }
  },
  components: {
    Toast
  }
};
</script>

<style lang="scss" scoped></style>
