<!--
 * @Author: Riman
 * @Date: 2021-04-01 22:59:59
 * @LastEditTime: 2021-04-02 01:43:30
 * @LastEditors: Riman
 * @Description: 
-->
<template>
    <div>
        <img src="http://www.bhbt.net/Uploads/Index/2021-02-04/601b693a53b69.jpg" alt="">
    
             <div class="welfare">
                    <div >
                        <!-- <carousel :ui="ui.ClipCarousel" :data="welfareList" :duration="4000"></carousel> -->
                        <img :src="'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2425960901,3015230195&fm=26&gp=0.jpg'" alt="">
                    </div>
                    <div class="welfare-content">
                        <h3>
                            产品名称
                          
                        </h3>
                        <p>产品介绍酱豆腐立刻返回服务i回复u哈哈v记号记号大家好好 发v 是本分的事书包好 </p>
                     
                    </div>
                
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .welfare {
  width: 1280px;
  margin: 120px auto;
  display: flex;
 
}

.welfare-carousel {
  width: 627px;
  height: 620px;
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
</style>