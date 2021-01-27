<template>
  <header class="titleGroup" :style="{color: theme}">
    <h2 v-if="topTitle" style="margin-bottom: 0;">{{topTitle}}</h2>
    <h2>{{mainTitle}}</h2>
    <p>{{subtitle.toLocaleUpperCase()}}</p>
  </header>
</template>

<script>
export default {
  props: {
    topTitle: "",
    mainTitle: "",
    subtitle: "",
    theme: {
      type: String,
      default: "#333"
    }
  }
};
</script>

<style lang="less" scoped>
.titleGroup {
  color: #333;
  font-weight: bold;
  h2 {
    font-size: 36px;
    margin-bottom: 16px;
  }
  p {
    font-size: 18px;
    &::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 4px solid #ee3434;
      border-radius: 50%;
      vertical-align: bottom;
      margin-right: 8px;
    }
  }
}
</style>