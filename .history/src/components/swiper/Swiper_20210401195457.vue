<!--
 * @Author: Riman
 * @Date: 2021-04-01 15:01:18
 * @LastEditTime: 2021-04-01 19:54:57
 * @LastEditors: Riman
 * @Description: 
-->
<template>
<swiper :options="swiperOption">
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <!-- <div class="swiper-container"> -->
    <!-- <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in list">
          <img  :src="item.img" alt="">
      </div>
  
    </div> -->
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  <!-- </div> -->
</template>

<script>
// import Swiper from "swiper";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: "swiper",
  props:['list'],
   components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
     swiperOption: {
          // 所有的参数同 swiper 官方 api 参数一样
          // 
          autoplay:{
            delay:1000,
            disableOnInteraction:false
          },
          loop:true
        }
    };
  },

 
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 70%;
  margin: 30px auto;
}
.swiper-wrapper {
  -webkit-transition-timing-function: linear;    /*之前是ease-out*/
  -moz-transition-timing-function: linear;
  -ms-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
  margin: 0 auto;
}
.swiper-slide {
  height: 300px;
  overflow: hidden;
  border: 1px red solid;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
 img{
   width: 100%;
   height: 100%;
 }

}
</style>
