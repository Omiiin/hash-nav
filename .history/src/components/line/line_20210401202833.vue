<!--
 * @Author: Riman
 * @Date: 2021-04-01 20:18:25
 * @LastEditTime: 2021-04-01 20:28:33
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div class="box">
    <div id="goleft" @mouseover="mouseover" @mouseout="mouseout">
      <div id="gols">
        <div id="goleft1">
          <a href=""
            ><img
              src="http://image.cnicif.com/big/2013/5/14/jpg20130514011700784.jpg"
              alt="6"
              width="100"
              height="70"
          /></a>
          <a href=""
            ><img
              src="http://image.cnicif.com/big/2013/5/14/jpg20130514011612885.jpg"
              alt="5"
              width="100"
              height="70"
          /></a>
          <a href=""
            ><img
              src="http://image.cnicif.com/big/2013/5/14/jpg20130514011552639.jpg"
              alt="4"
              width="100"
              height="70"
          /></a>
          <a href=""
            ><img
              src="http://image.cnicif.com/big/2013/5/14/jpg20130514011502241.jpg"
              alt="3"
              width="100"
              height="70"
          /></a>
          <a href=""
            ><img
              src="http://image.cnicif.com/big/2013/5/14/jpg20130514011344231.jpg"
              alt="2"
              width="100"
              height="70"
          /></a>
          <a href=""
            ><img
              src="http://image.cnicif.com/big/2013/5/14/jpg20130514011113601.jpg"
              alt="1"
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
  methods: {
    Marquee2() {
    //   var speed2 = 20;
      var FGgoleft = document.getElementById("goleft");
      var FGgoleft1 = document.getElementById("goleft1");
      var FGgoleft2 = document.getElementById("goleft2");
      FGgoleft2.innerHTML = FGgoleft1.innerHTML;
      if (FGgoleft2.offsetWidth - FGgoleft.scrollLeft <= 0) {
        FGgoleft.scrollLeft -= FGgoleft1.offsetWidth;
      } else {
        FGgoleft.scrollLeft++;
      }
    },
    mouseover(){
         clearInterval(this.MyMar2) 
    },
    mouseout(){
        this.MyMar2=setInterval(Marquee2,this.speed2)
    }
  },
};
</script>

<style lang="" scoped></style>
