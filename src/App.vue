<template>
  <div>
    <sidebar v-if="notAuth == true" />
    <div class="page-container">
      <div class="dashboard-body">
        <dashHeader v-if="notAuth == true" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/layout/sidebar.vue";
import dashHeader from "@/components/layout/dashHeader.vue";
export default {
  data() {
    return {
      notAuth: true,
    };
  },
  components: {
    sidebar,
    dashHeader,
  },
  created() {
    if (
      this.$route.fullPath.includes("login") ||
      this.$route.fullPath.includes("register") ||
      this.$route.fullPath.includes("completeRegister")
    ) {
      this.notAuth = false;
      console.log("tag", "rfrfrfrf");
    }
  },
};
</script>
<style lang="scss"></style>
