<!--
 * @Author: Riman
 * @Date: 2021-04-01 17:42:08
 * @LastEditTime: 2021-04-02 00:12:54
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
        <li
          class="link-tab-item tab-item-1"
          :class="tabActiveClass(0)"
          @mouseenter="setActiveTab(0)"
        >
          <a href="#">
            <div class="inner" style="top: 60%">
              <div class="content">
                <h3>维护领域痛点</h3>
                <!-- <p>让生活更便捷更多彩</p> -->
              </div>
              <i class="more-i"></i>
            </div>
          </a>
        </li>
        <li
          class="link-tab-item tab-item-2"
          :class="tabActiveClass(1)"
          @mouseenter="setActiveTab(1)"
        >
          <a href="#">
            <div class="inner">
              <div class="content">
                <h3>制造优化平台</h3>
                <!-- <p>数字化助手，助力产业升级</p> -->
              </div>
              <i class="more-i"></i>
            </div>
          </a>
        </li>
        <li
          class="link-tab-item tab-item-3"
          :class="tabActiveClass(2)"
          @mouseenter="setActiveTab(2)"
        >
          <a href="#">
            <div class="inner" style="top: 40%">
              <div class="content">
                <h3>· 数SCADA ·</h3>
                <!-- <p>探索面向未来的创新科技</p> -->
              </div>
              <i class="more-i"></i>
            </div>
          </a>
        </li>
      </ul>
      <div class="link-content">
        <transition @enter="linkContentEnter">
          <ul v-show="linkActiveTab == 0" class="link-content-list">
            <li class="item-1-1">
              <a href="#">
                <div class="link-item-content">
                  <h4>管理效率低</h4>
                  <p>
                    设备管理依靠手工作业状态， 容易发生疏漏，造成管理损
                    失；传统的人工记录、纸质 表单、签字审批等管理模式，
                    效率低下，无法全面、及时 掌握设备数据信息，做出科
                    学决策缺乏有力数据支撑。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
            <li class="item-1-2">
              <a href="#">
                <div class="link-item-content">
                  <h4>维护成本高</h4>
                  <p>
                    在新一轮的智能化转型趋 势下，企业的生产设备趋
                    于高度自动化、信息化、 网络化，产生的设备维修
                    费用、设备故障停机损失、 备品备件库存成本等维护
                    管理成本居高不下。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
            <li class="item-1-3">
              <a href="#">
                <div class="link-item-content">
                  <h4>停机损失严重</h4>
                  <p>
                    生产设备作为现代企业的重 要生产工具，运行的可靠性、
                    稳定性要求越来越强，在生 产过程中的作用和影响日益
                    增强。如果经常发生设备故 障停机，造成的损失极为严 重。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
            <li class="item-1-4">
              <a href="#">
                <div class="link-item-content">
                  <h4>信息孤岛严重</h4>
                  <p>
                    各种有用的数据信息分散在 不同的业务系统中，各系统
                    间缺乏联系，各自为政，易 形成信息孤岛、信息不对称 的情况。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
          </ul>
        </transition>
        <transition @enter="linkContentEnter">
          <ul v-show="linkActiveTab == 1" class="link-content-list">
            <li class="item-2-1">
              <a href="#">
                <div class="link-item-content">
                  <h4>一套软件（4大套件）</h4>
                  <p>
                    独立的数据采集平台，实现了对6000余种
                    设备的数据采集；支持多种数据库，多种
                    方式的存储，并为第三方软件或者数据采
                    集监管平台提供标准统一的数据源。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
            <li class="item-2-2">
              <a href="#">
                <div class="link-item-content">
                  <h4>一套行业管理制度</h4>
                  <p>
                    设备全生命周期管理,对设备的采购、
                    安装、使用、维保、维修、改造、成
                    本、直至报废进行全过程管理，使生 产更具信息化、数字化。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
            <li class="item-2-3">
              <a href="#">
                <div class="link-item-content">
                  <h4>“以设备”为中心，提供工业设备健康运 维平台</h4>
                  <p>
                    生产线实时监控，通过实时的数据采集分
                    析设备、生产线的实时OEE、损失、速度、
                    故障等信息，了解故障归因、损失根源、 效率影响因素。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
          </ul>
        </transition>
        <transition @enter="linkContentEnter">
          <ul v-show="linkActiveTab == 2" class="link-content-list">
            <li class="item-3-1">
              <a href="#">
                <div class="link-item-content">
                  <h4>产品介绍</h4>
                  <p>
                    独立的数据采集平台，实现了对6000余种设备的数据采集；支持多种数据库，多种方式的存储，并
                    为第三方软件或者数据采集监管平台提供标准统一的数据源。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
            <li class="item-3-2">
              <a href="#">
                <div class="link-item-content">
                  <h4>产品特点</h4>
                  <p>
                    • 在线组态开发，避免停机数采中断；
                    <br />
                    • 具备运行监视诊断，帮助用户及时发现通讯故障所在；<br />
                    • 基于数据块的数据采集，高速精确获取数据。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
            <li class="item-3-3">
              <a href="#">
                <div class="link-item-content">
                  <h4>主要功能</h4>
                  <p>
                    •支持市场主流的大部分驱动；<br />
                    •支持双机、双网、双设备冗余；<br />
                    •提供OPC DA接口；<br />
                    more。。。
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
            <li class="item-3-4">
              <a href="#">
                <div class="link-item-content">
                  <h4>More...</h4></h4></h4>
                  <p>
                    详细介绍
                  </p>
                </div>
                <!-- <i class="icon-more"></i> -->
              </a>
            </li>
          </ul>
        </transition>
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
      linkActiveTab: 0,
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
  methods: {
    setActiveTab(index) {
      this.linkActiveTab = index;
    },
    tabActiveClass(index) {
      if (index == this.linkActiveTab) {
        return "link-tab-active";
      } else {
        return "";
      }
    },
    linkContentEnter(el, done) {
      this.anime({
        targets: el,
        opacity: [0, 1],
        easing: "linear",
        duration: 350,
        complete() {
          done();
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
a{ text-decoration:none!important} 
.link-item-content{
    padding: 0!important;
}
.more-i{
    color: #1e52d8!important;
}
ul li{
    list-style: none!important;
}
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
    border: 2px solid #fe8724;
  }
}

header {
  width: 100%;
  height: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 992px) {
    height: 570px;
  }
}

.banner-video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  object-fit: fill;

  @media screen and (max-width: 992px) {
    object-fit: cover;
  }
}

.banner-text {
  display: flex;
  font-family: "TencentSans";
  font-size: 54px;
  color: white;
  z-index: 1;
  letter-spacing: 8px;

  .left-text {
    display: flex;
    margin-right: 60px;

    @media screen and (max-width: 992px) {
      margin-right: 0px;
    }

    .dynamic {
      width: 136px;
      height: 67px;
      position: relative;

      @media screen and (max-width: 992px) {
        width: 104px;
      }
    }

    i {
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }

  @media screen and (max-width: 992px) {
    display: block;
    font-size: 38px;
  }
}

.slide-tips {
  position: absolute;
  bottom: 60px;
  left: 50%;
  margin-left: -16px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes slide {
    0%,
    100% {
      transform-origin: 50% 100%;
      transform: scaleY(1);
    }
    20% {
      transform-origin: 50% 100%;
      transform: scaleY(0);
    }
    30% {
      transform-origin: 50% 0%;
      transform: scaleY(0);
    }
    50% {
      transform-origin: 50% 0%;
      transform: scaleY(1);
    }
  }

  .slide-line {
    width: 2px;
    height: 32px;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 2px;
    animation: slide 3s linear infinite;
  }

  .tips-text {
    font-size: 12px;
    letter-spacing: 2px;
  }
}

.basic-info {
  margin-bottom: 84px;

  @media screen and (max-width: 992px) {
    margin-bottom: 48px;
  }
}

.description {
  width: 100%;
  padding: 105px 0 74px;
  font-size: 24px;
  line-height: 54px;
  color: #5f6464;
  text-align: center;
  font-family: "TencentSans";

  .break-line {
    display: none;

    @media screen and (max-width: 992px) {
      display: unset;
    }
  }

  @media screen and (max-width: 992px) {
    padding: 48px 0 24px;
    font-size: 16px;
    line-height: 28px;
  }
}

.details {
  width: 100%;
  height: 250px;

  @media screen and (min-width: 992px) and (max-width: 1250px) {
    padding: 0px 24px;
    height: 210px;
  }

  @media screen and (max-width: 992px) {
    padding-left: 24px;
    height: 180px;
    overflow-x: auto;
    overflow-y: hidden;
  }
}

.details-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 992px) {
    width: 784px;
    justify-content: unset;
  }
}

