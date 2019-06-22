<template>
  <div class="pic-list-container">
    <div class="container">
      <div class="wrap" v-for="(item, index) of pictures" :key="index">
        <div
          class="picture"
          :style="{ backgroundImage: `url(${item.pictureContent[0]})` }"
          @click="previewImg(item.pictureContent)"
        ></div>
        <div class="content">
          <p class="name">{{item.name}}</p>
          <p class="number">{{item.pictureContent.length}}张</p>
        </div>
      </div>
      <div class="wrap">
        <div
          class="picture"
          :style="{ backgroundImage: `url(http://39.107.121.241:7001/class9Avatar/video.jpg)` }"
          @click="previewVideo(videos[0].videos)"
        ></div>
        <div class="content">
          <p class="name">{{videos[0].name}}</p>
          <p class="number">{{videos[0].videos.length}}个</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictures: {
      type: Array
    },
    videos: {
      type: Array
    }
  },
  methods: {
    previewImg (picList) {
      this.$emit('openPre', picList)
    },
    previewVideo (videos) {
      this.$emit('openPreVideo', videos)
    }
  }
}
</script>

<style lang="scss" scoped>
.pic-list-container {
  width: 7.5rem;
  min-height: 100vh;
  background: #ffffff;
  .container {
    width: 7.5rem;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .wrap {
      width: 3.3rem;
      height: 4rem;
      margin-top: 0.4rem;
      .picture {
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 0.1rem;
        background-size: cover;
      }
      .content {
        width: 3.3rem;
        height: 0.7rem;
        .name {
          font-size: 0.3rem;
          line-height: 0.5rem;
        }
        .number {
          font-size: 0.2rem;
          color: #b5b5b5;
        }
      }
    }
  }
}
</style>
