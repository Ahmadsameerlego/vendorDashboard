<template>
  <div>
    <div class="table-cont p-2">
      <div class="row align-items-center">
        <div class="dash-title col-md p-0 mt-0">
          <h6 class="bold">الاعدادات</h6>
          <p class="mb-1">الاعدادات / إعدادات الملف الشخصي</p>
        </div>
      </div>

      <!-- start tabs -->

      <!-- start tabs header -->
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            >البيانات الشخصية</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-market-tab"
            data-toggle="pill"
            href="#pills-market"
            role="tab"
            aria-controls="pills-market"
            aria-selected="true"
            >بيانات المتجر</a
          >
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            >مواعيد العمل</a
          >
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-charge-tab"
            data-toggle="pill"
            href="#pills-charge"
            role="tab"
            aria-controls="pills-charge"
            aria-selected="false"
            >وقت التحضير</a
          >
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            id="bank-data-tab"
            data-toggle="pill"
            href="#bank-data"
            role="tab"
            aria-controls="bank-data"
            aria-selected="false"
            >البيانات البنكية</a
          >
        </li>

          <li class="nav-item">
          <a
            class="nav-link"
            id="reserve-tab"
            data-toggle="pill"
            href="#reserve"
            role="tab"
            aria-controls="reserve"
            aria-selected="false"
            >الحجوزات</a
          >
        </li>

        <li class="nav-item"></li>
      </ul>
      <!-- end tabs header -->
      <!-- start tabs content -->
      <div class="tab-content" id="pills-tabContent">
        <!-- البيانات الشخصة -->
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <!-- end tabs -->
          <form ref="userData" @submit.prevent="updateUser" class="white-bg round7 mb-3 mt-2 p-3">
            <h6 class="bold border-bottom pt-3 pb-3 mb-4">
              بيانات مدير النظام
            </h6>

            <div class="form-group">
              <div class="row align-items-center justify-content-start">
                <div class=" ">
                  <label for="file1">
                    <div class="input-img-cont">
                      <img
                        :src="image"
                        id="view1"
                        class="input-img"
                        alt=""
                        width="70"
                        height="70"
                      />
                      <img
                        src="@/assets/imgs/icons/camera.png"
                        class="input-img-camera"
                        alt=""
                      />
                    </div>
                    <input
                      onchange="viewImg(event ,'#view1')"
                      class="d-none"
                      type="file"
                      name="image"
                      id="file1"
                    />
                  </label>
                </div>
                <div class="col">
                  <h6 class="bold font14">الصورة الشخصية</h6>
                  <!-- <p class="font12 color-gray">يرجي رفع صورة مقاس 200 * 200</p> -->
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                اسم مدير النظام
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="اسم مدير النظام"
                v-model="manager_name"
                name="manager_name"
              />
            </div>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                رقم الهوية
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="رقم الهوية"
                v-model="identity_number"
                name="identity_number"
              />
            </div>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                رقم الهاتف
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <div class="row">
                <div class="col-4 col-md-2 p-1 pr-0">
                  <select class="form-control" v-model="country_key" name="country_key">
                    <option selected disabled> {{   country_key }} </option>
                  </select>
                </div>
                <div class="col pt-1 pb-1 pl-0 pr-1">
                  <input
                    type="tel"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="رقم الهاتف"
                    v-model="phone"
                    name="phone"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                البريد الالكتروني
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="البريد الالكتروني"
                v-model="email"
                name="email"
              />
            </div>
           

            <button class="button1 w-100 mt-3 material-button">
              <span v-if="!userDisabled">حفظ</span>
                <div v-else class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </form>

          <!-- <div class="d-flex align-items-baseline">
            <router-link to="/changePassword" class="change-pass"
              >تعديل كلمة المرور</router-link
            >
          </div> -->
        </div>

        <!-- البيانات المتجر -->
       <div class="tab-pane fade   m-auto round10 p-3 form-cont"
          id="pills-market"
          role="tabpanel"
          aria-labelledby="pills-market-tab">
      <form ref="storeData" @submit.prevent="register" class="container">
        <h6 class="bold border-bottom pt-3 pb-3 mb-4">بيانات المتجر</h6>

        <div class="form-group">
          <div class="row align-items-center justify-content-start">
            <div class=" ">
              <label for="file1">
                <div class="input-img-cont">
                  <img
                    :src="logo"
                    id="view1"
                    class="input-img"
                    alt=""
                  />
                  <img
                    src="@/assets/imgs/icons/camera.png"
                    class="input-img-camera"
                    alt=""
                  />
                </div>
                <input
                  onchange="viewImg(event ,'#view1')"
                  class="d-none"
                  type="file"
                  id="file1"
                  name="logo"
                />
              </label>
            </div>
            <div class="col">
              <h6 class="bold font14">صورة الشعار</h6>
              <!-- <p class="font12 color-gray">يرجي رفع صورة مقاس 200 * 200</p> -->
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="bold font14 d-block" for="coverImgcont">
            <div class="mb-2">
              صورة الغلاف
              <span style="color: #ff3333; margin: auto 20px"> * </span>
            </div>

            <input
              type="file"
              onchange="viewImg(event ,'#coverImg')"
              class="d-none w-100"
              id="coverImgcont"
              name="cover"
            />
            <div
              class="row transition img-input align-items-center border w-100 p-2 round5"
            >
              <div class="col img-input-title">الرجاء ارفاق صورة الغلاف</div>
              <div class="col text-align2">
                <img
                  id="coverImg"
                  style="max-width: 120px"
                  :src="cover"
                  alt=""
                />
              </div>
            </div>
          </label>
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            رقم الهاتف
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <div class="row">
            <div class="col-4 col-md-2 p-1 pr-0">
              <select class="form-control" name="store_country_key" v-model="store_country">
                <option value="" selected hidden disabled> {{ store_country }} </option>
                <option v-for="count in countries" :value="count.code" :key="count.id"> {{ count.code }} </option>
              </select>
            </div>
            <div class="col pt-1 pb-1 pl-0 pr-1">
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="رقم الهاتف"
                name="store_phone"
                v-model="store_phone"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            الاسم باللغة العربية
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="الاسم باللغة العربية"
            name="name_ar"
            v-model="name_ar"
          />
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            الاسم باللغة الانجليزية
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="الاسم باللغة الانجليزية "
            name="name_en"
            v-model="name_en"
          />
        </div>
        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            الوصف باللغة العربية
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <textarea
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="الوصف باللغة العربية"
            name="description_ar"
            v-model="description_ar"
          />
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            الوصف باللغة الانجليزية
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <textarea
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="الوصف باللغة الانجليزية"
            name="description_en"
            v-model="description_en"
          />
        </div>
        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            تحديد نوع المحل
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <div>
            <MultiSelect v-model="selectedCategories" :options="categories" optionLabel="name" placeholder="اختر نوع المحل"
    :maxSelectedLabels="3" class="w-full md:w-20rem" />

          </div>
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            رقم السجل التجاري
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="رقم السجل التجاري "
            name="commercial_id"
            v-model="commercial_id"
          />
        </div>
        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            اسم السجل التجاري
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="اسم السجل التجاري "
            name="commercial_name"
            v-model="commercial_name"
          />
        </div>
