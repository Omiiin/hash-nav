<!--
 * @Author: Riman
 * @Date: 2021-04-01 15:01:18
 * @LastEditTime: 2021-04-01 18:51:35
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in list">
        <div class="slide-item">
          <img  :src="item.img" alt="">
          <!-- <p>{{item.name}}</p> -->
        </div>
        
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

export default {
  name: "sacc",
  data() {
    return {
      list:[{
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg',
        name:'cp1'
      },{
        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1769877810,1842013772&fm=26&gp=0.jpg',name:'cp2'
      }]//
    };
  },
  mounted() {
    // 创建swiper对象来实现轮播
    new Swiper(".swiper-container", {
      //可以循环播放
      loop: true,
      //   height: 500,
      slidesPerView: 4,
      slidesPerGroup : 1,
      spaceBetween: 30,
      // autoplay:true,
      speed: 3000,
       autoplay : 1, 
      freeMode: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
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
.slide-item{
  display: flex;
  flex-direction: column;
  img{
    width: 100%;
  }
}
}
</style>
