<!--
 * @Author: Riman
 * @Date: 2021-04-01 22:59:59
 * @LastEditTime: 2021-04-02 01:37:19
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

<style lang="" scoped>
    
</style>