<template>
  <div class="demo-wrapper">
    <div class="module module1">
      <div id="home" class="module-title">标题1</div>
      <!-- <div class="module-content">内容1</div> -->
      <home></home>
    </div>
    <div class="module module2">
      <div id="product" class="module-title">标题2</div>
      <div class="module-content">内容2</div>
    </div>
    <div class="module">
      <div id="solution" class="module-title">标题3</div>
      <div class="module-content">内容3</div>
      

    </div>
    <div class="module module4">
      <div id="customer" class="module-title">标题4</div>
      <div class="module-content">内容4</div>
    </div>
    <div class="module module5">
      <div id="module5" class="module-title">标题5</div>
      <div class="module-content">内容5</div>
    </div>
    <div class="module module6">
      <div id="module6" class="module-title">标题6</div>
      <div class="module-content">内容6</div>
    </div>
<!-- <header></header> -->

    <anchor
      :title-list="titleList"></anchor>
  </div>
</template>

<script>
import home from '@/views/home/index'
import Header from '@/components/Header'
// import Header from './Header.vue'
export default {
  name: 'demo',
  props: {
    msg: String
  },
  components:{home,Header},
  data() {
    return {
      titleList: [
         {
                    label: '首页',
                    id: 'home'
                },
                {
                    label: '产品中心',
                    id: 'product'
                },
                {
                    label: '解决方案',
                    id: 'solution'        // '/solution'
                },
                {
                    label: '客户案例',
                    id: 'customer'        // '/customer'
                },
                {
                    label: '关于我们',
                    id: 'about'       // '/about'
                },
                {
                    label: '500',
                    id: 'error-500'
                }
      ],
      titleList1: [
        {
          id: 'module71',
          label: '标题71'
        },
        {
          id: 'module72',
          label: '标题72'
        },
        {
          id: 'module73',
          label: '标题73'
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.demo-wrapper{
  .module{
    overflow: hidden;
    margin-bottom: 16px;
    &.module7{
      overflow: auto;
      width: 1200px;
      height: 600px;
      margin: 0 auto;
    }
  }
  .module-title{
    font-size: 24px;
    line-height: 36px;
  }
  .module-content, .sub-module-content{
    min-height: 300px;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid #e5e5e5;
  }
  .sub-module-title{
    font-size: 20px;
    line-height: 32px;
  }
}
</style>
