<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-02 09:09:07
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",



  
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
.iconfont {
  margin-right: 7px;
}
ul li {
  list-style: none !important;
}
</style>
