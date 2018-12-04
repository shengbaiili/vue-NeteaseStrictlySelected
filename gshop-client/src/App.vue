<template>
  <div>
    <router-view/>
    <HomeHeader/>
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
  import HomeHeader from './components/HomeHeader/HomeHeader.vue'
export default {
    components:{
      HomeHeader,
      FootGuide
    }
}
</script>

<style>

</style>
