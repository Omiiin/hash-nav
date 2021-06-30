<template>
  <div id="app">
    <!-- <router-view/> -->
    </demo> 
  </div>
</template>

<script>
import Demo from '@/components/Demo'
export default {
  name: "App",
  components:{
    Demo
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
