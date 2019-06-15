<template>
  <div class="container">
    <div class="head-wrap border-bottom clearFix">
      <div class="nav nav-1 pull-left" @click="selectNav(0)">留言</div>
      <div class="nav nav-2 pull-right" @click="selectNav(1)">相册</div>
      <div :class="select === 0 ? 'bar left-bar' : 'bar right-bar'"></div>
    </div>
    <div v-show="select===0" class="body-wrap">
      <card v-for="(item, index) in dataList" :key="index" :dataItem="item" @openPre="openPre"></card>
    </div>
    <div v-show="select===1" class="picture-list">开发中~</div>
    <div v-show="select===0" class="footer">没有更多啦~</div>
    <common-gallery v-show="preController" :imgs="pictureList" @closePre="closePre"></common-gallery>
  </div>
</template>

<script>
import CONTANST from '../assets/constant/constant'
import Card from '../components/cardComonent'
import CommonGallery from '../components/commonGallery'
export default {
  components: {
    Card,
    CommonGallery
  },
  data () {
    return {
      dataList: CONTANST.content,
      select: 0,
      pictureList: [],
      preController: false
    }
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    selectNav (index) {
      this.select = index
    },
    openPre (data) {
      this.pictureList = data
      this.preController = true
    },
    closePre () {
      this.preController = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 7.5rem;
  height: 100vh;
  font-size: 0.4rem;
  background: #f5f6f5;
  padding-top: 0.8rem;
  .head-wrap {
    width: 7.5rem;
    height: 0.8rem;
    background: #ffffff;
    position: fixed;
    top: 0;
    z-index: 2;
    .nav {
      width: 3.75rem;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.34rem;
      text-align: center;
    }
    .bar {
      width: 1.6rem;
      height: 0.02rem;
      background: #000000;
      position: absolute;
      top: 0.79rem;
    }
    .left-bar {
      left: 1.075rem;
    }
    .right-bar {
      right: 1.075rem;
    }
  }
  .footer {
    text-align: center;
    font-size: 0.24rem;
    color: rgb(81, 82, 82);
    padding: 0.1rem 0 0.2rem 0;
  }
}
</style>
