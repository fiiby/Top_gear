<template>
    <div class="cat-page">
      <div class="col-md-12">
      <h3>Nissan</h3> 
      <p>
        Known for: Reliability, innovation, and a wide range of vehicles.
      Popular Models: Qashqai, X-Trail, Micra, Sentra, Altima, Pathfinder.
      Key Features: Advanced safety technologies, fuel efficiency, and comfortable interiors.
      </p>
      </div>
      <div class="col-md-12">
    <h3>Lexus</h3>
      <p>
        Known for: Luxury, performance, and exceptional craftsmanship.
      Popular Models: RX, ES, LX, IS, LC, NX.
      Key Features: Premium materials, cutting-edge technology, and a smooth driving experience.
      </p>
</div>
<div class="col-md-12">
    <h3>Toyota</h3>
      <p>
        Known for: Reliability, durability, and value.
      Popular Models: Corolla, Camry, RAV4, Highlander, Tacoma, Land Cruiser.
      Key Features: Fuel efficiency, spacious interiors, and advanced safety features.
      </p>
</div>
<div class="col-md-12">
    <h3>Hyundai</h3>
      <p>
        Known for: Value, innovation, and a wide range of models.
      Popular Models: Sonata, Elantra, Santa Fe, Tucson, Kona, Genesis.
      Key Features: Modern designs, advanced technology, and competitive pricing.
      </p>
</div>
<div class="col-md-12">
    <h3>Honda</h3>
      <p>
        Known for: Reliability, fuel efficiency, and sporty driving dynamics.
      Popular Models: Civic, Accord, CR-V, HR-V, Pilot, Odyssey.
      Key Features: Advanced safety features, comfortable interiors, and a reputation for longevity.
      </p>
    </div>
    <div class="col-md-12">
    <h3>Ford </h3>
      <p>
        Known for: Versatility, durability, and a strong American heritage.
      Popular Models: F-150, Mustang, Explorer, Escape, Focus, Fusion.
      Key Features: Powerful engines, rugged capabilities, and a wide range of options.
      </p>
</div>
<div class="col-md-12">
    <h3> Volkswagen</h3>
      <p>
        Known for: German engineering, quality, and a focus on fuel efficiency.
      Popular Models: Golf, Passat, Tiguan, Atlas, Jetta, Beetle.
      Key Features: Stylish designs, comfortable interiors, and advanced technology.
      </p>
</div>
    </div>
</template>

<script>
export default {
  name:'CategoriesView',
  components: {
    
  }
}
</script>

<style scoped>
* {
  width:60%;
  height: 90%;
}
.cat-page {
/* display: flex; */
/* flex-direction: column; */
 background-color: rgba(138, 201, 119, 0.548);
 
  justify-items: center;
  padding: 20px;
  margin-left: 430px;
  margin-top:5px;
  margin-bottom:30px;
  
}
p {
  font-family: sans-serif;
  font-size: large;
}
h3 {
  color: rgba(255, 255, 255, 0.89);
}
 @media (min-width: 768x) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }  
 } 
</style>



<!-- /* <template>
  <div class="categories-page container">
    <h2 class="text-center text-white">Car Categories</h2>
    <div class="row">
      <div class="col-md-6">
        <h3>Nissan</h3>
        <p>
          Known for: Reliability, innovation, and a wide range of vehicles.
          Popular Models: Qashqai, X-Trail, Micra, Sentra, Altima, Pathfinder.
          Key Features: Advanced safety technologies, fuel efficiency, and comfortable interiors.
        </p>
      </div>
      <div class="col-md-6">
        <h3>Lexus</h3>
        <p>
          Known for: Luxury, performance, and exceptional craftsmanship.
          Popular Models: RX, ES, LX, IS, LC, NX.
          Key Features: Premium materials, cutting-edge technology, and a smooth driving experience.
        </p>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  /* name: 'CategoriesView', */
};
</script>

<style scoped>
.categories-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin-left:430px;
  background-color: rgba(138, 201, 119, 0.548);
  padding: 20px;
}
/* .categories-page {
  background-color: rgba(138, 201, 119, 0.548);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
} */

/* @media (min-width: 768px) {
  .categories-page {
    flex-direction: row;
    justify-content: space-between;
  }
} */

/* </style> */ */ -->