<template>
      <div class="justify-content-evenly row">
        <div class="col-8">
          <div>
            <h2>hi</h2>
            <!-- <img :src="getImageUrl(carsDataInfo.name, carsDataInfo.mainImage)" class="rounded d-block mx-auto mainImage" alt="Car Image" /> -->
            <img src="./components/assets/imagesFolder/2023_Honda_CR-V.jpg" class="rounded d-block mx-auto mainImage" alt="Car Image" />
          </div>
        </div>
      </div>
  </template>
  
  
  <script >
  // import SidebarCom from '@/components/sidebar/SidebarCom.vue';
  import carsDataInfo from '@/components/json/cars.json';
  
  export default {
  name:'HomeView',
  data() {
    return {
  myCarDetails : carsDataInfo,
  name:this.$route.params.name,
  carFileId:this.$route.params.carFileId,

    };
  },
//   methods: {
//     getImageUrl(name, mainImage) {
//       // Try to load the image statically from the assets folder
//       try {
//         return new URL(`../assets/mainImage/${name}/${mainImage}`, import.meta.url).href;
//       } catch (e) {
//         // If the image is not found, return a default or fallback image
//         console.error(`Error loading image: ${name}/${mainImage}`, e); // Log the error

//         return new URL('../assets/mainImage/2023_Honda_CR-V.jpg', import.meta.url).href; // You can add a default image here
      

//       }
//     }
// },
  computed: {
    carsDataInfo() {
      let carData = [];
      for(let i = 0; i< this.myCarDetails.length; i++) {
        if(this.myCarDetails[i].fileNumber === this.carFileId) {
          carData = this.myCarDetails[i];
          break;
        }
      }
        return carData;
    }
  }

  };
  </script>
  
  <style scoped> /* not added scss */
  img {
    width: 500px;
    height: 300px;
    margin-bottom: 10px;
  }
  </style>