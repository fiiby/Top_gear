<!-- 
<template>
  <div class="justify-content-evenly row" v-if="carsData && carsData.length"  >

    <div class="col-4 each-car" v-for="car  in carsData" :key="car.id">

      <!-- <img :src="`.@components/imagesFolder/${car.name}/${car.mainImage}`" class="rounded d-block mx-auto" alt="Car Image" /> -->
       <!-- <img :src="getImageUrl(car.name, car.mainImage)" class="rounded d-block mx-auto" alt="Car Image" /> -->
      <!-- <h3 class="text-center">{{ car.name }} </h3> -->
      <!-- <h3 class="float-end">{{ car.model }} </h3> -->

      <!-- <div class="float-start">
        <button type="button" class="btn btn-light">${{ car.price }}</button>
      </div>
      <div class="float-end">
        <router-link :to="{
        name: 'CarInfo',
        params:{carName: car.name, carFileId: car.fileNumber}
        }">
          <button type="button" class="btn btn-success">More Details</button>
        </router-link>
      </div>
    </div>
  </div> 

</template>  -->


<!-- <script >

export default {
  name:'CarsCom',
  props: {
    carsData: {
      type: Array,
      required: true, // Expecting an array of cars -->
    <!-- },
  },
  // methods: {
  //   getImageUrl(name, mainImage) {
  //     // Try to load the image statically from the assets folder
  //     try {
  //       return new URL(`../assets/mainImage/${name}/${mainImage}`, import.meta.url).href;
  //     } catch (e) {
  //       // If the image is not found, return a default or fallback image
  //       console.error(`Error loading image: ${name}/${mainImage}`, e); // Log the error

  //       return new URL('../assets/mainImage/2023_Honda_CR-V.jpg', import.meta.url).href; // You can add a default image here
      

  //     }
  //   }
  // }
// }
methods: {
  getImageUrl(name, mainImage) {
    try {
    // return require(`../src/imageFolder/${name}/${mainImage}`);
    return new URL(`../src/imagesFolder/${name}/${mainImage}`)
  } catch (e) {
    console.error(`Error loading image: ${name}/${mainImage}`, e);
    // return require('../src/imagesFolder/2023_Honda_CR-V.jpg');
    return new URL('../src/imagesFolder/2023_Honda_CR-V.jpg', import.meta.url).href; 
   
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

} -->

<!-- </style>   --> 





<template>
  <!-- v-if="carsData && carsData.length" -->
  <div class="justify-content-evenly row" >
    <div class="col-4 each-car" v-for="car in carsData" :key="car.id">

      <!-- <img :src="('@/src/assets/images/ford-focus.jpg')" class="rounded d-block mx-auto" alt="Car Image" /> -->

       <img :src="getImageUrl(car.image)" class="rounded d-block mx-auto" alt="Car Image" />
                                   
       <!-- <div v-if="car.images && car.images.length">
        <img v-for="(image, index) in car.images" :key="index" :src="getImageUrl(car.name, image)" class="rounded d-block mx-auto" alt="Car Image" />
      </div> -->

      <h3 class="text-center">{{ car.name }} </h3>

      <div class="float-start">
        <button type="button" class="btn btn-light">${{ car.price }}</button>
      </div>
      <div class="float-end">
        <router-link :to="{ name: 'CarInfo', params: { carName: car.name, carFileId: car.fileNumber } }">
          <button type="button" class="btn btn-success">More Details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarsCom',
  props: {
    carsData: {
      type: Array,
      required: true, // Expecting an array of cars
    },

    //methods with requir:
//     methods: {
//     getImage(image) {
//       try {
//         // Assuming images are in `src/assets/images/`
//         return require(`@/assets/images/${image}`);
//       } catch (e) {
//         console.error(`Error loading image: ${image}`, e);
//         // Provide a fallback image in case the original fails to load
//         return require('@/assets/images/default_car.jpg');
//       }
//     },
//   }
// }
// };
// with url:
methods: {
    getImageUrl(image) {
      try {
        // Assuming images are stored in `src/assets/images/`
        return new URL(`../assets/images/${image}`, import.meta.url).href;
      } catch (e) {
        console.error(`Error loading image: ${image}`, e);
        // Provide a fallback image if the original fails to load
        return new URL('../assets/images/default_car.jpg', import.meta.url).href;
      }
    },
  },
}
};
</script>


<style scoped>
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
