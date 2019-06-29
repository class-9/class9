<template>
  <div class="card-wrap">
    <div class="header-wrap clearFix" @click="previewImg(dataItem.icon)">
      <img :src="dataItem.icon[0]" class="icon pull-left" />
      <p class="name pull-left">{{dataItem.name}}</p>
      <br />
      <p class="time pull-left">2019.6.27</p>
    </div>
    <div class="sentence-wrap">
      <pre class="content">{{dataItem.sentence}}</pre>
    </div>
    <div v-if="dataItem.images[0]" class="body-wrap" @click="previewImg(dataItem.images)">
      <div v-show="dataItem.images.length > 1" class="label">共{{dataItem.images.length}}张</div>
      <img :src="dataItem.images[0]" class="picture" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object
    }
  },
  methods: {
    previewImg (picList) {
      this.$emit('openPre', picList)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrap {
  width: 7.5rem;
  background: #ffffff;
  font-family: "Microsoft YaHei";
  margin-bottom: 0.2rem;
  .header-wrap {
    width: 3rem;
    padding: 0.2rem 0 0.2rem 0.2rem;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
    .name {
      font-size: 0.3rem;
      color: #000000;
    }
    .time {
      font-size: 0.2rem;
      color: rgb(93, 93, 94);
    }
  }
  .sentence-wrap {
    padding-left: 0.2rem;
    padding-bottom: 0.2rem;
    .content {
      line-height: 0.36rem;
      font-size: 0.26rem;
      color: #000000;
      font-family: "Microsoft YaHei";
    }
  }
  .body-wrap {
    min-height: 3rem;
    position: relative;
    .label {
      width: 0.8rem;
      height: 0.34rem;
      line-height: 0.34rem;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0.3rem;
      font-size: 0.2rem;
      color: #ffffff;
      position: absolute;
      top: 0.1rem;
      right: 0.2rem;
    }
    .picture {
      width: 7.5rem;
    }
  }
}
</style>
