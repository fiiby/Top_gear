<template>
<div class="contact-page ">
  <h3>
    Contact Us
  </h3>
  <p>
    Contact our friendly and knowledgeable team today. We're here to assist you with all your car-buying needs, from finding the right vehicle to financing options.
  </p>
<form action="" >
        <label for="username">Username:</label>
        <input type="text" v-model="username" />
        <br />
        <br />
        <label for="useremail">E-mail : </label>
        <input type="email" v-model="useremail" />
        <br />
        <br/>
        <label for="Message">Message:</label>
        <textarea  v-model="usermessage" required ></textarea>
        <br />
        <br />
 
    
        <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name:'ContactView',
  components: {},
  data() {
    return {
      username: '',
      useremail: '',
      usermessage: '',
    };
  },
}
</script>
<style scoped>  
.contact-page {
  display: flex;
  flex-direction: column;
  height: 40%;
  width:50%; 
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
textarea {
  width: 100%; /* Make it full width */
  height: 150px; /* Adjust height as needed */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical; /* Allow vertical resizing */
}


</style>