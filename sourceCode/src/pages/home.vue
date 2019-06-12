<template>
  <div class="container">
    <div class="head-wrap border-bottom clearFix">
      <div class="nav nav-1 pull-left" @click="selectNav(0)">留言</div>
      <div class="nav nav-2 pull-right" @click="selectNav(1)">相册</div>
      <div :class="select === 0 ? 'bar left-bar' : 'bar right-bar'"></div>
    </div>
    <div v-show="select===0" class="body-wrap">
      <card v-for="(item, index) in dataList" :key="index" :dataItem="item"></card>
    </div>
    <div v-show="select===1" class="picture-list">
      开发中~
    </div>
    <div v-show="select===0" class="footer">没有更多啦~</div>
  </div>
</template>

<script>
import Card from '../components/cardComonent'
import CONTANST from '../assets/constant/constant'
export default {
  components: {
    Card
  },
  data () {
    return {
      dataList: CONTANST.content,
      select: 0
    }
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    selectNav (index) {
      this.select = index
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 7.5rem;
  height: 100vh;
  font-size: .4rem;
  background: #f5f6f5;
  padding-top: .8rem;
  .head-wrap {
    width: 7.5rem;
    height: .8rem;
    background: #ffffff;
    position: fixed;
    top: 0;
    .nav {
      width: 3.75rem;
      height: .8rem;
      line-height: .8rem;
      font-size: .34rem;
      text-align: center;
    }
    .bar {
      width: 1.6rem;
      height: .02rem;
      background: #000000;
      position: absolute;
      top: .79rem;
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
    font-size: .24rem;
    color:rgb(81, 82, 82);
    padding: .1rem 0 .2rem 0;
  }
}
</style>
