<template>
            <div  class="table-cont p-2 ">
                <div class="row align-items-center">
                    <div class="dash-title col-md p-0 mt-0">
                        <h6 class="bold">الاعدادات</h6>
                        <p class="mb-1">الاعدادات / إعدادات الملف الشخصي</p>
                    </div>
                </div>

                        <form id="form">

                            <div class=" white-bg round7 mb-3 mt-2 p-3">
                                <h6 class="bold border-bottom pt-3 pb-3 mb-4">تغيير كلمة المرور</h6>

                                <div class="w-md-75 ">            
                    
                                    <div class="form-group">
                                        <label class="bold font14" for="Password1"> كلمة المرور القديمة <span style="color: #ff3333;margin: auto 20px;"> * </span> </label>
                                        <div class="password-cont">
                                            <input type="password" class="form-control" id="Password1" aria-describedby="emailHelp" placeholder="الرجاء ادخال كلمة المرور الحالية">
                                            <i class="fa fa-eye color-gray" id="signInShowPassword1"></i>
                                        </div>
                                    </div>
                    
                                    <div class="form-group">
                                        <label class="bold font14" for="Password1">كلمة المرور الجديدة <span style="color: #ff3333;margin: auto 20px;"> * </span>  </label>
                                        <div class="password-cont">
                                            <input type="password" class="form-control" id="Password2" aria-describedby="emailHelp" placeholder="الرجاء ادخال كلمة المرور الجديدة">
                                            <i class="fa fa-eye color-gray" id="signInShowPassword2"></i>
                                        </div>
                                    </div> 

                                    <div class="form-group">
                                        <label class="bold font14" for="Password1"> تاكيد كلمة المرور الجديدة<span style="color: #ff3333;margin: auto 20px;"> * </span>  </label>
                                        <div class="password-cont">
                                            <input type="password" class="form-control" id="Password3" aria-describedby="emailHelp" placeholder="الرجاء ادخال كلمة المرور الجديدة">
                                            <i class="fa fa-eye color-gray" id="signInShowPassword2"></i>
                                        </div>
                                    </div> 
                        
                    
                                </div>
                            </div>

                            
            

                            <div class="d-flex align-items-baseline">
                                <button class="button1 mt-3 material-button" >حفظ التغييرات </button>
                            </div>

                        </form>

        

            </div>
</template>

<script>
export default {
    name: 'VendorDashboardChangePass',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>