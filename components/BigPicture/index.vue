<template>
  <div
    class="bigPic"
    :style="`background-image: url(${url})`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.bigPic {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
}
</style>
<style lang="less">
.bigPic {
  color: #fff;
  display: flex;
  align-items: center;

  .banner-title {
    font-size: 40px;
    & + .banner-info {
      margin-top: 20px;
    }
  }
  .banner-info {
    width: 937px;
    line-height: 26px;
    font-size: 16px;
  }
}
</style>