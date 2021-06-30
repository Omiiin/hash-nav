<!--
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-01 21:53:07
 * @LastEditors: Riman
 * @Description: 
-->
<template>
    <div>
        <scroll :dataList='dataList'></scroll>
    </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll.vue'
    export default {
        name: '',
        components:{
            scroll
        },
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
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563633233,3261344371&fm=26&gp=0.jpg",
        },
        {
          title: 3,
          id: 3,
          thumb:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563633233,3261344371&fm=26&gp=0.jpg",
        },
        {
          title: 4,
          id: 4,
          thumb:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563633233,3261344371&fm=26&gp=0.jpg",
        },
        {
          title: 5,
          id: 5,
          thumb:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563633233,3261344371&fm=26&gp=0.jpg",
        },
      ],
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>