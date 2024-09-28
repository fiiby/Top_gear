<template>
  <div class="home row">
    <div class="col-2">
    <SidebarCom :carsData="carsData.cars" />
    </div>
    <div class="col-10">
      <CarsCom :carsData="carsData.cars" />
    </div>
  </div>

</template>


<script >
import SidebarCom from '@/components/sidebar/SidebarCom.vue';
import CarsCom from '@/components/cars/CarsCom.vue';
import carsData from '@/components/json/cars.json';

export default {
name:'HomeView',
components: {
    SidebarCom,
    CarsCom,

  },

data() {
  return {

  carsData,
    };
  },
 
};
</script>

<style scoped> /* not added scss */

.each-car {
padding: 10px;
margin-bottom: 10px;
border: 10px solid #eee;
width: 400px;

}
img {
  width: 300px;
  height: 200px;
  margin-bottom: 10px;

}

</style>