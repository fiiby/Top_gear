<template>
  <div class="home row">
    <div class="col-2">
    <SidebarCom :carsData="carsData" />
    </div>
    <div class="col-10">
      <CarsCom :carsData="carsData" />
    </div>
  </div>

</template>


<script >
import SidebarCom from '@/components/sidebar/SidebarCom.vue';
import CarsCom from '@/components/cars/CarsCom.vue';
import carsDataJson from '@/components/json/cars.json';

export default {
name:'HomeView',
components: {
    SidebarCom,
    CarsCom,
  },

data() {
  return {
  carsData: carsDataJson[0].carsData || [], //initialize data
  };
},
 mounted() {
  console.log(this.carsData); // debugging
 },
    
};
</script>

<style scoped> /* not added scss */

</style>