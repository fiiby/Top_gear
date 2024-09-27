<template>
    <div>
        <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/Categories">Categories</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        
        </ul>
    </div>
</template>

<script >
export default {
    name:"MainMenu",
}
</script>

<style scoped>
.nav {
  
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
 li {
    display: inline-block;
   
    margin:0 5px;
 }
 a {
    padding: 10px;
    display: block;
    text-decoration: none;
    color:#4f4f60;
    font-weight: bold;

    &.router-link-exact-active {
        /* border-bottom:3px solid #4c4f60; */
        color:rgb(233, 92, 127) ;
    }
 }
 li:hover {
    border-bottom:3px solid #4c4f60 ;
 }

</style>