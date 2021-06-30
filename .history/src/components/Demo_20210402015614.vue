<template>
  <div class="demo-wrapper">
     <Header @getCurrent='getCurrent' :eId='eId' :titleList='titleList' :bg_color="header_color" :hd_position="header_position" :hover_flag="header_hover"></Header>
    
    <div class="module home">
      <div id="home"></div>
      <!-- <div class="module-content">内容1</div> -->
      <home></home>
    </div>
   <div class="module product">
      <!-- <h1 id="product" class="module-title">产品中心</h1> -->
      <customer></customer>

    </div>
    <div class="module">
      <!-- <h1 id="solution" class="module-title">解决方案</h1> -->
      <solution></solution>
    </div>
    <div class="module customer">
      <product></product>

      <!-- <h1 id="customer" class="module-title">客户案例</h1> -->
    </div>
    
     
    <div class="module about">
      <h1 id="about" class="module-title">关于我们</h1>
      <about></about>
    </div>

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
 eId: "",
      header_color: "", // header背景色
      header_position: "", // header定位
      header_hover: "", // header图标是否显示白光划过效果
      show_backtop: false, // 是否显示回到顶部按钮
      titleList: [
        {
          label: "首页",
          id: "home",
        },
        {
          label: "产品中心",
          id: "product",
        },
        {
          label: "解决方案",
          id: "solution", // '/solution'
        },
        {
          label: "客户案例",
          id: "customer", // '/customer'
        },
        {
          label: "关于我们",
          id: "about", // '/about'
        },
        {
          label: "500",
          id: "error-500",
        },
      ],
    };
  },
  methods: {
    active(id) {
      // console.log("id", id);
      this.$emit("getId", id);
    },
     getCurrent(item) {
      console.log("item", item);
      this.list = item;
    },
    getId(id) {
      // console.log('get',id);
      this.eId = id;
    },
    handleScroll() {
      //监听滚动条
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop === 0) this.header_color = "transparent";
      if (scrollTop > 100) this.header_color = "rgba(3,3,3,.8)";
      if (scrollTop > 200) this.show_backtop = true;
      if (scrollTop < 200) this.show_backtop = false;
    },
    backTop() {
      // 让回到顶部更加平滑
      let scrollTop;
      var time = setInterval(() => {
        scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        window.scroll(0, scrollTop - 50);
        if (scrollTop === 0) clearInterval(time);
      }, 50);
    },
    head_fix(val) {
      this.header_position = val[0];
      this.header_hover = val[1];
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
