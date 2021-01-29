<template>
  <div class="sot">
    <BigPicture :url="require('~/assets/images/banner-solution-sot.jpg')">
      <div class="title wrapper">
        <h1 class="banner-title">连星IPAM</h1>
        <h1 class="banner-title">唯一真实源SoT</h1>
        <p class="banner-info">
          IPAM作为唯一真实源SoT（Source of Truth）解决方案提供了一种权威或声明性的方法来管理用于设备配置和管理清单的数据 可以准确地反映网络状态和安全策略审计。
        </p>
      </div>
    </BigPicture>

    <div class="room">
      <SolutionZoom>
        <TitleGroup
          class="solution-section wrapper"
          main-title="典型应用场景"
          subtitle="APPLICATION SCENARIOS"
        />
        <div class="application-scene wrapper">
          <ul>
            <li>
              <strong>01</strong>
              <p>使用集中式控制配置IP连接，提高效率和敏捷性，保持领先的设备扩展能力，同时通过统一和精心安排的IP地址规划管理削减运营费用
              </p>
            </li>
            <li>
              <strong>02</strong>
              <p>自动发现、提供、并监视分布式网络中的所有IP资产，通过广泛的集成和数据共享功能，实现在整个基础设施的上下文中分析IP资产，以确保网络持续遵守法规和公司政策</p>
            </li>
            <li>
              <strong>03</strong>
              <p>使用数据驱动的洞察力，在近乎实时的时间内检测网络上的非托管设备。通过DHCP指纹图谱分析连接的设备和历史数据，来简化审计和遵从性工作</p>
            </li>
          </ul>
        </div>
        <div class="wrapper sot-core">
          <img
            src="~/assets/images/sot-core.png"
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
.application-scene {
  ul {
    display: flex;
    padding: 0;
    justify-content: center;
    border-top: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;

    li {
      list-style: none;
      width: 346px;
      margin: 0 auto;
      font-size: 14px;
      color: #141414;
      line-height: 27px;
      padding: 50px 0;
      strong {
        float: left;
        font-size: 48px;
        color: #222;
        border-bottom: 6px solid #ee3434;
        padding-bottom: 20px;
        margin-top: 10px;
      }
      p {
        margin-left: 80px;
      }
    }
  }
}
.sot-core {
  img {
    display: block;
    margin: 74px auto;
    width: 641px;
    height: 422px;
  }
}
</style>