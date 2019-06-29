<template>
  <div class="pre-container" @click="closePre">
    <div class="wrapper">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <div
            class="gallery-img"
            :style="index < (activeIndex + 3) ? { backgroundImage: `url(${item})` } : {backgroundImage: ''}"
          ></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        on: {
          slideChangeTransitionEnd: () => {
            let swiper = this.$refs.mySwiper.swiper
            this.activeIndex = swiper.activeIndex
          }
        }
      },
      activeIndex: 0
    }
  },
  methods: {
    closePre () {
      this.$refs.mySwiper.swiper.slideTo(0, 0, false)
      this.activeIndex = 0
      this.$emit('closePre')
    }
  }
}
</script>
<style lang="scss" scoped>
.pre-container /deep/ .swiper-container {
  overflow: inherit;
}

.pre-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  width: 7.5rem;
  height: 100vh;
  position: fixed;
  top: 0;
  background: #000;

  .wrapper {
    width: 100%;

    .gallery-img {
      width: 100%;
      height: 100vh;
      background-repeat: no-repeat;
      background-position: center 30%;
      background-size: contain;
    }
    .swiper-pagination {
      color: #ffffff;
      bottom: 2rem;
    }
  }
}
</style>
