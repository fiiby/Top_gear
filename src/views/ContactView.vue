<template>
<div class="contact-page">
  <h3>
    Contact Us
  </h3>
<form action="" >
        <label for="username">Username:</label>
        <input type="text" v-model="username" />
        <br />
        <br />
        <label for="useremail">E-mail : </label>
        <input type="text" v-model="useremail" />
        <br />
        <br/>
        <label for="Message">Message:</label>
        <input type="text" v-model="usermessage" />
        <br />
        <br />
 
    
        <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name:'ContactView',
  components: {
    
  }
}
</script>
<style scoped>  
.contact-page {
  height: 40%;
  width:40%; 
  /* width: 700px; */
  background-color: rgba(138, 201, 119, 0.548);
  padding: 20px; /* Adjust padding for responsiveness */
  margin-left: 25%;
  border: 3px solid brown;
  border-radius: 10px;
}


input {
  display: block;
  width: 40%;
  margin-bottom: 10px;
  padding: 8px;
  border: 3px solid brown;
  border-radius: 6px;
}
h3 {
  color: rgba(255, 255, 255, 0.836);
}



</style>