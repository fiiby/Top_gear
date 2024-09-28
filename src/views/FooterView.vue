<template>
    <div class="footer-cont">
      &copy; All rights reserved | Top Gear Company | 2024
      <main>
        <div class="contact-info">
      <a href="mailto:your_email@example.com">Email</a>
      | <a href="tel:+254721234567">Phone</a>
      | <a href="https://www.yourwebsite.com">Website</a>
    </div>

      </main>
     
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterView',
  };
  </script>
  
  <style scoped>
  .footer-cont {

    position: fixed; /*Sticks the footer to the bottom */
    bottom: 0; /* Aligns the footer at the bottom*/
     left: 0; /*Ensures it spans the entire width */
    width: 65%; 
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(138, 201, 119);
     padding:  20px;
    margin-left: 19%;
 
  }
  a {
    text-decoration: none;
    color: white;
  }
  </style>
  