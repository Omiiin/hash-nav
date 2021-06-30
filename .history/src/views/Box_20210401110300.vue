<!--
 * @Author: Riman
 * @Date: 2021-04-01 10:58:28
 * @LastEditTime: 2021-04-01 11:02:59
 * @LastEditors: Riman
 * @Description: 
-->
<template>
<div>
 <header></header>
    <demo></demo>
</div>
   
</template>

<script>
import Header from '@/components/Header'
import Demo from '@/components/Demo'
    export default {
        name: 'Box',
        components:{
            Header,Demo
     
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        height: 75px;
    }
</style>