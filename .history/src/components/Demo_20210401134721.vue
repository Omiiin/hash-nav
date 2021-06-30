<template>
  <div class="demo-wrapper">
    <div class="module home">
      <div id="home" class="module-title">标题1</div>
      <!-- <div class="module-content">内容1</div> -->
      <home></home>
    </div>
    <div class="module product">
      <div id="product" class="module-title">标题2</div>
      <div class="module-content">内容2</div>
    </div>
    <div class="module">
      <div id="solution" class="module-title">标题3</div>
      <div class="module-content">内容3</div>
      

    </div>
    <div class="module customer">
      <div id="customer" class="module-title">标题4</div>
      <div class="module-content">内容4</div>
    </div>
    <div class="module about">
      <div id="about" class="module-title">标题5</div>
      <div class="module-content">内容5</div>
    </div>
    <div class="module module6">
      <div id="module6" class="module-title">标题6</div>
      <div class="module-content">内容6</div>
    </div>
<!-- <header></header> -->

    <anchor
      :title-list="titleList" :list='list' @active='active'></anchor>
  </div>
</template>

<script>
import home from '@/views/home/index'
import Header from '@/components/Header'
// import Header from './Header.vue'
export default {
  name: 'demo',
  props: {
    msg: String,
    list:Object,
    titleList:Array
  },
  components:{home,Header},
  data() {
    return {
      
      // titleList: [
      //   {
      //     id: 'home',
      //     label: '标题1'
      //   },
      //   {
      //     id: 'product',
      //     label: '标题2'
      //   },
      //   {
      //     id: 'solution',
      //     label: '标题3',
  
      //   },
      //   {
      //     id: 'customer',
      //     label: '标题4'
      //   },
      //   {
      //     id: 'about',
      //     label: '标题5'
      //   },
      //   {
      //     id: 'module6',
      //     label: '标题6'
      //   },
      //   {
      //     id: 'module7',
      //     label: '标题7'
      //   }
      // ],

    }
  },
  methods:{
    active(id){
      console.log('id',id)
      this.$emit('getId',id)
    }
  }
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
