<template>
  <div class="dash-title p-2">
    <h6 class="bold">الحجوزات</h6>
    <p class="mb-1">اختر التاريخ لترى حجوزاتك</p>
  </div>

   <div class="card flex justify-content-center mt-5 px-5 py-5">
        <Calendar v-model="date" inline showWeek />

        <div class="mt-3">
            <h5> تفاصيل الحجز :  </h5>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam distinctio, fuga ab saepe laboriosam, maxime accusamus labore ex quo expedita nulla qui suscipit assumenda ullam! Explicabo inventore atque quas!
            </p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios';
import Calendar from 'primevue/calendar';

export default {
  name: "HomeView",
    components: {
    Calendar
  },
  data() {
    return {
      date : ''
    };
  },
};
</script>


<style>
    .p-datepicker-next, .p-datepicker-prev{transform: rotate(180deg);}
</style>
