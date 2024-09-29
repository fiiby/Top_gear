<template>
  <div>
    <div class="car-details-container" v-for="(car, i) in carsData" :key="i" >
      <h1>{{ car.brand }} {{ car.model }}</h1>
      <img :src="getImageUrl(car.imageName)" class="rounded d-block mx-auto" alt="Car Image" />
      <p><strong>Price:</strong> {{ car.price }}</p>
      <p><strong>Car Body:</strong> {{ car.carBody }}</p>
      <p><strong>Color:</strong> {{ car.color }}</p>
      <p><strong>Year:</strong> {{ car.year }}</p>
      <router-link to="/">
        <button class="btn btn-primary">Go Back</button>
      </router-link>
    </div>
  </div>
  </template>
  
  <script>

  export default {
    name: 'CarDetails',
    props: {
      id: {
        type: Number,
        required: true
      },
    data() {
      return {
        car : null
      };
    },
    mounted() {
      // Fetch the car details based on the ID from the carsData
      const carsData = [
        {
          imageName: "nissan_qashqai_2010.jpg",
          brand: "Nissan",
          model: "Qashqai",
          carBody: "4wd",
          color: "red",
          price: "10000$",
          year: 2010
        },
        {
        "imageName": "lexus-gs-2020.jpg",
        "brand": "Lexus",
        "model": "GS",
        "car body": "4WD",
        "color": "black",
        "price": "50000$",
        "year": 2020
       
      },
      {
        "imageName": "nissan_qashqai_2010.jpg",
        "brand": "Toyota",
        "model": "RAV4",
        "car body": "crossover",
        "color": "gray",
        "price": "15000$",
        "year": 2015
      },
      {
        "imageName": "hyundai-grand.jpg",
        "brand": "Hyundai",
        "model": "Grand Nios",
        "car body": "hatchback",
        "color": "white",
        "price": "30000$",
        "year": 2018
      },
      {
        "imageName": "Honda_Civic.jpg",
        "brand": "Honda",
        "model": "Civic",
        "car body": "sedan",
        "color": "grey",
        "price": "25000$",
        "year": 2010
      },
      {
        "imageName": "ford-socus.jpg",
        "brand": "Ford",
        "model": "Focus",
        "car body": "hatchback",
        "color": "blue",
        "price": "25000$",
        "year": 2014
      },
      {
        "imageName":"volkswagon-polo.jpg",
        "brand": "Volkswagon",
        "model": "Polo",
        "car body": "4wd",
        "color": "olive green",
        "price": "25000$",
        "year": 2016
      }
    
      ];
  
      this.car = carsData[this.id]; // Find the car by index (in real apps, you'd use a car ID)
    },
    methods: {
      getImageUrl(imageName) {
        try {
          return new URL(`../assets/image/${imageName}`, import.meta.url).href;
        } catch (e) {
          return new URL('../assets/image/default_car_image.jpg', import.meta.url).href;
        }
      }
    }
  }
  };
  </script>
  
  <style scoped>
  .car-details-container {
    background-color: yellow;
    padding: 20px;
    text-align: center;
  }
  
  img {
    width: 400px;
    height: 300px;
    margin-bottom: 20px;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  