.details-item {
  width: 400px;
  height: 100%;

  a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      transition: all 0.3s;
    }

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      font-weight: bold;
      color: white;
      font-family: "TencentSans";
      z-index: 1;

      &::after {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -4px;
        left: 0px;
        background-color: white;
        transform-origin: 0% 50%;
        transform: scaleX(0);
        transition: all 0.3s;
      }

      @media screen and (max-width: 992px) {
        font-size: 24px;
      }
    }

    &::after {
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: rgba(0, 82, 217, 0.7);
      opacity: 0;
      transition: all 0.3s;
    }
  }

  @media screen and (max-width: 992px) {
    width: 240px;
  }
}

.details-item a:hover {
  img {
    transform: scale(1.025);
  }

  &::after {
    opacity: 1;
  }

  p::after {
    transform: scaleX(1);
  }
}

.details-item + .details-item {
  margin-left: 20px;
}

.link {
  width: 100%;
  height: 780px;
  background-color:#EBEEF5;
// background-image: url('../../../static/img/bg/case_bg.jpg');

  @media screen and (max-width: 992px) {
    padding: 20px 24px;
    background-color: #fbfbfb;
    height: unset;
  }
}

.link-inner {
  width: 1440px;
  height: 100%;
  margin: 0px auto;
  display: flex;

  @media screen and (max-width: 1440px) {
    width: 100%;
    font-size: 14px;
  }
}

