<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-01 22:16:08
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div id="app">
    <!-- <router-view/> -->
     <Header @getCurrent='getCurrent' :eId='eId' :titleList='titleList' :bg_color="bg_color"></Header>
     <Demo :list='list' @getId='getId' :titleList='titleList'></Demo> 
    <!-- <Box></Box> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Demo from '@/components/Demo'
// import Box from '@/views/Box'
export default {
  name: "App",
  components:{
    Demo,Header
  },
  data(){
    return {
      list:{},
      eId:'',
      bg_color:'#8F8F91',
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
    }
  },
  methods:{
    getCurrent(item){
      this.list=item
    },
    getId(id){
      // console.log('get',id);
      this.eId=id
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.iconfont{
  margin-right: 7px;
}
</style>
