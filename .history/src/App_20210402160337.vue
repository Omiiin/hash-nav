<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-02 16:03:37
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods:{
     handleScroll(e){
                //用来判断滚轮是向上滑动还是向下
                let direction = e.deltaY>0?'down':'up' 
                // console.log(direction)
                let arrList=this.navList
                //鼠标滚轮向下或后
                if(direction=='down'){
                    if(this.changeActive<arrList.length-1){
                        //选项卡激活的样式
                        this.changeActive=this.changeActive+1 
                        //跟随着选项卡而切换，以changeActive作为下标实现路由的path的读取
                        this.$router.push({path:arrList[this.changeActive].index})
                    }
                }else{//向上或前
                    if(this.changeActive>0){
                        this.changeActive=this.changeActive-1
                        this.$router.push({path:arrList[this.changeActive].index})
                    }
                }
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
.iconfont {
  margin-right: 7px;
}
ul li {
  list-style: none !important;
}
</style>
