<template>
  <div>
    <div class="joinus">
      <div class="text">
        <h2>联系我们</h2>
        <div>
          <p>地址：xxxxxxxxxxxx</p>
          <p>电话：xxxxxxxxxx</p>
        </div>
      </div>
    </div>
  </div>
  <!-- </footer> -->
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footList: [
        {
          title: "产品体系",
          subList: [
            {
              sub_title: "智能产品",
              link: "",
            },
            {
              sub_title: "能效",
              link: "",
            },
            {
              sub_title: "新能源",
              link: "",
            },
          ],
        },
        {
          title: "解决方案",
          subList: [
            {
              sub_title: "基于用户蓄电池分布式储能服务平台",
              link: "",
            },
            {
              sub_title: "城市能源管控服务云平台",
              link: "",
            },
            {
              sub_title: "需求侧能源管控平台",
              link: "",
            },
            {
              sub_title: "智慧水务管控一体化平台",
              link: "",
            },
          ],
        },
        {
          title: "关于我们",
          subList: [
            {
              sub_title: "了解我们",
              link: "",
            },
            {
              sub_title: "发展历程",
              link: "",
            },
            {
              sub_title: "奖项荣誉",
              link: "",
            },
            {
              sub_title: "新闻动态",
              link: "",
            },
          ],
        },
      ],
      viewList: [
        {
          path: "flickr01.jpg",
          link: "",
        },
        {
          path: "flickr02.jpg",
          link: "",
        },
        {
          path: "flickr03.jpg",
          link: "",
        },
        {
          path: "flickr04.jpg",
          link: "",
        },
        {
          path: "flickr05.jpg",
          link: "",
        },
        {
          path: "flickr06.jpg",
          link: "",
        },
        {
          path: "flickr07.jpg",
          link: "",
        },
        {
          path: "flickr08.jpg",
          link: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .joinus{
        height: 160px;
        position: absolute;
        overflow: auto;
        width: 100%;
        color: white;
        background: rgb(30, 30, 30);
        
       .text{
           text-align: left;
           margin: 30px 15%;
       }
        
    }
</style>
