<template>
    <div class="home row">
      <div class="col-2">
        <SidebarCom/>
        </div>

        <div class="col-10">
          <CarsCom />
        </div>


</div>
</template>

<script >
import SidebarCom from '@/components/sidebar/SidebarCom.vue';
import CarsCom from '@/components/cars/CarsCom.vue';

export default {
  name:'HomeView',
  components:{
  SidebarCom,
  CarsCom,
  }
}
</script>