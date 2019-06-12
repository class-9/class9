<template>
  <div class="card-wrap">
    <div class="header-wrap clearFix">
      <img :src="dataItem.icon" class="icon pull-left">
      <p class="name pull-left">{{dataItem.name}}</p><br/>
      <p class="time pull-left">2019.6.10</p>
    </div>
    <div class="body-wrap">
      <img :src="dataItem.images[0]" class="picture">
    </div>
    <div class="sentence-wrap">
      <pre class="content">{{dataItem.sentence}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-wrap {
    width: 7.5rem;
    background: #ffffff;
    font-family: 'Microsoft YaHei';
    padding-bottom: .2rem;
    margin-bottom: .2rem;
    .header-wrap {
      padding: .2rem 0 .2rem .2rem;
      .icon {
        width: .6rem;
        height: .6rem;
        border-radius: 50%;
        margin-right: .2rem;
      }
      .name {
        font-size: .3rem;
        color: #000000;
      }
      .time {
        font-size: .2rem;
        color:rgb(93, 93, 94);
      }
    }
    .body-wrap {
      padding-bottom: .2rem;
      min-height: 3rem;
      .picture {
        width: 7.5rem;
      }
    }
    .sentence-wrap {
      padding-left: .2rem;
      .content {
        line-height: .36rem;
        font-size: .24rem;
        color: #000000;
        font-family: 'Microsoft YaHei';
      }
    }
  }
</style>
