<template>
  <div class="clxone">
    <BigPicture :url="require('~/assets/images/banner-clxone.jpg')">
      <div class="title wrapper">
        <h1 class="banner-title">CLXOne®</h1>
        <h1 class="banner-title">轻松启动新一代信息技术网络</h1>
        <p class="banner-info">CLXOne®数字基础设施平台，建立在云基础之上，以云为动力实现数据中心、云、网络和边缘统一管理。</p>
      </div>
    </BigPicture>

    <div class="room">
      <SolutionZoom>
        <TitleGroup
          class="solution-section wrapper"
          main-title="CLXOne®关键价值"
          subtitle="KEY VALUES"
        />
        <div class="key-value-process wrapper">
          <ul>
            <li>
              <img
                src="~/assets/images/clxone-data.png"
                alt="升迁"
              >
              <h3>以数据为核心</h3>
              <p>基础设施无处不在，数据也一样。创建和维护一个可信的网络资源数据仓库SoT，将数据放在跨IT、数字和业务领域的平台核心位置，同时提供将数据转化为洞察力和工具的能力，在全生命周期循环。</p>
            </li>
            <li>
              <img
                src="~/assets/images/clxone-cloud.png"
                alt="自动化"
              >
              <h3>把网络带到云端</h3>
              <p>使用微服务和容器化方面的最新创新技术，通过Docker和Kubernetes将管理平面从设备转移到云端；简化网络资产和网络服务的管理，同时易于扩展，并能够快速交付新服务。</p>
            </li>
            <li>
              <img
                src="~/assets/images/clxone-visual.png"
                alt=""
              >
              <h3>全生命周期可见性</h3>
              <p>从规划设计、建设实施、到运营服务，提供全链条产品与服务支撑，同时获得全生命周期可见性。让新一代信息技术代际升迁更简单。</p>
            </li>
          </ul>
        </div>
        <div class="wrapper clxone-core">
          <img
            src="~/assets/images/clxone-core.png"
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
    justify-content: space-between;
    border-top: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;

    li {
      list-style: none;
      width: 336px;
      font-size: 14px;
      color: #141414;
      line-height: 27px;
      padding: 50px 0;
      img {
        width: 60px;
        height: 60px;
        margin-bottom: 15px;
      }
      h3 {
        font-size: 16px;
        color: #141414;
        margin-bottom: 12px;
      }
      p {
        font-size: 14px;
        color: #777;
      }
    }
  }
}
.clxone-core {
  img {
    display: block;
    margin: 70px auto;
    width: 907px;
    height: 361px;
  }
}
</style>