<template>
    <div class="error-page-details">
        <img src=".@components/assets/404-error.webp">
        <div>
            <button type="button" class="btn btn-warning" @click="goBack()">Go Back</button>
       
        </div>
   
    </div>
</template>
<script>

export default {
  name:'ErrorPageDetails',
  components: {},
    methods: {
        goBack () {
            this.$router.push({name:'Home'});
        },
    },
  };
</script>
<style scoped>

.error-page-details {
    padding: 10px;
}
img {
  justify-self: center;
    width: 50%;
    height: 50%;
    margin-left: 20%;

}
button {
    margin-top:10px;
  margin-left: 40%;
}
</style>