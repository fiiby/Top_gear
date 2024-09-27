<template>
    <div >
        <ul class="sidebar-nav">
            <li><router-link to="/">Toyota</router-link></li>
            <li><router-link to="/about">Honda</router-link></li>
            <li><router-link to="/Categories">Nissan</router-link></li>
            <li><router-link to="/contact">Mitsubishi</router-link></li>

        </ul>
     
        
        </div>

</template>

<script >
export default {
  name:'SidebarCom',

}
</script>

<style scoped>

        li { 
        list-style: none;
      padding: 10px;
        width: 100%;
        border-bottom:2px solid white;
        background-color: #4f4f60;
        text-decoration: none;
        }

      a {
            text-decoration: none;
            color:white;
            font-weight: 700;
            padding: 10px;
            /* display:block ; */
        }
    
        


    
    

</style>