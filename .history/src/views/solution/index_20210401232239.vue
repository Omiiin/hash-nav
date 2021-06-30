<!--
 * @Author: Riman
 * @Date: 2021-04-01 17:42:08
 * @LastEditTime: 2021-04-01 23:22:38
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
                            <transition @enter="linkContentEnter">
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
        0%,100% {
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
    background-color: #1b1f25;
    
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
        color: white;
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

.welfare-content,.develop-content {
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

.join-us,.contact-us,.legal-info {
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