<div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            تاريخ الانتهاء
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <!-- <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            style="direction:rtl"
            aria-describedby="emailHelp"
            placeholder="commercial_expired "
            name="commercial_id"
          /> -->
          <Calendar v-model="expired_date" class="form-control" />

        </div>

        <div class="form-group">
          <label class="bold font14 d-block" for="coverImgcont3">
            <div class="mb-2">
              صورة السجل التجاري
              <span style="color: #ff3333; margin: auto 20px"> * </span>
            </div>

            <input
              type="file"
              onchange="viewImg(event ,'#coverImg2')"
              class="d-none w-100"
              id="coverImgcont3"
              name="commercial_image"
            />
            <div
              class="row transition img-input align-items-center border w-100 p-2 round5"
            >
              <div class="col img-input-title">
                الرجاء ارفاق صورة السجل التجاري
              </div>
              <div class="col text-align2">
                <img
                  id="coverImg2"
                  style="max-width: 120px"
                  :src="commercial_image"
                  alt=""
                />
              </div>
            </div>
          </label>
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            الرقم الضريبي
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="الرقم الضريبي "
            name="tax_number"
            v-model="tax_number"
          />
        </div>

         <div class="form-group">
          <label class="bold font14 d-block" for="coverImgcont4">
            <div class="mb-2">
              صورة الرقم الضريبي
              <span style="color: #ff3333; margin: auto 20px"> * </span>
            </div>

            <input
              type="file"
              onchange="viewImg(event ,'#coverImg3')"
              class="d-none w-100"
              id="coverImgcont4"
              name="tax_image"
            />
            <div
              class="row transition img-input align-items-center border w-100 p-2 round5"
            >
              <div class="col img-input-title">
                الرجاء ارفاق صورة الرقم الضريبي
              </div>
              <div class="col text-align2">
                <img
                  id="coverImg3"
                  style="max-width: 120px"
                  :src="tax_image"
                  alt=""
                />
              </div>
            </div>
          </label>
        </div>

         <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            القيمة المضافة
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
            <select name="" id="" class="form-control" v-model="added_value">
              <option :value="added_value" disabled hidden selected>{{added_value}}</option>
              <option v-for="added in added_values" :key="added.id" :value="added.id"> {{ added.value }} </option>
            </select>
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            الدولة
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
            <select name="" v-model="country_id" id="" class="form-control" @change="getCitiesFromID">
              <option value="" selected disabled hidden> {{ country_name }} </option>
              <option :value="value.id" v-for="value in countries" :key="value.id"> {{ value.name}}</option>
            </select>
        </div>

         <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            المدينة
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <!-- {{  cityName }} -->
            <select name="city_id" id="" v-model="city_id" class="form-control" >
              <option :value="city_id" selected disabled hidden>{{ cityName }}</option>
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{  city.name  }}
              </option>
            </select>
        </div>

         
        <div class="form-group">
          <h3>العنوان :</h3>
          {{ address }}
         <GMapAutocomplete
                  placeholder="ابحث عن موقعك"
                  @place_changed="onPlaceChanged"
                  class="form-control"
                  v-model="address"
                >
              </GMapAutocomplete>
          <br />
          <!-- <div id="map" style="width: 100%; height: 250px"></div> -->
          <!-- <input type="hidden" name="lat" id="lat" value="30" />
          <input type="hidden" name="long" id="lng" value="30" /> -->
           <GMapMap
                :center="locations"
                :zoom="11"
                map-type-id="terrain"
                style=" height: 300px"
            >
              
            <GMapMarker
              :position="locations"
              :clickable="true"
              :draggable="true"
                @mouseover="onMarkerDragEnd($event)"
            />
            </GMapMap>

        </div>


          <button class="button1 w-25 mx-auto d-flex justify-content-center mt-3 material-button">

             <span v-if="loading">
              استكمال
             </span> 
             <div v-else class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>

          </button>
      </form>
    </div>

        <!-- مواعيد العمل -->
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
           <section id="checks" class="white-bg round7 mt-4 mb-4 p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="font-weight-bold">ايام الاسبوع</h6>
                  <h6 class="font-weight-bold" style="margin-left: 50px">
                    متاح / غير متاح
                  </h6>
                </div>
              </div>
            </div>
            <hr />

            <form class="">
              <div class="row">
                <div class="col-lg-12">
                  <section class="items">
                    <div
                      class="item d-flex justify-content-between align-items-baseline"
                    >
                      <h6 class="font-weight-bold">السبت</h6>
                      <label class="switch mt-4">
                        <input type="checkbox" v-model="satCheck" />
                        <span class="slider round"></span>
                      </label>

                      <div class="d-flex" v-if="isSatCheck" style="transform: translateY(-30px)">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            @select="setDay"
                            @change="setDay"
                            v-model="satFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="satTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاحد</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="sunCheck"  />
                        <span class="slider round"></span>
                      </label>
                      <div v-if="isSunCheck" class="d-flex" style="transform: translateY(-30px)"  >
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="sunFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="sunTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاثنين</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="monCheck"  />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="iMonCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="monFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="monTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الثلاثاء</h6>
                      <label class="switch">
                        <input type="checkbox"  v-model="thuCheck" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="isThuCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="tueFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="tueTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الاربعاء</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="wedCheck"/>
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="isWedCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="wedFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="wedTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الخميس</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="tueCheck" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="isTueCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="thFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="thTo"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="item d-flex justify-content-between align-items-center"
                    >
                      <h6 class="font-weight-bold">الجمعة</h6>
                      <label class="switch">
                        <input type="checkbox" v-model="fridCheck" />
                        <span class="slider round"></span>
                      </label>
                      <div class="d-flex" style="transform: translateY(-30px)" v-if="isFriCheck">
                        <div>
                          <label for="">من</label>
                          <input
                            type="time"
                            class="form-control"
                            placeholder="من"
                            v-model="friFrom"
                          />
                        </div>

                        <div class="mx-4">
                          <label for="">الى</label>

                          <input
                            type="time"
                            class="form-control"
                            placeholder="الى"
                            v-model="friTo"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <button class="button1 mt-3 material-button" @click.prevent="storeTimes">
               <span v-if="loadingTimes">
              استكمال
             </span> 
             <div v-else class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
              </button>
            </form>
          </section>
        </div>

        <!-- وقت التحضير -->
        <div
          class="tab-pane fade"
          id="pills-charge"
          role="tabpanel"
          aria-labelledby="pills-charge-tab"
        >
          <form
            
            class="white-bg round7 mb-3 mt-2 p-3"
          >
            <h6 class="bold border-bottom pt-3 pb-3 mb-4">بيانات المتجر</h6>

            <div class="form-group">
              <label class="bold font14" for="exampleInputEmail1">
                متوسط وقت التحضير
                <span style="color: #ff3333; margin: auto 20px">
                  *
                </span></label
              >
                  <input
                    type="number"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="متوسط وقت التحضير (بالدقائق)"
                    v-model="avg_preparation_time"
                  />
            </div>

            <button class="button1 w-100 mt-3 material-button" @click.prevent="storePreperation">
         <span v-if="loadingPreper">
              تاكيد
             </span> 
             <div v-else class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
              </div>
      </button>
          </form>
        </div>
        <!-- البيانات البنكية -->
        <div
          class="tab-pane fade"
          id="bank-data"
          role="tabpanel"
          aria-labelledby="bank-data-tab"
        >
          <div class="m-auto round10 p-3 pl-4 pr-4 form-cont">
      <form ref="bankData" @submit.prevent="StoreBank">
        <div class="">
        <h6 class="bold border-bottom pt-3 pb-3 mb-3">بيانات الحساب البنكي</h6>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            اسم البنك
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="اسم البنك "
            name="bank_name"
            v-model="bank_name"
          />
        </div>

         <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            اسم المستفيد
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="اسم المستفيد "
            name="beneficiary_name"
            v-model="beneficiary_name"
          />
        </div>

        <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            رقم الحساب
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="رقم الحساب "
            name="account_number"
            v-model="account_number"
          />
        </div>
         <div class="form-group">
          <label class="bold font14" for="exampleInputEmail1">
            رقم الايبان
            <span style="color: #ff3333; margin: auto 20px"> * </span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="رقم الايبان "
            name="iban_number"
            v-model="iban_number"
          />
        </div>
      </div>

      <button class="button1 w-100 mt-3 material-button">
         <span v-if="bankLoad">
              تاكيد
             </span> 
             <div v-else class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
              </div>
      </button>
      </form>
    </div>
        </div>

         <!-- البيانات البنكية -->
        <div
          class="tab-pane fade"
          id="reserve"
          role="tabpanel"
          aria-labelledby="reserve-tab"
        >
          <div class="m-auto round10 p-3 pl-4 pr-4 form-cont">
      <form ref="bankData" @submit.prevent="StoreBank">
        <div class="">
        <h6 class="bold border-bottom pt-3 pb-3 mb-3">يمكنك فتح وغلق الحجوزات من هنا</h6>
