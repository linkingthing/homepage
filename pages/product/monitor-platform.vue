<template>
  <div class="monitor-platform">
    <BigPicture :url="require('~/assets/images/banner-monitor.jpg')">
      <div class="title wrapper">
        <h1 class="banner-title">连星CLXOne®</h1>
        <h1 class="banner-title">IPv6 发展监测平台</h1>
      </div>
    </BigPicture>

    <div class="monitor-info">
      <TitleGroup
        class="wrapper"
        top-title="CLXOne®"
        main-title="IPv6发展监测平台简介"
        subtitle="brief introduction"
      />
      <div class="wrapper">
        <p class="monitor-info-text">为贯彻落实《推进互联网协议第六版（IPv6）规模部署行动计划》的要求，各级政府机构、企事业单位有必要建设自有的IPv6监测平台或者监测服务，通过主动监测和采集本单位IPv6升级改造的数据信息，客观、准确、全面的反映当前本单位IPv6发展现状，并达成上级监管机构的考核要求。</p>
        <p class="monitor-info-text">
          融合深度应用检测技术，实现对网站、APP应用、数据流量的全方位IPv6发展指标监测，采用权威监管机构（如国家IPv6发展监测平台、金融行业IPv6发展监测平台等）的监测评分指标体系，客观、准确地评估IPv6支持度状况，并根据各项检测指标结果形成整体的监测评分以及完整、详细的监测报告，作为向上汇报或者向下考核的权威依据。
        </p>
      </div>
    </div>

    <div class="platform-components">
      <TitleGroup
        class="wrapper"
        main-title="平台关键特性及组件"
        subtitle="Key components and features of the platform"
      />

      <ul class="wrapper">
        <li>
          <strong>01</strong>
          <h3>政策对标，规划指导</h3>
          <p>对标国家的具体考核指标要求，为企业及各分支单位指明工作目标方向，支撑应用、网络、用户等IPv6升级改造项目的规划、设计、实施，确保政策按要求落地，避免出现“无用功”。</p>
        </li>
        <li>
          <strong>02</strong>
          <h3>深度检测，权威评估</h3>
          <p>通过深度应用检测技术全面分析网站应用的IPv6部署进展情况，并根据权威监测指标体系，客观、准确地评估当前应用改造的合规性和进展度，作为向上汇报和向下考核的权威依据。</p>
        </li>
        <li>
          <strong>03</strong>
          <h3>智能分析，快速达标</h3>
          <p>对检测结果进行智能数据分析，输出符合考核标准的监测报告，并支持一键申报到权威监管平台，帮助政府及企业机构快速达标，通过监管平台的考核要求。</p>
        </li>
      </ul>
    </div>

    <div class="monitor-core"></div>

  </div>
</template>

<script>

import BigPicture from "~/components/BigPicture";
import TitleGroup from "~/components/TitleGroup";

export default {
  components: {
    BigPicture,
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
.monitor-info {
  height: 725px;
  background-image: url("../../assets/images/bg-monitor.png");
  background-size: auto 100%;
  background-position: center;
  padding-top: 140px;
  .monitor-info-text {
    color: #141414;
    font-size: 14px;
    line-height: 33px;
    margin-top: 50px;
    width: 510px;
  }
}

.platform-components {
  height: 525px;
  padding-top: 90px;

  ul {
    border-top: 1px solid #bfbfbf;
    margin-top: 40px;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
      width: 330px;
      strong {
        display: block;
        position: relative;
        font-size: 48px;
        color: #222;
        margin-bottom: 16px;
        &:before {
          position: absolute;
          display: block;
          width: 100%;
          height: 12px;
          background: #EE3434;
        }
      }
      h3 {
        color: #333;
        font-size: 16px;
        margin-bottom: 16px;
      }
      p {
        color: #777;
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
}

.monitor-core {
  height: 834px;
  background-image: url("../../assets/images/monitor-components.png");
  background-size: cover;
  background-position: center;
  
}
</style>