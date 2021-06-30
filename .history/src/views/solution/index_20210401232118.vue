<!--
 * @Author: Riman
 * @Date: 2021-04-01 17:42:08
 * @LastEditTime: 2021-04-01 23:21:18
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <!-- <div class="solution">

    <div class="content">
      <div class="box" v-for="item in list">
        <img :src="item.img" alt="" />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div> -->
   <div class="link">
                    <div class="link-inner">
                        <ul class="link-tab">
                            <li class="link-tab-item tab-item-1" :class="tabActiveClass(0)" @mouseenter="setActiveTab(0)">
                                <a href="#">
                                    <div class="inner" style="top: 60%">
                                        <div class="content">
                                            <h3>连接用户与生活</h3>
                                            <p>让生活更便捷更多彩</p>
                                        </div>
                                        <i></i>
                                    </div>
                                </a>
                            </li>
                            <li class="link-tab-item tab-item-2" :class="tabActiveClass(1)" @mouseenter="setActiveTab(1)">
                                <a href="#">
                                    <div class="inner">
                                        <div class="content">
                                            <h3>连接企业与科技</h3>
                                            <p>数字化助手，助力产业升级</p>
                                        </div>
                                        <i></i>
                                    </div>
                                </a>
                            </li>
                            <li class="link-tab-item tab-item-3" :class="tabActiveClass(2)" @mouseenter="setActiveTab(2)">
                                <a href="#">
                                    <div class="inner" style="top: 40%">
                                        <div class="content">
                                            <h3>连接现在与未来</h3>
                                            <p>探索面向未来的创新科技</p>
                                        </div>
                                        <i></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="link-content">
                            <!-- <transition @enter="linkContentEnter">
                                <ul v-show="linkActiveTab == 0" class="link-content-list">
                                    <li class="item-1-1">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>通讯与社交</h4>
                                                <p>连接人与人，提供功能丰富的即时通信和社交平台，让沟通更便捷。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                    <li class="item-1-2">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>数字内容</h4>
                                                <p>基于优质内容，以技术为驱动引擎，探索社交和内容融合的下一代形态。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                    <li class="item-1-3">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>金融科技服务</h4>
                                                <p>连接用户、商户和金融机构，提供安全、专业、便捷的金融产品与服务。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                    <li class="item-1-4">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>工具</h4>
                                                <p>提供多种工具性软件，帮助用户快速直接解决各项具体需求。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                </ul>
                            </transition>
                            <transition @enter="linkContentEnter">
                                <ul v-show="linkActiveTab == 1" class="link-content-list">
                                    <li class="item-2-1">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>腾讯广告营销</h4>
                                                <p>大数据营销平台，汇聚腾讯全量应用场景，提供一体化数字化营销方案。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                    <li class="item-2-2">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>腾讯云</h4>
                                                <p>提供领先的云产品与云服务，辅助企业走向数字化和全球化。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                    <li class="item-2-3">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>智慧产业</h4>
                                                <p>通过云、AI、大数据分析、安全、支付、小程序、LBS等互联网前沿技术和产品，打造智慧产业方案，助力产业数字化升级。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                </ul>
                            </transition>
                            <transition @enter="linkContentEnter">
                                <ul v-show="linkActiveTab == 2" class="link-content-list">
                                    <li class="item-3-1">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>人工智能</h4>
                                                <p>运用多种技术资产，提升人工智能实力，惠及人类和世界。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                    <li class="item-3-2">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>物联网</h4>
                                                <p>通过腾讯云物联网，致力提供IoT全栈产品和解决方案。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                    <li class="item-3-3">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>多媒体</h4>
                                                <p>腾讯多媒体实验室专注音视频通信技术的前瞻性研究。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                    <li class="item-3-4">
                                        <a href="#">
                                            <div class="link-item-content">
                                                <h4>腾讯探索</h4>
                                                <p>携手合作伙伴探索未来和相关技术，帮助解决全球在食物、能源和水源方面的挑战。</p>
                                            </div>
                                            <i class="icon-more"></i>
                                        </a>
                                    </li>
                                </ul>
                            </transition> -->
                        </div>
                    </div>
                </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
export default {
  name: "",
  components: {
    Swiper,
  },
  data() {
    return {
        linkActiveTab:0,
      list: [
        {
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg",
          name: "cp1",
        },
        {
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1769877810,1842013772&fm=26&gp=0.jpg",
          name: "cp2",
        },
        {
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg",
          name: "cp1",
        },
        {
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1769877810,1842013772&fm=26&gp=0.jpg",
          name: "cp2",
        },
        // {
        //   img:
        //     "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg",
        //   name: "cp1",
        // },
        // {
        //   img:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1769877810,1842013772&fm=26&gp=0.jpg",
        //   name: "cp2",
        // },
      ], //
    };
  },
  methods:{
       setActiveTab(index) {
            this.linkActiveTab = index;
        },
          tabActiveClass(index) {
            if(index == this.linkActiveTab) {
                return 'link-tab-active'
            }
            else {
                return ''
            }
        },
  }
};
</script>

<style lang="scss" scoped>
.solution {
  width: 70%;
  margin: 0 auto;
}
.content {
  // margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box {
  img {
    width: 300px;
    height: 300px;
    margin: 10px;
    border: 2px solid #FE8724;
  }
}
</style>
