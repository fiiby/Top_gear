<template>
    <div class="error-page">
    

    <ErrorPageDetails />

    </div>
</template>


<script>
import ErrorPageDetails  from '@/components/errorPage/ErrorPage.vue';

export default {
  name:'ErrorPageView',
  components: {
    ErrorPageDetails,
  }
}
</script>