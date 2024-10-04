<script >
import MainMenu from "@/components/navbar/MainMenu.vue";
import FooterView from "./views/FooterView.vue";




export default {
name: "App",
components:{
MainMenu,
FooterView,
}
}

</script>

<template>
  <div id="app" class="container">
    <MainMenu />
    <router-view />

    <FooterView />
  </div>




</template>

