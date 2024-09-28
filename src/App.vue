<script >
import MainMenue from "@/components/navbar/MainMenu.vue";
// import HomeView from "./views/HomeView.vue";
import FooterView from "./views/FooterView.vue";




export default {
name: "App",
components:{
MainMenue,

FooterView,
}
}

</script>

<template>
  <div id="app" class="container">
<MainMenue />
  <FooterView />
    </div>



  <RouterView />
</template>

