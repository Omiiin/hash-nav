<!--
 * @Author: Riman
 * @Date: 2021-04-01 15:01:18
 * @LastEditTime: 2021-04-01 20:51:47
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in list">
        <img :src="item.img" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/js/swiper.min.js";

export default {
  name: "swiper",
  props: ["list"],
  data() {
    return {
      position:10,

    };
  },
  mounted() {
    // 创建swiper对象来实现轮播
    const swiper = new Swiper(".swiper-container", {
      //   height: 500,
      // loopedSlides: 5,
      slidesPerView: 4,
      freeMode: true,
      spaceBetween: 30,
      // autoplay:true,
      // --
      autoplay: 3000,
      loop: true,
      observer: true,
      observeParents: true,
      autoplayDisableOnInteraction: false,
      // freeMode: true,
      // 如果需要分页器
    });
    
    setInterval(()=>{
      this.position-=1
      console.log(this.position)
      document.getElementsByClassName('swiper-wrapper')[0].style.transform=`translate3d(${this.position}px, 0px, 0px)`
    },160)
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 70%;
  margin: 30px auto;
}
.swiper-wrapper {
  -webkit-transition-timing-function: linear; /*之前是ease-out*/
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
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
