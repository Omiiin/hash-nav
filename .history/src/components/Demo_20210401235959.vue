<template>
  <div class="demo-wrapper">
    <div class="module home">
      <div id="home"></div>
      <!-- <div class="module-content">内容1</div> -->
      <home></home>
    </div>
    <div class="module product">
      <h1 id="product" class="module-title">产品中心</h1>
      <product></product>
    </div>
    <div class="module">
      <!-- <h1 id="solution" class="module-title">解决方案</h1> -->
      <solution></solution>
    </div>
    <div class="module customer">
      <h1 id="customer" class="module-title">客户案例</h1>
      <customer></customer>
    </div>
    <div class="module about">
      <h1 id="about" class="module-title">关于我们</h1>
      <about></about>
    </div>
    <!-- <div class="module module6">
      <div id="module6" class="module-title">标题6</div>
      <div class="module-content">内容6</div>
    </div> -->
    <!-- <header></header> -->

    <anchor :title-list="titleList" :list="list" @active="active"></anchor>
  </div>
</template>

<script>
import Header from "@/components/Header";
import home from "@/views/home/index";
import product from "@/views/product/index";
import solution from "@/views/solution/index";
import customer from "@/views/customer/index";
import about from "@/views/about/index";

// import Header from './Header.vue'
export default {
  name: "demo",
  props: {
    msg: String,
    list: Object,
    titleList: Array,
  },
  components: { home, Header, product, solution, customer, about },
  data() {
    return {

    };
  },
  methods: {
    active(id) {
      console.log("id", id);
      this.$emit("getId", id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin self_icon {
  &::before {
    border-left: 50px solid #dadada;
    border-right: 50px solid #dadada;
    bottom: 0;
    content: "";
    height: 1px;
    margin-left: -70px;
    position: absolute;
  }
  &::after {
    background: #ff8724 none repeat scroll 0 0 padding-box content-box;
    border-bottom: 1px solid #dadada;
    border-left: 1px solid #dadada;
    bottom: -10px;
    content: "";
    left: 50%;
    margin-left: -16px;
    padding: 0 0 8px 8px;
    position: absolute;
    transform: rotate(-45deg);
  }
}
h1 {
  position: relative;
  @include self_icon;
  &::before {
    left: 49.9%;
    top: 174%;
    width: 43px;
  }
  &::after {
    height: 22px;
    left: 50%;
    top: 140%;
    width: 22px;
  }
}
.demo-wrapper {
  .module {
    overflow: hidden;
    margin-bottom: 16px;
    // &.module7 {
    //   overflow: auto;
    //   width: 1200px;
    //   height: 600px;
    //   margin: 0 auto;
    // }
  }
  .module-title {
    font-size: 2em;
    margin: 3em 0;
    line-height: 36px;
    position: relative;
  }
  .module-content,
  .sub-module-content {
    min-height: 300px;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid #e5e5e5;
  }
  .sub-module-title {
    font-size: 20px;
    line-height: 32px;
  }
}
</style>
