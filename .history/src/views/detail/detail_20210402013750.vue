<!--
 * @Author: Riman
 * @Date: 2021-04-01 22:59:59
 * @LastEditTime: 2021-04-02 01:37:49
 * @LastEditors: Riman
 * @Description: 
-->
<template>
    <div>
        <img src="http://www.bhbt.net/Uploads/Index/2021-02-04/601b693a53b69.jpg" alt="">
        <div>
             <div class="welfare">
                    <div class="welfare-carousel">
                        <carousel :ui="ui.ClipCarousel" :data="welfareList" :duration="4000"></carousel>
                    </div>
                    <div class="welfare-content">
                        <h3>
                            连接
                            <br>
                            责任与信任
                        </h3>
                        <p>聚合微小善行，以科技让世界更美好</p>
                        <a href="#">
                            <i></i>
                        </a>
                    </div>
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
</style>