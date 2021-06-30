<!--
 * @Author: Riman
 * @Date: 2021-04-01 10:58:28
 * @LastEditTime: 2021-04-01 11:02:59
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div>
      <div class="module home">
        <div id="home"></div>
        <home></home>
      </div>
      <div class="module product">
        <customer id="product"></customer>
      </div>
      <div class="module solution">
        <solution id="solution"></solution>
      </div>
      <div class="module customer">
        <product id="customer"></product>
      </div>
      <div class="module about">
        <about id="about"></about>
      </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import home from "@/views/home/index";
import product from "@/views/product/index";
import solution from "@/views/solution/index";
import customer from "@/views/customer/index";
import about from "@/views/about/index";

export default {
  name: "Box",
  components: { home, Header, product, solution, customer, about },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 75px;
}
</style>