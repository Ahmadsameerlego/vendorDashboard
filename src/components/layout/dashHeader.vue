<template>
  <nav class="dashboard-nav white-bg d-flex align-items-center">
    <div class="nav-cont align-items-center row w-100">
      <div class="col-md-8 pr-0 pl-0">
        <div class="row align-items-center">
          <div class="col pl-0 pr-0">
            <button class="dashboard-button material-button" id="sideToggler">
              <i class="fa font18 fa-outdent y180"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="navButtons" class="col-lg d-none d-lg-block pr-0 pl-0" v-if="Object.values(user).length>0">
        <div class="row justify-content-end align-items-center">
          <router-link to="/notification" class="nav-notifications ml-2 mr-2">
            <button class="dashboard-button material-button">
              <i class="far fa-bell"></i>
            </button>
            <span> {{ count }} </span>
          </router-link>
          <div class="d-inline-block user-cont">
            <img :src="user.image" class="m-1" width="30" height="30" alt="" />
            <div class="d-inline-block">
              <span class="bold font10 d-block mb-0">
                {{ user.manager_name }}</span
              >
              <span class="bold font8 d-block mb-0">المدير العام</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "VendorDashboardDashHeader",

  data() {
    return { user: {}, count: "" };
  },
  methods: {
    getData() {
      return new Promise((resolve, reject) => {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        axios
          .get("store/count-notifications", { headers })
          .then((res) => {
            if (res.data.key === "success") {
              resolve(res.data); // Resolve with the response data
              console.log(res.data);
              this.count = res.data.data.count;
            } else {
              reject(new Error("Request was not successful"));
              localStorage.setItem("auth", true);
            }
          })
          .catch((error) => {
            reject(error); // Reject with the caught error
          });
      });
    },
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.getData()
    }
  },

  // methods: {},
};
</script>

<style lang="scss" scoped></style>