.link-tab {
  width: 36%;
  height: 100%;

  @media screen and (max-width: 992px) {
    width: 100%;

    .tab-item-1 {
      background-image: url("https://www.tencent.com/data/mobile/link_bg_1.jpg");
    }

    .tab-item-2 {
      background-image: url("https://www.tencent.com/data/mobile/link_bg_2.jpg");
    }

    .tab-item-3 {
      background-image: url("https://www.tencent.com/data/mobile/link_bg_3.jpg");
    }
  }
}

.link-tab-item {
  width: 100%;
  height: 33.3%;

  a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .inner {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-20px, -50%);
    transition: all 0.3s;

    @media screen and (max-width: 992px) {
      top: unset !important;
      bottom: 32px;
      left: 32px;
      transform: translate(0px, 0px) !important;
    }
  }

  .content {
    color: #2C3E50;
    font-family: "TencentSans";
    position: relative;

    h3 {
      font-size: 30px;
      margin-bottom: 14px;

      @media screen and (max-width: 992px) {
        font-size: 24px;
        margin-bottom: 4px;
      }
    }

    &::before {
      display: block;
      content: "";
      width: 6px;
      height: 85%;
      position: absolute;
      top: 15%;
      left: -45px;
      background-color: #1e52d8;
      opacity: 0;
      transform: translateX(-20px);
      transition: all 0.5s;

      @media screen and (max-width: 992px) {
        display: none;
        justify-content: unset;
      }
    }
  }

  i {
    display: block;
    width: 52px;
    height: 16px;
    background-image: url("https://www.tencent.com/img/index/icon_arrow_r.png");
    background-size: 100% 100%;
    margin-top: 22px;
    opacity: 0;
    transition: all 0.5s;

    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  @media screen and (max-width: 992px) {
    height: 240px;
    background-size: cover;
    background-position: center;
  }
}

.link-tab-item + .link-tab-item {
  margin-top: 0px;

  @media screen and (max-width: 992px) {
    margin-top: 12px;
  }
}

.link-tab-active {
  .inner {
    transform: translate(0px, -50%);
  }

  .content::before {
    opacity: 1;
    transform: translateX(0px);
  }

  i {
    opacity: 1;
  }
}

.link-content {
  width: 64%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 992px) {
    display: none;
  }
}

