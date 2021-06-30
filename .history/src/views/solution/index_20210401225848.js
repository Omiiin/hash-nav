import createVue from '@/main'
import './index.scss'

import NavBar from '@/common/nav-bar.vue'
import indexVideoImg from '@img/index-video.jpg'
import Carousel from '@c/Carousel/index.vue'
import ClipCarousel from '@c/Carousel/ui/clip-carousel.vue'
import FullCarousel from '@c/Carousel/ui/full-carousel.vue'

createVue({
    components: {
        NavBar,
        Carousel
    },
    data: {
        ui: {
            ClipCarousel,
            FullCarousel
        },
        bannerTextIndex: 0,
        indexVideoImg,
        staticBanner: false,
        linkActiveTab: 0,
        welfareList: [
            {
                src: 'https://www.tencent.com/data/index/index_resp_bg1.jpg',
                desc: {
                    title: '99 公益日',
                    content: '每年一度于9月举行的全民公益活动，透过网上平台将大众在活动期间网上作出的捐款进行匹配。'
                }
            },
            {
                src: 'https://www.tencent.com/data/index/index_resp_bg2.jpg',
                desc: {
                    title: '腾讯长城保护项目',
                    content: '腾讯公益慈善基金会与中国文物保护基金会共同合作，吸引公众关注和参与长城保护的文化遗产类公益项目。'
                }
            },
            {
                src: 'https://www.tencent.com/data/index/index_resp_bg3.jpg',
                desc: {
                    title: '腾讯为村',
                    content: '根据乡村使用场景定制微信公众号，形成由村、乡镇、区县、州市组成的公众号集群服务村民，打造手机上的“为村服务中心”。'
                }
            }
        ],
        developList: [
            {
                src: 'https://www.tencent.com/data/index/index_develop_bg1.jpg'
            },
            {
                src: 'https://www.tencent.com/data/index/index_develop_bg2.jpg'
            },
            {
                src: 'https://www.tencent.com/data/index/index_develop_bg3.jpg'
            }
        ],
        qrcodeImgShow: false,
        joinUsExpand: false,
        contactUsExpand: false,
        legalInfoExpand: false
    },
    created() {
        this.initBanner();
    },
    methods: {
        expandFooterNav(index) {
            if(index == 1) {
                this.joinUsExpand = !this.joinUsExpand;
            }
            else if(index == 2) {
                this.contactUsExpand = !this.contactUsExpand;
            }
            else if(index == 3) {
                this.legalInfoExpand = !this.legalInfoExpand;
            }
        },
        tabActiveClass(index) {
            if(index == this.linkActiveTab) {
                return 'link-tab-active'
            }
            else {
                return ''
            }
        },
        setActiveTab(index) {
            this.linkActiveTab = index;
        },
        initBanner() {
            let userAgent = navigator.userAgent;
            // 判断是否为手机浏览器
            if(userAgent.indexOf('Mobile') != -1) {
                this.staticBanner = true;
            }
        },
        bannerTextEnter(el, done) {
            this.anime({
                targets: el,
                translateY: [80, 0],
                opacity: [0, 1],
                easing: 'linear',
                duration: 200,
                complete() {
                    done();
                }
            })
        },
        bannerTextLeave(el, done) {
            this.anime({
                targets: el,
                translateY: [0, -80],
                opacity: [1, 0],
                easing: 'linear',
                duration: 200,
                complete() {
                    done();
                }
            })
        },
        linkContentEnter(el, done) {
            this.anime({
                targets: el,
                opacity: [0, 1],
                easing: 'linear',
                duration: 350,
                complete() {
                    done();
                }
            })
        },
        qrcodeImgEnter(el, done) {
            this.anime({
                targets: el,
                opacity: [0, 1],
                easing: 'linear',
                duration: 200,
                complete() {
                    done();
                }
            })
        },
        qrcodeImgLeave(el, done) {
            this.anime({
                targets: el,
                opacity: [1, 0],
                easing: 'linear',
                duration: 200,
                complete() {
                    done();
                }
            })
        },
        videoPlaying() {
            this.bannerTextIndex = 0;
            setTimeout(() => {
                this.bannerTextIndex = 1;
            }, 2600)
            setTimeout(() => {
                this.bannerTextIndex = 2;
            }, 4600)
            setTimeout(() => {
                this.bannerTextIndex = 3;
            }, 6400)
        }
    }
})