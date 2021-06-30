<!--
 * @Author: Riman
 * @Date: 2021-04-01 17:42:08
 * @LastEditTime: 2021-04-01 20:35:25
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div>
    <swiper :list="list"></swiper>

  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
export default {
  name: "",
  components: {
    Swiper
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
      ], //
    };
  },
};
</script>

<style lang="scss" scoped></style>
