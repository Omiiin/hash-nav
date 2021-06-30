<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-02 01:05:26
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div id="app">
    <!-- <router-view/> -->
     <Header @getCurrent='getCurrent' :eId='eId' :titleList='titleList' :bg_color="header_color" :hd_position="header_position" :hover_flag="header_hover"></Header>
     <!-- <Demo :list='list' @getId='getId' :titleList='titleList'></Demo>  -->
     <router-view></router-view>
     <!-- <detail></detail> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Demo from '@/components/Demo'
import Detail from './views/detail/detail.vue';
export default {
  name: "App",
  components:{
    Demo,Header,
    Detail
  },
  data(){
    return {
      list:{},
      eId:'',
       header_color: '',   // header背景色
            header_position: '',    // header定位
            header_hover: '',       // header图标是否显示白光划过效果
            show_backtop: false,    // 是否显示回到顶部按钮
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
  mounted(){
        // window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll',this.handleScroll,true)
    },
  methods:{
 

    getCurrent(item){
      console.log('item',item);
      this.list=item
    },
    getId(id){
      // console.log('get',id);
      this.eId=id
    },
     handleScroll(){ //监听滚动条
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop === 0)   this.header_color = 'transparent';
            if(scrollTop > 100)   this.header_color = 'rgba(3,3,3,.8)';
            if(scrollTop > 200)   this.show_backtop = true;
            if(scrollTop < 200)   this.show_backtop = false;
        },
        backTop(){      // 让回到顶部更加平滑
            let scrollTop;
            var time = setInterval(()=> {
                scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                window.scroll(0,scrollTop-50);
                if (scrollTop === 0) clearInterval(time);
            }, 50);
        },
        head_fix(val){
            this.header_position = val[0];
            this.header_hover = val[1];
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
ul li{
    list-style: none!important;
}
</style>
