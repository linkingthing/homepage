<template>
  <div class="too">
    <BigPicture :url="require('~/assets/images/banner-solution-311.jpg')">
      <div class="title wrapper">
        <h1 class="banner-title">连星IPv6</h1>
        <h1 class="banner-title">代际升迁“3+1+1”解决方案</h1>
        <p class="banner-info">IPv4向IPv6平滑升级演进是一项繁杂的系统工程，涉及影响面非常广，包括网络、业务、组织、流程等，因此需要对IPv6平滑演进的整个生命周期
          进行全面的掌控，需要对IPv6规模部署进行全流程诊断把关，并跟踪监管。</p>
      </div>
    </BigPicture>

    <div class="room">
      <SolutionZoom>
        <TitleGroup
          class="solution-section wrapper"
          main-title="“3+1+1”解决方案关键价值"
          subtitle="KEY VALUES"
        />
        <div class="key-value-process wrapper">
          <ul>
            <li>
              <img
                src="~/assets/images/k311-circle.png"
                alt="升迁"
              >
              <p>IPv6升迁全生命周期管理，统一数据分析，为演进升级提供决策依据</p>
            </li>
            <li>
              <img
                src="~/assets/images/k311-upgrade.png"
                alt="自动化"
              >
              <p>提供自动化的IPv6升迁管理流程和工具，实现IPv6平滑升级</p>
            </li>
            <li>
              <img
                src="~/assets/images/k311-improve.png"
                alt=""
              >
              <p>全面推进IPv6规模化部署，落地国家政策，提升产业和技术创新水平</p>
            </li>
          </ul>
        </div>
        <div class="wrapper k311-core">
          <img
            src="~/assets/images/k311-core.png"
            alt=""
          >
        </div>
      </SolutionZoom>
    </div>

  </div>
</template>

<script>

import BigPicture from "~/components/BigPicture";
import SolutionZoom from "~/components/SolutionZoom";
import TitleGroup from "~/components/TitleGroup";


export default {
  components: {
    BigPicture,
    SolutionZoom,
    TitleGroup
  },
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
.solution-section {
  margin-bottom: 60px;
}
.key-value-process {
  ul {
    display: flex;
    padding: 0;
    justify-content: center;
    border-top: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;

    li {
      list-style: none;
      width: 246px;
      text-align: center;
      margin: 0 70px;
      font-size: 14px;
      color: #141414;
      line-height: 27px;
      padding: 30px 0 38px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
.k311-core {

  img {
    display: block;
    margin: 70px auto;
    width: 824px;
    height: 423px;
  }
}
</style>