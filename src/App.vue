<script >
import MainMenue from "@/components/navbar/MainMenu.vue";



export default {
name: "App",
components:{
MainMenue,
}
}

</script>

<template>
  <div id="app" class="container">
<MainMenue />
    </div>



  <RouterView />
</template>

