<!--
 * @Author: Riman
 * @Date: 2021-04-01 17:42:08
 * @LastEditTime: 2021-04-01 23:05:06
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div class="solution">

    <div class="content">
      <div class="box" v-for="item in list">
        <img :src="item.img" alt="" />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
export default {
  name: "",
  components: {
    Swiper,
  },
  data() {
    return {
      list: [
        {
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg",
          name: "cp1",
        },
        {
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1769877810,1842013772&fm=26&gp=0.jpg",
          name: "cp2",
        },
        {
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg",
          name: "cp1",
        },
        {
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1769877810,1842013772&fm=26&gp=0.jpg",
          name: "cp2",
        },
        // {
        //   img:
        //     "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg",
        //   name: "cp1",
        // },
        // {
        //   img:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1769877810,1842013772&fm=26&gp=0.jpg",
        //   name: "cp2",
        // },
      ], //
    };
  },
};
</script>

<style lang="scss" scoped>
.solution {
  width: 70%;
  margin: 0 auto;
}
.content {
  // margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box {
  img {
    width: 300px;
    height: 300px;
    margin: 10px;
    border: 2px solid #FE8724;
  }
}
</style>
