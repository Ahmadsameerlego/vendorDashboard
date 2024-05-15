<template>
  <div class="dash-title p-2">
    <h6 class="bold">التقييمات</h6>
    <p class="mb-1">يتم عرض التعليقات والتقييمات الخاصة بك</p>
  </div>

  <div class="m-2 p-0">
    <div class="white-bg round7">
      <div class="dash-card-content text-center p-4">
        <h1 class="font60"> {{  rate_info.store_rate  }} </h1>

        <div class="stars-cont d-inline-block direction2">
          <Rating v-model="rate_info.store_rate_num" :cancel="false" readonly  />
        </div>

        <p class="font18 mt-2">({{  rate_info.store_rate_num  }}) تقييما</p>
      </div>
    </div>
  </div>

  <!-- openions -->
  <div class="m-2 p-0">
    <div class="white-bg round7">
      <h6 class="bold border-bottom p-3">اراء العملاء</h6>
      <div class="dash-card-content pl-2 pr-2" v-if="rates.length > 0">

        <!-- single rate  -->
        <div v-for="rate in rates" :key="rate.id">
          <div
          class="row m-0 pt-1 pb-1 align-items-center justify-content-center"
        >
          <div class="col-md p-0 p-md-1 text-center">
            <img
              :src="rate.user.image"
              style="max-width: 80px"
              class="m-0 m-md-1 round7"
              alt=""
            />
          </div>
          <div class="col-11 col-md-10 p-1">
            <h6 class="bold font14"> {{ rate.user.name }} </h6>
            <div class="">
              <div class="d-flex justify-content-start align-items-center">
                <i class="far fa-clock" style="color: gray"></i>
                <span class="text-muted"> {{ rata.created_at }} </span>
              </div>
              <div class="stars-cont d-inline-block direction2">
                          <Rating v-model="rate.rate" :cancel="false" readonly  />
              </div>
            </div>
            <p class="mb-1"> {{ rata.comment }} </p>
          </div>
        </div>

        <hr />
        </div>

        <hr />
      </div>
      <div v-else class="px-5 pt-3 pb-4">
          <Message severity="warn"> لا توجد اراء الى الان </Message>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Rating from 'primevue/rating';
import Message from 'primevue/message';

export default {
  name: "VendorDashboardReviewsView",

  data() {
    return {
      rate_info: {},
      rates : []
    };
  },

  mounted() {
    this.getRates();
  },

  methods: {
    async getRates() {
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
      };
      await axios.get('store/rates', { headers })
        .then((res) => {
          this.rate_info = res.data.data;
          this.rates = res.data.data.rates;
        } )
    }
  },
  components: {
    Rating,
    Message
  }
};
</script>

<style lang="scss" scoped></style>
