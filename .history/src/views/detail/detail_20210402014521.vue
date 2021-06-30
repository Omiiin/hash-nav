<!--
 * @Author: Riman
 * @Date: 2021-04-01 22:59:59
 * @LastEditTime: 2021-04-02 01:45:21
 * @LastEditors: Riman
 * @Description: 
-->
<template>
    <div>
        <img class="bg" src="http://www.bhbt.net/Uploads/Index/2021-02-04/601b693a53b69.jpg" alt="">
    
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
.bg{
    width: 100%;
}
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

 
  }

  p {
    color: #5f6464;
    font-size: 20px;
    margin-bottom: 40px;

  
  }

 
 
}
</style>