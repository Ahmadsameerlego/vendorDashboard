<template>
       <div class="dash-title p-2">
                <h6 class="bold">الاشعارات</h6>
                <p class="mb-1">يتم هنا عرض جميع الاشعارات الخاصة بك</p>
            </div>



                <!-- openions -->
                <div class=" m-2 p-0 " v-if="notifications.length>0">

                    
                    <div class="white-bg notification active m-2 round7 " v-for="not in notifications" :key="not.id">
                        <div class="dash-card-content pl-2 pr-2" v-if="not.type=='new_order'">
                            <router-link :to="'/orderDetails/'+not.order_id" class="row m-0 pt-1 pb-1  align-items-center justify-content-center ">
                                <div class="col-md p-0 icon-cont p-md-1 text-center ">
                                    <div class="icon">
                                        <i class="fa fa-bell"></i>
                                    </div>
                                </div>
                                <div class="col-11 col-md-10 p-1 ">
                                    <h6 class="bold font14">
                                        {{  not.body  }}
                                    </h6>

                                    <p class="mb-0"> 
                                        <i class="far fa-clock"></i>
                                        {{ not.created_at}}    
                                    </p>
                                </div>
                            </router-link>
                        </div>
                        <div class="dash-card-content pl-2 pr-2" v-else-if="not.type=='new_reservation'">
                            <div  class="row m-0 pt-1 pb-1  align-items-center justify-content-center ">
                                <div class="col-md p-0 icon-cont p-md-1 text-center ">
                                    <div class="icon">
                                        <i class="fa fa-bell"></i>
                                    </div>
                                </div>
                                <div class="col-11 col-md-10 p-1 ">
                                    <h6 class="bold font14">
                                        {{  not.body  }}
                                    </h6>

                                    <p class="mb-0"> 
                                        <i class="far fa-clock"></i>
                                        {{ not.created_at}}    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <h5 class="text-danger text-center font-weight-bold"> لا توجد اشعارات الى الان </h5>
                </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'VendorDashboardNotificationsView',

    data() {
        return {
            notifications :[]
        };
    },

    mounted() {
        this.getNotifications();
    },

    methods: {
        async getNotifications() {
            const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
          lang : 'ar'
            };

            await axios.get('store/notifications', { headers })
                .then((res) => {
                    this.notifications = res.data.data.notifications;
            })
        }       
    },
};
</script>

<style lang="scss" scoped>

</style>