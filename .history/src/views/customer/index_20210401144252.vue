<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-01 14:42:51
 * @LastEditors: Riman
 * @Description: 
-->
<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
</template>

<script>
import Swiper from 'swiper';
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
    // 创建swiper对象来实现轮播
    new Swiper(".swiper-container", {
      //可以循环播放
      loop: true, 
      height: 500,
      slidesPerView: 3,
      spaceBetween: 30,
        // autoplay:true,
        speed:300,
  autoplay : {
    delay:3000
  },
      freeMode: true,
      // 如果需要分页器
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    });
  },
    }
</script>

<style lang="" scoped>
    
</style>