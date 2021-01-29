<template>
  <div class="SolutionZoom">
    <div class="ceil"></div>
    <slot></slot>
    <div class="floor"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {}
};
</script>

<style lang="less" scoped>
.SolutionZoom {
  .ceil {
    height: 370px;
    background: url("../../assets/images/solution-ceiling.png");
    background-size: cover;
    margin-bottom: -278px;
    background-position: center;
  }
  .floor {
    height: 370px;
    background: url("../../assets/images/solution-floor.png");
    background-size: cover;
    margin-top: -370px;
    background-position: center;
  }
}
</style>