<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-01 21:36:01
 * @LastEditors: Riman
 * @Description: 
-->
<template>
 <div class="my-swiper wh" ref="mySwiper">
        <ul class="my-swiper-wrap"  :style="{width:classobj,transform: translateXVal}" v-if="isShow" @mouseenter.stop.prevent="enter"
             @mouseleave.stop.prevent="leave" @mousedown.stop.prevent="mousedown($event)" 
             @mouseup.stop.prevent="mouseup($event)" ref='swiperWrap'  >
            <li class="my-swiper-item" v-for="(item,index) in list" :key='index' >
                <img :src="item.image" :alt='index' class="wh"  >
            </li>
        </ul>
        <ul class="dots-wrap">
            <li v-for="(item,index) in list" @click="current(index)"  @mouseenter="enter"
                :class="['dots',currentIndex==index?'dots-active':'']" :key='index'></li>
        </ul>
        <div :class="['prev-icon',currentIndex==0?'disable-icon':'']" @click="prev" v-if="isShowIcon" @mouseenter="enter">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div :class="['next-icon',currentIndex==num-1?'disable-icon':'']" @click="next" v-if="isShowIcon" @mouseenter="enter">
            <i class="el-icon-arrow-right"></i>
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
      ],
       isShow:false,
            classobj:'100%',
            swiperWidth:null,
            translateXVal:"translateX(0px)",
            currentIndex:0,
            translateXCurrentVal:0,
            isShowIcon:false,
            startX:0,
            isMouseDown:false,
            isAutoPlay:false,
            timer:5000,
            timerObj:null,
            minX:null,
            maxX:null,
            minY:null,
            maxY:null,
            downTime:null,  //鼠标按下时间
            upTime:null     //鼠标松开时间

    };
  },
  mounted(){
        this.$nextTick(()=>{	
            this.swiperWidth=this.$refs.mySwiper.offsetWidth  
            this.classobj=this.num*this.swiperWidth+'px'
            this.isShow=true
            this.isAutoPlay=true
            this.autoPaly()
            document.addEventListener("mousemove",this.mousemoveDoc)
        })
    },
    computed:{
        num(){
            return this.list.length
        }			
    },
    methods:{
        jumpUrl(){
           this.$emit("jumpUrl",this.list[this.currentIndex])        
        },
        autoPaly(){
            if(!this.isAutoPlay){
                this.timerObj?clearInterval(this.timerObj):false
                return
            }
            this.timerObj=setInterval(()=>{
                if(this.currentIndex===this.num-1){
                    this.currentIndex=0
                    this.move()
                }else{
                    this.currentIndex+=1
                    this.move()
                }
            },this.timer)
        },
        enter(){
            this.isShowIcon=true
            this.isAutoPlay=false
            this.autoPaly()
        },
        leave(){
            this.isShowIcon=false
            this.isAutoPlay=true
            this.autoPaly()
        },
        current(index){
            this.currentIndex=index
            this.move()
        },
        prev(){
            if(this.currentIndex<=0){
                this.currentIndex=0
                return
            }
            this.currentIndex-=1
            this.move()
        },
        next(){
            if(this.currentIndex>=this.num-1){
                this.currentIndex=this.num-1
                return
            }
            this.currentIndex+=1
            this.move()
        },
        move(){
            this.translateXHandle(-this.currentIndex*this.swiperWidth)
            this.translateXCurrentVal=-this.currentIndex*this.swiperWidth
        },
        translateXHandle(val){
            this.translateXVal=`translateX(${val}px)`
        },
        mousedown(e){
            var e = e || window.event;//要用event这个对象来获取鼠标的位置
            e.preventDefault()
            e.stopPropagation()
            let mySwiperObj=this.$refs.mySwiper.getBoundingClientRect()
            this.minX=mySwiperObj.left
            this.maxX=mySwiperObj.left+mySwiperObj.width
            this.minY=mySwiperObj.top
            this.maxY=mySwiperObj.left+mySwiperObj.height
            this.startX = e.clientX 
            this.isMouseDown=true
            this.downTime=new Date().getTime()
        },
        mousemoveDoc(e){
            var e = e || window.event;//要用event这个对象来获取鼠标的位置
            e.preventDefault()
            e.stopPropagation()
            if(this.isMouseDown){
                let moveX=e.clientX
                let moveY=e.clientY
                console.log(moveX)
                if(moveX>=this.minX && moveX<=this.maxX && moveY>=this.minY && moveY<=this.maxY){
                    this.translateXHandle(this.translateXCurrentVal+moveX-this.startX)
                    
                }else if(moveX<this.minX){
                    this.slideHanlde(this.minX)
                }else if(moveX>this.maxX){
                    this.slideHanlde(this.maxX)
                }     
            }
        },
        mouseup(e){      
            var e = e || window.event;//要用event这个对象来获取鼠标的位置       
            e.preventDefault()   
            e.stopPropagation()  
            this.upTime=new Date().getTime()
            if( this.upTime-this.downTime>100){
                let endX= e.clientX         
                console.log("滑动")
                this.slideHanlde(endX)
            }else{
                console.log("点击")
                this.isMouseDown=false
                this.jumpUrl()
            }
           
        },
        slideHanlde(endX){
            this.isMouseDown=false
            if(this.startX-endX>100){  //左滑
                if(this.currentIndex===this.num-1){                
                    this.translateXHandle(this.translateXCurrentVal)
                }else{
                    this.currentIndex+=1
                    this.move()
                }
            }else if(endX-this.startX>100){  //右滑
                if(this.currentIndex===0){
                    this.translateXHandle(this.translateXCurrentVal)
                }else{
                    this.currentIndex-=1
                    this.move()
                }  
            }else{  //还原
                this.translateXHandle(this.translateXCurrentVal)
            }
        }

    }

};
</script>

<style lang="scss" scoped></style>
