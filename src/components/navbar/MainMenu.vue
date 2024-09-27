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
    background-color: black;
    /* background-color: grey; */
    color: white;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
 li {
    display: inline-block;
    padding: 10px;
 }
 a {
    text-decoration: none;
    color: white;

    &.router-link-exact-active {
        color:green;
    }
 }

</style>