<template>
  <div>
    <router-view/>
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
    components:{
      FootGuide
    }
}
</script>

<style>

</style>
