<template>
  <div>
    <!-- <self-header
    @getCurrent='getCurrent' :eId='eId' :titleList='titleList'
      :bg_color="header_color"
      :hd_position="header_position"
      :hover_flag="header_hover"
    ></self-header> -->
    
    <router-view ></router-view>
    <!-- <footer></footer> -->

    <!-- <demo></demo> -->
    <self-footer></self-footer>
    <div class="backtop" @click="backTop" v-show="show_backtop">
      <i class="el-icon-arrow-up"></i>
    </div>
    <self-loading></self-loading>
  </div>
</template>
<script>
import selfHeader from "../components/Header";
import selfFooter from "../components/Footer";
import selfLoading from "../components/loading";
import demo from '../components/Demo'
import Footer from '../components/Footer.vue';
export default {
  components: {
    selfHeader,
    selfFooter,
    selfLoading,
    demo,
    Footer
  },
  data() {
    return {
    //   header_color: "", // header背景色
    //   header_position: "", // header定位
    //   header_hover: "", // header图标是否显示白光划过效果
    //   show_backtop: false, // 是否显示回到顶部按钮
      list: {},
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // handleScroll() {
    //   let scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   if (scrollTop === 0) this.header_color = "transparent";
    //   if (scrollTop > 100) this.header_color = "rgba(3,3,3,.8)";
    //   if (scrollTop > 200) this.show_backtop = true;
    //   if (scrollTop < 200) this.show_backtop = false;
    // },
    // backTop() {
    //   // 让回到顶部更加平滑
    //   let scrollTop;
    //   var time = setInterval(() => {
    //     scrollTop =
    //       window.pageYOffset ||
    //       document.documentElement.scrollTop ||
    //       document.body.scrollTop;
    //     window.scroll(0, scrollTop - 50);
    //     if (scrollTop === 0) clearInterval(time);
    //   }, 50);
    // },
    // head_fix(val) {
    //   this.header_position = val[0];
    //   this.header_hover = val[1];
    // },
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
  },
};
</script>
<style lang="scss">
ul {
  list-style: none;
}
.backtop {
  width: 60px;
  height: 25px;
  background-color: rgb(255, 135, 36);
  text-align: center;
  position: fixed;
  z-index: 999;
  right: 5%;
  bottom: 0;
  cursor: pointer;
  transition: transform 0.3s;
  animation: rotateIn 0.8s;
  &:hover {
    transform: scale(1.2);
  }
  i {
    color: #ffffff;
    font-size: 30px;
  }
}
</style>
