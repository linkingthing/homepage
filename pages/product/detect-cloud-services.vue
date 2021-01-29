<template>
  <div class="detect-cloud-services">
    <BigPicture :url="require('~/assets/images/banner-detect-cloud-services.jpg')">
      <div class="title wrapper">
        <h1 class="banner-title">连星CLXOne®</h1>
        <h1 class="banner-title">IPv6检测云服务</h1>
      </div>
    </BigPicture>
    <section class="cloud-service-info">
      <TitleGroup
        class="wrapper"
        main-title="IPv6云服务简介"
        subtitle="brief introduction"
      />

      <div class="cloud-service-info-text wrapper">
        连星IPv6云解决方案助力企业快速升级到IPv6基础架构，基于高性能、高冗余、弹性扩展的公有云基础设施和广泛部署的探针节点，并采用容器技术构建基础软件平台，提供360度可靠性的SaaS服务，支持多租户管理，提供丰富的产品选择和可靠安全的服务体验。
      </div>
      <ul class="cloud-service-info-features wrapper">
        <li>
          <h3>IPv6应用检测云服务</h3>
          <p>融合深度应用检测技术，通过部署在全国各地、覆盖三大运营商的探针节点，实现对网站和APP应用的全方位IPv6发展指标监测。</p>
        </li>
        <li>
          <h3>IPv6应用性能拨测服务</h3>
          <p>通过部署在全国三大运营商的探针节点，对IPv6网站、APP应用进行全方位的应用性能评测，拔测应用在不同运营商的访问质量及IPv4、IPv6双平面的网络质量劣化度。</p>
        </li>
        <li>
          <h3>云解析DNS服务</h3>
          <p>安全、快速、稳定、可靠的权威DNS解析管理服务。可根据用户地理位置，智能返回IP地址。线路已覆盖中国3大运营商。全面支持IPv6环境下的DNS解析。</p>
        </li>
      </ul>
    </section>

    <section
      class="cloud-service-core"
      :style="{backgroundImage: `url(${require('~/assets/images/cloud-service-core.jpg')})`}"
    >
      <TitleGroup
        theme="#fff"
        class="wrapper"
        main-title="连星IPv6 云服务节点分布图"
        subtitle="Node distribution map"
      />

      <ul class="cloud-service-cover wrapper">
        <li>
          <strong>18</strong>
          <span>已覆盖省</span>
        </li>
        <li>
          <strong>4</strong>
          <span>已覆盖直辖市</span>
        </li>
        <li>
          <strong>2</strong>
          <span>已覆盖自治区</span>
        </li>
      </ul>
    </section>

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
.cloud-service-info {
  height: 720px;
  padding: 100px 0 80px;
  .cloud-service-info-text {
    color: #333;
    font-size: 14px;
    line-height: 34px;
    margin: 40px auto 65px;
  }
  .cloud-service-info-features {
    display: flex;
    justify-content: space-between;
    padding: 0;
    li {
      display: block;
      width: 354px;
      height: 278px;
      padding: 50px 30px;
      background-size: contain;
      box-shadow: 0 0 15px rgba(33, 33, 33, 0.1);
      h3 {
        color: #333;
        font-size: 16px;
        margin-bottom: 26px;
      }
      p {
        color: #777;
        font-size: 14px;
        line-height: 34px;
      }

      &:nth-child(1) {
        background-image: url("../../assets/images/cloud-server-01.png");
      }
      &:nth-child(2) {
        background-image: url("../../assets/images/cloud-server-02.png");
      }
      &:nth-child(3) {
        background-image: url("../../assets/images/cloud-server-03.png");
      }
    }
  }
}

.cloud-service-core {
  height: 872px;
  background-size: cover;
  background-position: center;
  padding-top: 100px;

  .cloud-service-cover {
    margin-top: 90px;
    li {
      list-style: none;
      color: #fff;
      margin-bottom: 64px;

      strong {
        display: block;
        font-size: 60px;
        margin-bottom: 8px;
      }
      span {
        font-size: 14px;
        opacity: 0.5;
      }
    }
  }
}
</style>