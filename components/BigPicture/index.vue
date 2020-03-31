<template>
  <div class="bigPic" :style="`background-image: url(${url})`">
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