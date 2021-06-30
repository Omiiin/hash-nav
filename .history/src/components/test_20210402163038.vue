<!--
 * @Author: Riman
 * @Date: 2021-04-02 16:30:08
 * @LastEditTime: 2021-04-02 16:30:38
 * @LastEditors: Riman
 * @Description: 
-->

<template>
  <div class="custom-demo-view" style="padding: 1rem">
    <div>
      <lzy-tabs v-if="reload" @tabclick="jump" v-model="tabIndex" size="larger">
        <lzy-tabs-pane v-if="tabs[0].isShow" :label="tabs[0].title" />
        <lzy-tabs-pane v-if="tabs[1].isShow" :label="tabs[1].title">
        </lzy-tabs-pane>
        <lzy-tabs-pane v-if="tabs[2].isShow" :label="tabs[2].title">
        </lzy-tabs-pane>
      </lzy-tabs>
    </div>
    <div
      class="scroll-content"
      @scroll="onScroll"
      :style="
        'overflow-x: hidden; overflow-y: auto;height:' + contentStyleObj.height
      "
    >
      <div :ref="tabs[0].refName" class="scroll-item" style="padding-top: 1rem">
        <div class="line-title">
          <h2>{{ tabs[0].title }}</h2>
        </div>
        <div>
          <table>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
          </table>
        </div>
      </div>

      <div :ref="tabs[1].refName" class="scroll-item" style="padding-top: 1rem">
        <div class="line-title">
          <h2>{{ tabs[1].title }}</h2>
        </div>
        <div>
          <table>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
          </table>
        </div>
      </div>

      <div
        :ref="tabs[2].refName"
        class="scroll-item"
        style="padding-top: 1rem; top: 5px"
      >
        <div class="line-title">
          <h2>{{ tabs[2].title }}</h2>
        </div>
        <div>
          <table>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reload: true,
      tabIndex: 0,
      contentStyleObj: {
        height: "100px",
      },
      tabs: [
        {
          isShow: true,
          title: "案件概述",
          refName: "setDescRef",
        },
        {
          isShow: true,
          title: "材料附件",
          refName: "setAjclClfjRef",
        },
        {
          isShow: true,
          title: "流转记录",
          refName: "setAjclLzjlRef",
        },
      ],
    };
  },
  methods: {
    refresh() {
      this.reload = false;
      this.$nextTick(() => (this.reload = true));
    },
    jump(index) {
      let target = document.querySelector(".scroll-content");
      let scrollItems = document.querySelectorAll(".scroll-item");
      // 判断滚动条是否滚动到底部
      if (target.scrollHeight <= target.scrollTop + target.clientHeight) {
        this.tabIndex = index;
      }
      let totalY = scrollItems[index].offsetTop - scrollItems[0].offsetTop; // 锚点元素距离其offsetParent(这里是body)顶部的距离(待滚动的距离)
      let distance = document.querySelector(".scroll-content").scrollTop; // 滚动条距离滚动区域顶部的距离
      // let distance = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset // 滚动条距离滚动区域顶部的距离(滚动区域为窗口)
      // 滚动动画实现, 使用setTimeout的递归实现平滑滚动，将距离细分为50小段，10ms滚动一次
      // 计算每一小段的距离
      let step = totalY / 50;
      if (totalY > distance) {
        smoothDown(document.querySelector(".scroll-content"));
      } else {
        let newTotal = distance - totalY;
        step = newTotal / 50;
        smoothUp(document.querySelector(".scroll-content"));
      }

      // 参数element为滚动区域
      function smoothDown(element) {
        if (distance < totalY) {
          distance += step;
          element.scrollTop = distance;
          setTimeout(smoothDown.bind(this, element), 10);
        } else {
          element.scrollTop = totalY;
        }
      }

      // 参数element为滚动区域
      function smoothUp(element) {
        if (distance > totalY) {
          distance -= step;
          element.scrollTop = distance;
          setTimeout(smoothUp.bind(this, element), 10);
        } else {
          element.scrollTop = totalY;
        }
      }
    },
    onScroll(e) {
      let scrollItems = document.querySelectorAll(".scroll-item");
      for (let i = scrollItems.length - 1; i >= 0; i--) {
        // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
        let judge =
          e.target.scrollTop >=
          scrollItems[i].offsetTop - scrollItems[0].offsetTop - 400;
        if (judge) {
          this.tabIndex = i;
          break;
        }
      }
    },
    getHight() {
      this.contentStyleObj.height = window.innerHeight - 90 + "px";
    },
  },
  created() {
    this.getHight();
    window.addEventListener("resize", this.getHight);
  },
  destroyed() {
    window.removeEventListener("resize", this.getHight);
  },
};
</script>
<style lang="scss" scoped>
.custom-demo-view {
  background: #ffffff;
.gd-tabs {
    background: #eee;
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .line-title {
    padding: 1rem 0.5rem;
    background: #eee;
  }
}
</style>