.link-content-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;

  li {
    width: 50%;
    height: 50%;
    background-size: 100% 100%;

    a {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }

    .icon-more {
      display: block;
      width: 31px;
      height: 14px;
      position: absolute;
      top: 268px;
      right: 43px;
      background-image: url("https://www.tencent.com/img/index/icon_arrow_r_s.png");
      background-size: 100% 100%;
      transform: translateX(-20px);
      opacity: 0;
      transition: transform 0.3s;
    }
  }

  .item-1-1 {
    background-image: url("https://www.tencent.com/data/index/index_link_1_1.jpg");
  }

  .item-1-2 {
    background-image: url("https://www.tencent.com/data/index/index_link_1_2.jpg");
  }

  .item-1-3 {
    background-image: url("https://www.tencent.com/data/index/index_link_1_3.jpg");
  }

  .item-1-4 {
    background-image: url("https://www.tencent.com/data/index/index_link_1_4.jpg");
  }

  .item-2-1 {
    background-image: url("https://www.tencent.com/data/index/index_link_2_1.jpg");
  }

  .item-2-2 {
    background-image: url("https://www.tencent.com/data/index/index_link_2_2.jpg");
  }

  .item-2-3 {
    width: 100%;
    background-image: url("https://www.tencent.com/data/index/index_link_2_3.jpg");
  }

  .item-3-1 {
    background-image: url("https://www.tencent.com/data/index/index_link_3_1.jpg");
  }

  .item-3-2 {
    background-image: url("https://www.tencent.com/data/index/index_link_3_2.jpg");
  }

  .item-3-3 {
    background-image: url("https://www.tencent.com/data/index/index_link_3_3.jpg");
  }

  .item-3-4 {
    background-image: url("https://www.tencent.com/data/index/index_link_3_4.jpg");
  }

  .link-item-content {
    width: 100%;
    padding: 0px 43px;
    margin-top: 312px;
    color: white;
    font-family: "TencentSans";
    transition: all 0.3s;

    h4 {
      font-size: 24px;
      margin: 0px;
    }

    p {
      line-height: 1.8;
      margin-top: 9px;
      opacity: 0;
      transition: all 0.3s;
    }
  }

  li:hover {
    .link-item-content {
      margin-top: 256px;

      p {
        opacity: 1;
      }
    }

    .icon-more {
      transform: translateX(0px);
      opacity: 1;
    }
  }
}

.welfare {
  width: 1280px;
  margin: 84px auto;
  display: flex;
  align-items: center;

  @media screen and (min-width: 992px) and (max-width: 1350px) {
    width: 100%;
    padding: 0px 20px;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0px 24px;
    flex-direction: column-reverse;
    align-items: flex-start;
    margin: 42px auto;
  }
}

.welfare-carousel {
  width: 627px;
  height: 620px;

  @media screen and (max-width: 992px) {
    width: 100%;
    height: 350px;
  }
}

