<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item active" :class="{on: $route.path==='/main'}" @click="goTo('/main')">
      <span class="item_icon">
        <i class="u-icon u-icon-tabBar-index"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="u-icon u-icon-tabBar-cate"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/reading'}" @click="goTo('/reading')">
      <span class="item_icon">
        <i class="u-icon u-icon-tabBar-topic"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/shoppings'}" @click="goTo('/shoppings')">
      <span class="item_icon">
        <i class="u-icon u-icon-tabBar-cart"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/personal'}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="u-icon u-icon-tabBar-ucenter"></i>
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
        display block
        margin-top .1rem
        font-size .2rem
        line-height 0rem
        .iconfont
          font-size 22px
        .u-icon-tabBar-index
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-sd723b5d859-721c8f6b53.png)
          background-repeat no-repeat
          background-size .7rem 8.4rem
          width .65rem
          height .55rem
          background-position 0rem -4.4rem
        .u-icon-tabBar-cate
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-sd723b5d859-721c8f6b53.png)
          background-repeat no-repeat
          background-size .7rem 8.66667rem
          width .65rem
          height .55rem
          background-position 0 -2.8rem
        .u-icon-tabBar-topic
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-sd723b5d859-721c8f6b53.png)
          background-repeat no-repeat
          background-size .7rem 8.45rem
          width .65rem
          height .55rem
          background-position 0 -6.16rem
        .u-icon-tabBar-cart
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-sd723b5d859-721c8f6b53.png)
          background-repeat no-repeat
          background-size .74rem 8.6rem
          width .75rem
          height .55rem
          background-position 0 -1rem
        .u-icon-tabBar-ucenter
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-sd723b5d859-721c8f6b53.png)
          background-repeat no-repeat
          background-size .74rem 8.6rem
          width .7rem
          height .55rem
          background-position 0 -8rem



</style>
