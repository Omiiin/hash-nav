<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-01 11:06:40
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div id="app">
    <!-- <router-view/> -->
     <!-- <Header></Header> -->
     <Demo></Demo> 
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
