<!--<template>
    <div class="justify-content-evenly row">

        <div class="col-4  each-car" v-for="(car,i) in carsData" :key="i">

            <img :src="require(`@/assets/${car.image}`)" class="rounded d-block mx-auto" />
          

                <h2 class="text-center">{{car.brand }} {{ car.model }}</h2>
            <div class="float-start"><button type="button" class="btn btn-light">${{car.price}}</button></div>
            <div class="float-end">
                <router-link to="/About">
                <button type="button" class="btn btn-primary">
                    More Details</button>
                </router-link>
                </div>
        </div>

    </div>

</template> -->

<!-- <template> -->
 <!-- /**
 /*v-if="carsData && carsData.length*/" */ -->
 
  <!-- <div class="justify-content-evenly row" >

    <div class="col-4 each-car" v-for="(car, i) in carsData" :key="i">

      Use require() for local image assets -->
      <!-- <img :src="getImageUrl(car.name, car.image) ? require(`@/assets/${car.image}`) : ''" class="rounded d-block mx-auto" /> -->
      <!-- <img :src="require(`./../../assets/image/${car.name}+
${car.mainImage}`)"  alt="" class="rounded d-block mx-auto" /> -->

      <!-- <img :src="getImageUrl(cars.imageName)" class="rounded d-block mx-auto" alt="Car Image" />
      <h2 class="text-center">{{ cars.brand }} {{ cars.model }}</h2>
      <div class="float-start">
        <button type="button" class="btn btn-light">${{ carsprice }}</button>
      </div>
      <div class="float-end">
        <router-link to="/About">
          <button type="button" class="btn btn-success">More Details</button>
        </router-link>
      </div>
    </div>
  </div> -->
  <!-- Fallback message if carsData is empty -->
  <!-- <div v-else>
    <p>No cars available</p>
  </div> -->
<!-- </template>


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
    getImageUrl(cars) {
      // Try to load the image statically from the assets folder
      try {
        return new URL(`../src/assets/image/${cars}`, import.meta.url).href;
      } catch (e) {
        // If the image is not found, return a default or fallback image
        return new URL('../src/assets/image/2023_Honda_CR-V.jpg', import.meta.url).href; // You can add a default image here
      }
    }
  }
}
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

} -->

<!-- </style>  -->

<template>
  <div class="justify-content-evenly row">
    <div class="col-4 each-car" v-for="(car, i) in carsData" :key="i">
      <!-- Correct usage of getImageUrl with car.imageName -->
      <img :src="getImageUrl(car.imageName)" class="rounded d-block mx-auto" alt="Car Image" />
      
      <h2 class="text-center">{{ car.brand }}</h2>
      <!-- <h3 > {{ car.model }}</h3> -->
      <div class="float-start">
        <button type="button" class="btn btn-light">${{ car.price }}</button>
      </div>
      <div class="float-end">
        <!-- <router-link to="/CarDetails">
          <button type="button" class="btn btn-success">More Details</button>
        </router-link> -->

        <router-link :to="`/CarDetailsView/${i}`">  <!--Link to details page -->
          <a><button type="button" class="btn btn-success">More Details</button></a>
        </router-link>  
    </div>
    </div>
  </div>

  <!-- Fallback message if carsData is empty -->
  <!-- <div v-else>
    <p>No cars available</p>
  </div> -->
</template>

<script>
export default {
  name: 'CarsCom',
  props: {
    carsData: {
      type: Array,
      required: true, // Expecting an array of cars
    },
  },
  methods: {
    getImageUrl(imageName) {
      // Construct the image URL using import.meta.url for Vite
      try {
        return new URL(`../assets/image/${imageName}`, import.meta.url).href;
      } catch (e) {
        // If the image is not found, return a default or fallback image
        return new URL('../assets/image/2023_Honda_CR-V.jpg', import.meta.url).href;
      }
    }
  }
}
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