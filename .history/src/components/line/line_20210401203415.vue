<!--
 * @Author: Riman
 * @Date: 2021-04-01 20:18:25
 * @LastEditTime: 2021-04-01 20:34:15
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div class="box">
    <div id="goleft" >
      <div id="gols">
        <div id="goleft1">
          <a href=""
            ><img v-for="item in 9"
              :src="'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg'"
              alt="6"
              width="100"
              height="70"
          /></a>
        
        </div>
        <div id="goleft2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        speed2:20,
        MyMar2:''

    };
  },
  created(){
    //   this.MyMar2=setInterval(Marquee2,speed2)
  },
//   methods: {
//     Marquee2() {
//     //   var speed2 = 20;
//       var FGgoleft = document.getElementById("goleft");
//       var FGgoleft1 = document.getElementById("goleft1");
//       var FGgoleft2 = document.getElementById("goleft2");
//       FGgoleft2.innerHTML = FGgoleft1.innerHTML;
//       if (FGgoleft2.offsetWidth - FGgoleft.scrollLeft <= 0) {
//         FGgoleft.scrollLeft -= FGgoleft1.offsetWidth;
//       } else {
//         FGgoleft.scrollLeft++;
//       }
//     },
//     mouseover(){
//          clearInterval(this.MyMar2) 
//     },
//     mouseout(){
//         this.MyMar2=setInterval(Marquee2,this.speed2)
//     }
//   },
};
</script>

<style lang="" scoped></style>
