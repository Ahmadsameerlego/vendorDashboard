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
      <div id="navButtons" class="col-lg d-none d-lg-block pr-0 pl-0">
        <div class="row justify-content-end align-items-center">
          <router-link to="/notification" class="nav-notifications ml-2 mr-2">
            <button class="dashboard-button material-button">
              <i class="far fa-bell"></i>
            </button>
            <span>3</span>
          </router-link>
          <div class="d-inline-block user-cont">
            <img
              src="@/assets/imgs/users/user.png"
              class="m-1"
              width="30"
              height="30"
              alt=""
            />
            <div class="d-inline-block">
              <span class="bold font10 d-block mb-0"> احمد سمير</span>
              <span class="bold font8 d-block mb-0">المدير العام</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "VendorDashboardDashHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
