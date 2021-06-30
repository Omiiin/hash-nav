<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-01 22:07:58
 * @LastEditors: Riman
 * @Description: 
-->
<template>
<div>

  <scroll></scroll>
</div>

</template>

<script>
import scroll from '../../components/scroll/scroll.vue';

export default {
  components: { scroll },
  data() {
    return {
      
      dataList: [
        {
          title: 1,
          id: 1,
          thumb:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563633233,3261344371&fm=26&gp=0.jpg",
        },
        {
          title: 2,
          id: 2,
          thumb:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2075695866,304762525&fm=26&gp=0.jpg",
        },
        {
          title: 3,
          id: 3,
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg",
        },
        {
          title: 4,
          id: 4,
          thumb:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2075695866,304762525&fm=26&gp=0.jpg",
        },
        {
          title: 5,
          id: 5,
          thumb:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563633233,3261344371&fm=26&gp=0.jpg",
        },
      ],
    };
  },

  created() {
    this.move();
  },
  mounted() {
    var imgBox = document.getElementsByClassName("imgBoxoul")[0];
    imgBox.innerHTML += imgBox.innerHTML;
  },

  computed: {
    widthData() {
      return 240 * Number(this.dataList.length * 2);
    },
  },
  methods: {
    //移动
    move() {
      this.timer = setInterval(this.starmove, 20);
    },
    //开始移动
    starmove() {
      this.calleft -= 1.2; //*this.speed
      if (this.calleft <= -1150) {
        this.calleft = 0;
      }
    },
    //鼠标悬停时停止移动
    stopmove() {
      clearInterval(this.timer);
    },
    //点击按钮左移
    zuohua() {
      this.calleft -= 240; //this.speed = 1
      if (this.calleft <= -1200) {
        this.calleft = 0;
      }
    },
    //点击按钮右移
    youhua() {
      //this.speed = -1
      this.calleft += 240;
      if (this.calleft >= 0) {
        this.calleft = -1200;
      }
    },
  },
};
</script>

<style>
.threeImg {
  position: relative;
}

.threeImg .Containt ul {
  margin: 0 auto;
  width: 2400px;
  position: absolute;
  left: 0px;
  cursor: pointer;
  height: 100%;
  z-index: 10;
}

.threeImg .Containt ul li {
  float: left;
  width: 220px;
  height: 350px;
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
}

.threeImg .Containt ul li img {
  width: 100%;
  height: 263px;
}

.Containt {
  position: relative;
  padding: 60px 0;
  overflow-y: auto;
  width: 1200px;
  height: 365px;
  overflow: hidden;
  margin: 0 auto;
}

.iconleft {
  position: absolute;
  width: 20px;
  height: 80px;
  top: 35%;
  left: 15%;
  z-index: 99999;
  /* background: url("~@/assets/image/left.png") no-repeat; */
  cursor: pointer;
}

.iconright {
  position: absolute;
  top: 37%;
  right: 15%;
  width: 20px;
  height: 80px;
  z-index: 99999;
  /* background: url("~@/assets/image/left.png") no-repeat; */
  -webkit-transform: rotate(180deg);
  cursor: pointer;
}
</style>