<div
                      class="item d-flex justify-content-between align-items-baseline"
                    >
                      <label class="switch mt-4">
                        <input type="checkbox" v-model="reserveStatus" @change="changeStatus" />
                        <span class="slider round"></span>
                      </label>

                     
                    </div>
        
      </div>

     
      </form>
    </div>
        </div>
      </div>
      <!-- end tabs header -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MultiSelect from 'primevue/multiselect';
import Calendar from 'primevue/calendar';
import moment from 'moment'

// import moment from 'moment'

export default {
  name: "VendorDashboardSettingsView",

  data() {
    return {
      user: {},
      image: '',
      manager_name: '',
      email: '',
      phone: '',
      country_key: '',
      identity_number: '',
      reserveStatus : null ,
       locations:
      {
          lat: 0,
          lng: 0
      },
      address: '',
      countries: [],
      country_name: '',
      country_id : '',
      categories: [],
      selectedCategories: [],
      cover: '',
      logo: '',
      name_ar: '',
      name_en: '',
      description_ar: '',
      description_en: '',
      store_phone  : '',
      store_country: '',
      commercial_name: '',
      cities : [],
      selectedCity : null,
      cityName : '',
      city_id: '',
      tax_image : '',
      tax_number : '',
      expired_date : '',
      commercial_image: '',
      commercial_id : '',
      added_values: [],
      added_value : '',

      // times data 
      satFrom: null,
      satTo : null ,
      satCheck: null,
      isSatCheck: false,
      isThuCheck: false,
      thuCheck: null,
      monCheck: null,
      iMonCheck: false,
      sunCheck: null,
      isSunCheck: false,
      isFriCheck: false,
      fridCheck: null,
      isTueCheck: false,
      tueCheck: null,
      isWedCheck: false,
      wedCheck: null,
      sunFrom: null,
      sunTo: null,
      friFrom: null,
      friTo: null,
      thTo: null,
      thFrom: null,
      wedTo: null,
      wedFrom: null,
      tueTo: null,
      tueFrom: null,
      monFrom: null,
      monTo: null,
      // bank data 
      iban_number: '',
      account_number: '',
      beneficiary_name: '',
      bank_name: '',
      avg_preparation_time: '',
      // disables 
      userDisabled: false,
      loading: true,
      loadingTimes: true,
      apiTimes: [], 
            loadingPreper : true,
            bankLoad : true,

    };
  },

  methods: {

   async changeStatus() {
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };

      const fd = new FormData()
       
      await axios.post('store/switch-reservation', fd, {headers})
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: 'تم التغيير بنجاح', life: 4000 });
           
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
      } )
    },
    // ger added_values 
    async getAddedValues() {
      await axios.get('added-values')
        .then((res) => {
          this.added_values = res.data.data;
      } )
    },
    // get user data 
    async getUser() {
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
      await axios.get(`store/show-profile`, { headers })
        .then((res) => {
          const user = res.data.data;
          // store 
          this.cover = user.cover;
          this.logo = user.logo;
          this.store_phone = user.store_phone.phone;
          this.store_country = user.store_phone.country_key;
          this.name_ar = user.name_details.name_ar;
          this.name_en = user.name_details.name_en;
          this.description_ar = user.desc_details.description_ar;
          this.description_en = user.desc_details.description_en;
          this.selectedCategories = user.categories;
          this.commercial_name = user.commercial_data.name;
          this.commercial_image = user.commercial_data.image;
          this.commercial_id = user.commercial_data.id;
          this.expired_date = user.commercial_data.expired_date;
          this.tax_number = user.tax_data.number;
          this.tax_image = user.tax_data.image;
          this.selectedCity = user.city;
          this.cityName = user.city.name;
          this.city_id = user.id;
          this.added_value = user.added_value;
          this.locations.lng = user.address_data.long;
          this.locations.lat = user.address_data.lat;
          this.address = user.address_data.address;
          this.apiTimes = user.times;
          this.country_name = user.country.name;
          this.country_id = user.country.id;
          console.log(this.apiTimes)
        // Map API data to component data properties
      this.apiTimes.forEach(time => {
        switch (time.day.toLowerCase()) {
          case "saturday":
            this.satFrom = time.from;
            this.satTo = time.to;
            this.satCheck = true
            break;
          case "sunday":
            this.sunFrom = time.from;
            this.sunTo = time.to;
            this.sunCheck = true
            break;
          case "monday":
            this.monFrom = time.from;
            this.monTo = time.to;
            this.monCheck = true
            break;
          case "tuesday":
            this.tueFrom = time.from;
            this.tueTo = time.to;
            this.thuCheck = true
            break;
          case "wednesday":
            this.wedFrom = time.from;
            this.wedTo = time.to;
            this.wedCheck = true;
            break;
          case "thursday":
            this.thFrom = time.from;
            this.thTo = time.to;
            this.tueCheck = true;
            break;
          case "friday":
            this.friFrom = time.from;
            this.friTo = time.to;
            this.fridCheck = true;
            break;
        }
      });
          console.log(this.times)
          // bank 
          this.bank_name = user.bank_data.bank_name;
          this.beneficiary_name = user.bank_data.beneficiary_name;
          this.account_number = user.bank_data.account_number;
          this.iban_number = user.bank_data.iban_number;
          //user
          this.image = user.image;
          this.manager_name = user.manager_name;
          this.email = user.email;
          this.phone = user.phone.phone;
          this.country_key = user.phone.country_key;
          this.identity_number = user.identity_number;
          this.avg_preparation_time = user.avg_preparation_time;
      } )
    },
    geolocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locations = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    // get new value after dragged 
    onMarkerDragEnd(event) {
      // get new lat lang value 
      const newLat = event.latLng.lat()
      const newLng = event.latLng.lng()
      this.locations = {
        lat: newLat,
        lng: newLng
      }

      // get format_address 
      const latLng = event.latLng
      const geocoder = new window.google.maps.Geocoder()
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === 'OK') {
          this.address = results[0].formatted_address
        } else {
          console.error('Geocode was not successful for the following reason: ' + status)
        }
      })

    },

    onPlaceChanged(place) {
      if (place.geometry) {
        this.locations = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        this.address = place.formatted_address;
      }
    },
    async getCountries() {
      await axios.get('countries')
        .then((res) => {
          this.countries = res.data.data
        })
    },
    async getCities() {
      await axios.get('cities')
        .then((res) => {
          this.cities = res.data.data
        })
    },
    async getcategories() {
      await axios.get('categories')
        .then((res) => {
          this.categories = res.data.data
        })
    },


    // update user info 
    async updateUser() {
      this.userDisabled = true;
       const token = localStorage.getItem('token');  
        const headers = {
          Authorization: `Bearer ${token}`,
        };

      const fd = new FormData(this.$refs.userData)
      fd.append('country_key', this.country_key)
       
      await axios.post('store/update-user-info', fd, {headers})
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
           
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.userDisabled = false;
      } )
    },
    // update store info 
    async register() {
      this.loading = false;
      const fd = new FormData(this.$refs.storeData)
      var cats = [];
      if (this.selectedCategories.length > 0) { 
        for (let i = 0; i < this.selectedCategories.length; i++){
          cats.push(this.selectedCategories[i].id)
        }
      }
      // fd.append('categories', JSON.stringify(cats))
      fd.append('address', this.address)
      fd.append('lat', this.locations.lat)
      fd.append('long', this.locations.lng)
      fd.append('country_id', this.country_id)

      fd.append('commercial_expired', moment(this.expired_date).format('YYYY-MM-DD'))
      fd.append('added_value', this.added_value)
      await axios.post('store/update-store-info', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          lang : 'ar'
        }
      })

        .then((res) => {
          if (res.data.key === 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
          
          } else {
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
          this.loading = true;
        })
    },
    // update times 
    async storeTimes() {
      this.loadingTimes = false;
      const fd = new FormData()
      const filteredTimes = this.times.filter(item => item !== undefined) || this.times;

      // Append filteredTimes to fd
      if (filteredTimes) {
              fd.append('times', JSON.stringify(filteredTimes));
      }

      await axios.post('store/update-store-times', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          lang : 'ar'
        }
      })
     
        .then((res) => {
          if (res.data.key === 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
      
         
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.loadingTimes = true;
      } )
    },
    // preperation time
     async storePreperation() {
      this.loadingPreper = false;
      const fd = new FormData()
      fd.append('avg_preparation_time', this.avg_preparation_time)

      await axios.post('store/update-preparation-time', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          lang : 'ar'
        }
      })
     
        .then((res) => {
          if (res.data.key === 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
      
         
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.loadingPreper = true;
      } )
    }, 
    // bank data
     async StoreBank() {
      this.bankLoad = false;
      const fd = new FormData(this.$refs.bankData)

      await axios.post('store/update-bank-data', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          lang : 'ar'
        }
      })
     
        .then((res) => {
          if (res.data.key === 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
      
         
          } else {
          this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
        this.bankLoad = true;
      } )
    }, 


    
  convertTo12Hour(time) {
  const [hour, minute] = time.split(':');
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12; // Convert '0' hour to '12'
  return `${hour12}:${minute} ${ampm}`;
},
  },
  
  mounted() {
    this.getUser();
    this.getAddedValues();
      this.getCountries();
    this.getcategories();
    this.geolocation();
    this.getCities();


  },
  components: {
      Calendar,
      MultiSelect
  },
  watch: {
    satCheck() {
      if (this.satCheck == true) {
        this.isSatCheck = true;    
      } 
      else {
        this.isSatCheck = false;
      }
    },
    sunCheck() {
      if(this.sunCheck  == true) this.isSunCheck = true ;
      else this.isSunCheck = false ;
    },
    monCheck() {
      if(this.monCheck  == true) this.iMonCheck = true ;
      else this.iMonCheck = false ;
    },
    thuCheck() {
      if(this.thuCheck  == true) this.isThuCheck = true ;
      else this.isThuCheck = false ;
    },
    wedCheck() {
      if(this.wedCheck  == true) this.isWedCheck = true ;
      else this.isWedCheck = false ;
    },
    tueCheck() {
      if(this.tueCheck  == true) this.isTueCheck = true ;
      else this.isTueCheck = false ;
    },
    fridCheck() {
      if(this.fridCheck  == true) this.isFriCheck = true ;
      else this.isFriCheck = false ;
    },
  },

  computed: {
    times() {
      return [
         this.satFrom !== null && this.satTo != null ? { day: "saturday", from: this.convertTo12Hour(this.satFrom), to: this.convertTo12Hour(this.satTo )} : undefined,       
          this.sunFrom !== null && this.sunTo != null ?  {day: "sunday" ,from: this.convertTo12Hour(this.sunFrom),to : this.convertTo12Hour(this.sunTo)} : undefined ,        
          this.monFrom !== null && this.monTo != null ?  {day: "Monday" ,from: this.convertTo12Hour(this.monFrom),to : this.convertTo12Hour(this.monTo)} : undefined ,        
          this.tueFrom !== null && this.tueTo != null ?  {day: "Tuesday" ,from: this.convertTo12Hour(this.tueFrom),to : this.convertTo12Hour(this.tueTo)} : undefined ,        
          this.wedFrom !== null && this.wedTo != null ?  {day: "Wednesday" ,from: this.convertTo12Hour(this.wedFrom),to : this.convertTo12Hour(this.wedTo)} : undefined ,        
          this.thFrom !== null && this.thTo != null ?  {day: "Thursday" ,from: this.convertTo12Hour(this.thFrom),to : this.convertTo12Hour(this.thTo)} : undefined ,        
          this.friFrom !== null && this.friTo != null ?  {day: "Friday" ,from: this.convertTo12Hour(this.friFrom),to : this.convertTo12Hour(this.friTo)} : undefined ,        
       
      ]
    }
  },
};
</script>

<style lang="scss" scoped></style>
