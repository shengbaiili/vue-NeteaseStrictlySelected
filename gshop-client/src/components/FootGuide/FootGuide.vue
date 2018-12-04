<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: $route.path==='/main'}" @click="goTo('/main')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/reading'}" @click="goTo('/reading')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/shoppings'}" @click="goTo('/shoppings')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我购物车的</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/personal'}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
    export default {
      methods: {
        goTo (path) {
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px


</style>
