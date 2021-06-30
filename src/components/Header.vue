<template>
  <header
    ref="header"
    class="header"
    :style="{ backgroundColor: bg_color, position: hd_position }"
  >
    <div>
      <!-- <div :class="{ img_hover: hover_flag }" class="web_icon">
        <img src="../assets/bg_logo.png" alt="官网" @click="toHome" />
      </div> -->
      <ul>
        <li
          v-for="(item, index) in titleList"
          :key="index"
          @click="selected(item)"
        >
          <a :class=" active == item.id ?'active':''">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    titleList: {
      type: Array,
      default: [],
    },
    eId: { type: String, default: "" },
    bg_color: {
      type: String,
      default: "transparent",
    },
    hd_position: {
      type: String,
      default: "fixed",
    },
    hover_flag: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      active:''
    };
  },
  computed: {
    // active() {
    //   return this.eId;
    // },
  },
  mounted() {
    this.active = this.$route.hash.substr(1);
  },
  watch:{
    eId(n){
      this.active=n
    },
    active(n){
      window.location.href = `${location.origin}${location.pathname}${location.search}#${n}`
    }
  },
  methods: {
    selected(item) {
      this.active = item.id;
      // this.$emit("getCurrent", item);
    },
    toHome() {
      this.active = "home";
    },
  },
};
</script>

<style lang="scss" scoped>
$white: #ffffff;
@mixin rim {
  background: transparent none repeat scroll 0 0;
  content: "";
  height: 10px;
  position: absolute;
  width: 25px;
  visibility: hidden;
  transition: 0.3s ease;
  opacity: 0;
}
header {
  color: $white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  padding: 2% 0;
  transition: background-color 1.5s;
  & > div {
    display: flex;
    justify-content: space-between;
    margin: 0 10%;
    .web_icon {
      img {
        position: absolute;
        z-index: inherit;
        cursor: pointer;
      }
    }
    ul {
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
      font-weight: bold;
      display: flex;
      list-style: none;
      li {
        margin-right: 5px;
        box-sizing: border-box;
        position: relative;
        a {
          display: block;
          line-height: 20px;
          padding: 6px 15px;
          text-decoration: none;
          box-sizing: border-box;
          color: $white;
          position: relative;
          background-color: transparent;
          text-transform: uppercase;
          transition: 0.3s ease;
          &.active {
            color: #ff8724;
            &::before {
              visibility: visible;
              opacity: 1;
              left: 0;
            }
            &::after {
              visibility: visible;
              opacity: 1;
              right: 0;
            }
          }
          &:hover {
            background: none;
            color: #ff8724;
            outline: none;
            &::before {
              visibility: visible;
              opacity: 1;
              left: 0;
            }
            &::after {
              visibility: visible;
              opacity: 1;
              right: 0;
            }
          }
          &::before {
            @include rim;
            border-left: 1px solid #ff8724;
            border-top: 1px solid #ff8724;
            top: 0;
            left: -70px;
          }
          &::after {
            @include rim;
            border-right: 1px solid #ff8724;
            border-bottom: 1px solid #ff8724;
            bottom: 0;
            right: 70px;
          }
        }
      }
    }
  }
}
// 动画
@keyframes shine {
  from {
    background-position: 130%;
  }
  to {
    background-position: -50%;
  }
}
</style>
