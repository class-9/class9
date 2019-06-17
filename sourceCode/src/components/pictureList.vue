<template>
  <div class="pic-list-container">
    <div class="container">
      <div class="wrap">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
      border-radius: 0.1rem;
      margin-top: 0.4rem;
    }
  }
}
</style>
