
<template>
  <div class="justify-content-evenly row" v-if="carsData && carsData.length"  >

    <div class="col-4 each-car" v-for="car  in carsData" :key="car.id">


       <img :src="getImageUrl(car.imageName, car.mainImage)" class="rounded d-block mx-auto" alt="Car Image" />
      <h3 class="text-center">{{ car.brand }} </h3>
      <!-- <h3 class="float-end">{{ car.model }} </h3> -->

      <div class="float-start">
        <button type="button" class="btn btn-light">${{ car.price }}</button>
      </div>
      <div class="float-end">
        <router-link to="/About">
          <button type="button" class="btn btn-success">More Details</button>
        </router-link>
      </div>
    </div>
  </div> 

</template> 


<script >

export default {
  name:'CarsCom',
  props: {
    carsData: {
      type: Array,
      required: true, // Expecting an array of cars
    },
  },
  methods: {
    getImageUrl(imageName, mainImage) {
      // Try to load the image statically from the assets folder
      try {
        return new URL(`../assets/mainImage/${imageName}/${mainImage}`, import.meta.url).href;
      } catch (e) {
        // If the image is not found, return a default or fallback image
        console.error(`Error loading image: ${imageName}/${mainImage}`, e); // Log the error

        return new URL('../assets/mainImage/2023_Honda_CR-V.jpg', import.meta.url).href; // You can add a default image here
      

      }
    }
  }
}
</script >

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