.welfare-content,
.develop-content {
  font-family: "TencentSans";
  margin-left: 68px;

  h3 {
    color: #2a2e2e;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;

    @media screen and (max-width: 992px) {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }

  p {
    color: #5f6464;
    font-size: 20px;
    margin-bottom: 40px;

    @media screen and (max-width: 992px) {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }

  i {
    display: inline-block;
    width: 38px;
    height: 16px;
    background-image: url("https://www.tencent.com/img/index/icon_arrow_r_dark.png");
    background-size: 100% 100%;
  }

  @media screen and (max-width: 992px) {
    margin-left: 32px;
    margin-bottom: 32px;
  }
}

.develop {
  width: 100%;
  height: 1040px;
  position: relative;

  .develop-content {
    position: absolute;
    top: 16%;
    left: 6.6%;
    z-index: 1;

    @media screen and (max-width: 992px) {
      position: static;
      top: unset;
      left: unset;
      z-index: unset;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1450px) {
    height: 700px;
  }

  @media screen and (max-width: 992px) {
    height: unset;
    padding: 0px 24px;
    margin-bottom: 12px;
  }

  .develop-carousel {
    @media screen and (max-width: 992px) {
      height: 400px !important;
    }
  }
}

footer {
  @media screen and (max-width: 992px) {
    background-color: #fbfbfb;
  }
}

.footer-inner {
  width: 1200px;
  margin: 0px auto;
  padding-top: 33px;
  padding-bottom: 44px;

  @media screen and (min-width: 992px) and (max-width: 1250px) {
    width: 96%;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 40px 30px 20px 30px;
  }
}

.focus-us {
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f3f5;
  margin-bottom: 40px;

  h3 {
    color: #5f6464;
    font-size: 20px;

    @media screen and (max-width: 992px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 992px) {
    padding-bottom: 0px;
    border-bottom: none;
    margin-bottom: 18px;
  }
}

.focus-list {
  margin-left: 33px;
  display: flex;

  li {
    margin-right: 28px;

    a {
      display: inline-block;
      position: relative;

      .wechat-qrcode {
        width: 176px;
        height: 176px;
        position: absolute;
        top: -186px;
        left: 0px;
      }
    }

    i {
      display: inline-block;
      width: 28px;
      height: 28px;
      background-size: 100% 100%;
      transition: all 0.2s;

      @media screen and (max-width: 992px) {
        width: 22px;
        height: 22px;
      }
    }

    .wechat-icon {
      background-image: url("https://www.tencent.com/img/index/icon_wechat.png");
    }

    .wechat-icon:hover {
      background-image: url("https://www.tencent.com/img/index/icon_wechat_hover.png");
    }

    .weibo-icon {
      background-image: url("https://www.tencent.com/img/index/icon_weibo.png");
    }

    .weibo-icon:hover {
      background-image: url("https://www.tencent.com/img/index/icon_weibo_hover.png");
    }

    .twitter-icon {
      background-image: url("https://www.tencent.com/img/index/icon_twitter.png");
    }

    .twitter-icon:hover {
      background-image: url("https://www.tencent.com/img/index/icon_twitter_hover.png");
    }

    .in-icon {
      background-image: url("https://www.tencent.com/img/index/icon_in.png");
    }

    .in-icon:hover {
      background-image: url("https://www.tencent.com/img/index/icon_in_hover.png");
    }
  }

  @media screen and (max-width: 992px) {
    margin-left: 21px;
  }
}

.more-info {
  width: 100%;
  display: flex;
  align-items: stretch;

  .nav {
    width: 50%;
    display: flex;

    @media screen and (max-width: 992px) {
      width: 100%;
      display: block;
    }
  }

  .logo {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 75px;

    img {
      width: 212px;
      height: 28px;
    }

    @media screen and (max-width: 992px) {
      display: none;
    }
  }
}

.join-us,
.contact-us,
.legal-info {
  width: 33.3%;

  .nav-title {
    width: 100%;
    margin-bottom: 30px;

    h3 {
      color: #5f6464;
      font-size: 20px;

      @media screen and (max-width: 992px) {
        font-size: 16px;
      }
    }

    i {
      width: 12px;
      height: 12px;
      background-image: url("https://www.tencent.com/img/mobile/icon_arrow_d.png");
      background-size: 100% 100%;
      transition: all 0.2s;
    }

    @media screen and (max-width: 992px) {
      height: 52px;
      margin-bottom: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .nav-list {
    li {
      margin-bottom: 18px;

      a {
        color: #5f6464;

        @media screen and (max-width: 992px) {
          display: block;
          width: 100%;
          padding: 9px 0px;
          font-size: 14px;
        }
      }

      @media screen and (max-width: 992px) {
        margin-bottom: 0px;
      }
    }

    @media screen and (max-width: 992px) {
      height: 0px;
      transition: all 0.3s;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }
}

.nav-expand {
  .nav-title {
    i {
      transform: rotate(180deg);
    }
  }

  .nav-list {
    height: 105px;
  }
}

.outer-links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 48px;

  ul {
    display: flex;

    @media screen and (max-width: 992px) {
      display: none;
    }

    li {
      margin-right: 20px;

      a {
        color: #5f6464;
        font-size: 14px;
      }
    }
  }

  .copyright {
    color: #5f6464;
    font-size: 14px;

    .break-line {
      display: none;

      @media screen and (max-width: 992px) {
        display: unset;
      }
    }

    @media screen and (max-width: 992px) {
      color: #929797;
      font-size: 12px;
      line-height: 1.8;
    }
  }

  @media screen and (max-width: 992px) {
    margin-top: 18px;
  }
}
</style>
