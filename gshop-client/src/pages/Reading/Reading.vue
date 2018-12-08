<!--识物-->
<template>
  <div class="Reading-worp">
    <div class="header">
      <div class="headerContent">
        <div class="topbar">
           <div class="psc-row">
             <div class="psc-left">
               <a href="">
                 <i></i>
               </a>
             </div>
             <div class="psc-middle">
               <a class="find" href="">发现</a>
               <a class="selectionHouse" href="">甄选家</a>
             </div>
             <div class="psc-right">
               <a class="cart" href="">
                 <i></i>
               </a>
               <a class="search" href="">
                 <i></i>
               </a>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Reading"
    }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixins.styl"

   .header
     width 100%
     height 1.04rem
     position relative
     .headerContent
        width 100%
        position fixed !important
        left 0
        top 0
        z-index 99
        .topbar
           position: relative;
           height: 1rem;
           background-color: #fafafa;
           box-sizing: border-box;
           border-bottom: .01rem solid #d9d9d9;
           .psc-row
             z-index: 1;
             max-width: 768px;
             box-sizing: border-box;
             margin: auto;
             overflow: hidden;
             padding: 0 .26rem 0 .24rem;
             position: relative;
             .psc-left
                width 100%
                display: block;
                float: left;
                a
                  display: block;
                  height: 1rem;
                  i
                    display: block;
                    position: relative;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: .46rem .46rem;
                    width: .46rem;
             .psc-middle
                position: absolute;
                width: 3.2rem;
                height: 100%;
                line-height: 1rem;
                text-align: center;
                left: 50%;
                top: 0;
                margin-left: -1.6rem;
                font-size: .28rem;
                color: #7F7F7F;
                z-index: 1;
                .find
                  font-size: .4rem;
                  color: #b4282d;
                  font-weight: bold;
                .selectionHouse
                  width 1005
             .psc-right
               display: block;
               float: right;
               height: 1rem;
               margin-right: .02rem;

</style>
