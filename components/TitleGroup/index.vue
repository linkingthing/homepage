<template>
  <header class="titleGroup">
    <h2>{{mainTitle}}</h2>
    <p>{{subtitle}}</p>
  </header>
</template>

<script>
export default {
  props: {
    mainTitle: "",
    subtitle: ""
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