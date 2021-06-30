<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-01 21:43:17
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div class="wrap">
    <ul id="marquee">
      <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
export default {
  data() {
    return {
      lists: ["欢迎大家来一起学习", "在一起学习", "一起学习", "学无止境"],
    };
  },
  name: "Scroller",
 // 父组件传入数据， 数组形式
  methods: {
    move() {
      // 获取内容区宽度
      let width = document.getElementById("marquee").scrollWidth;
      let marquee = document.getElementById("marquee");
      let speed = 10; // 位移距离
      // 设置位移
      setInterval(function () {
        speed = speed - 1;
        // 如果位移超过文字宽度，则回到起点

        if (-speed >= width) {
          speed = 500;
        }
        marquee.style.transform = "translateX(" + speed + "px)";
      }, 40);
    },
  },
  mounted: function () {
    this.move();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  overflow: hidden;
  color: red;
}
#box {
  height: 100%;
}
ul,
li {
  margin: 0;
  padding: 0;
}
ul {
  white-space: nowrap;
  margin: 0 10px;
}
li {
  height: 100%;
  list-style: none;
  margin-right: 10px;
  display: inline-block;
}
</style>
