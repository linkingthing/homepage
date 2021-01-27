<template>
  <div class="clxone-ddi">
    <div class="banner">
      <div class="banner-text">
        <div class="banner-text-main">可聚合、可延展企业级云平台</div>
        <div class="banner-text-main">CLXOne®DDI</div>
        <div class="banner-text-sub">通过云管理架构，提供DDI网络核心服务，实现IPv6 全自动智能化的平滑演进，让网络安全等基础服务质量得到全面提升</div>
      </div>
    </div>

    <div class="ddi-management ddi-section">
      <div class="ddi-management-row-1">
        <div>
          <TitleGroup
            main-title="创新的 CLXOne® DDI 云管理"
            subtitle="CLOUD MANAGEMENT"
          />

          <p class="row-1-text">连星推动核心网络服务 DDI （DNS、DHCP 和 IP地址管理服务）从简单的数据库到分布式、高可用性解决方案的演进，再到当今创新的 CLXOne® 云管理架构</p>
          <p class="row-1-text">CLXOne® DDI 满足客户当前和未来的所有DDI需求。通过对DDI的集中控制，实现与云和虚拟化平台无缝集成；通过云管理和本地化部署，从根本上改善总部和分支机构的网络连接等。</p>
        </div>

        <img :src="managementSrc1">
      </div>

      <div class="ddi-management-row-2">
        <div class="row-2-content">
          <div class="row-2-item">
            <div class="item-top">
              <img :src="managementSrc2" />
              <label>智能便捷的高扩展性</label>
            </div>

            <p>可自动实现任何规模的远程位置的 DNS，DHCP 和 IP 地址配置，并集中进行策略控制;</p>
            <p>通过 API 轻松与云编排工具集成，以实现自动进行 DNS / IP 配置管理;</p>
            <p>通过自动化从核心网络服务收集和分析数据的过程来获得实时可行的策略;</p>
            <p>简化和自动化报告，以确保符合内部政策和法规要求;</p>
            <p>通过增强的可见性和控制来自动执行向 IPv6 和云的迁移。</p>
          </div>

          <div class="row-2-item">
            <div class="item-top">
              <img :src="managementSrc3" />
              <label>99.999%的网络可靠性</label>
            </div>

            <p>以99.999%的可用性操作始终在线的基础架构（包括 DNS 和 DHCP 的高可用）；</p>
            <p>对基于 DNS 的 DDoS 攻击保持弹性，并自动发现可能发动攻击的恶意设备；</p>
            <p>随时随地交付应用程序和服务；</p>
            <p>通过整个生态系统的可见性和实时情报采取行动。</p>
          </div>

          <div class="row-2-item">
            <div class="item-top">
              <img :src="managementSrc4" />
              <label>增强的网络安全性</label>
            </div>

            <p>网络免受最广泛的基于DNS的攻击；</p>
            <p>终端设备的识别和准入管理；</p>
            <p>快速隔离受感染的设备；</p>
            <p>网络隔离和访问控制；</p>
            <p>在现有的威胁和安全基础架构指标之间共享威胁和情报的威胁指标，自动修复问题;</p>
            <p>通过利用 DDI 数据的实时预测分析来预防问题发生和识别可能的恶意的网络行为。</p>

          </div>
        </div>

        <button
          class="button--red"
          @click="$router.push({path: '/support/download', query: {title: 'CLXOne DDI 概要'}})"
        >阅读概览<i class="el-icon-right" /></button>
      </div>

      <div class="ddi-management-row-3">
        <div class="row-3-main">优秀的产品助您发掘 CLXOne® DDI 的全部价值</div>
        <div class="row-3-sub">CLXOne® DDI 可通过硬件设备，VM 或容器进行水平扩展</div>
        <img :src="managementSrc5" />
        <button
          class="button--red"
          @click="$router.push({path: '/support/download', query: {title: '产品规格'}})"
        >深入了解产品</button>
      </div>
    </div>

    <div class="ddi-feature">
      <TitleGroup
        class="ddi-feature-title"
        main-title="DDI的关键特性"
        subtitle="DDI FEATURES"
      />

      <div class="ddi-feature-content">
        <div class="ddi-section">
          <div class="feature-left">
            <div class="feature-item">
              <div class="feature-title">集中统一的用户界面</div>
              <div class="feature-content">通过用于DNS，DHCP，IPAM，DNS流量控制和DNS安全性的统一 UI 整合管理。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">灵活的元数据管理</div>
              <div class="feature-content">利用可扩展的元数据属性来标记关键 IP 资源，以更有效地组织和共享数据。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">自定义报告模板和预警</div>
              <div class="feature-content">获得针对设备，IP地址和其他网络资产的多功能报告和警报功能。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">通过高可用性配对实现业务连续性</div>
              <div class="feature-content">即使在故障转移和升级期间，也可以确保持续的服务可用性。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">可定制的模板</div>
              <div class="feature-content">快速配置新服务并减少配置开销，如具有多宿主、多网络视图接口的 DNS 和 DHCP 超级主机分组，IPv4 Filter 模板、DHCP Option/Space 模板、ACL模板等。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">资源委派</div>
              <div class="feature-content">轻松将DNS区域、IP地址空间的所有权委派给不同的用户，以优化团队资源。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">工作流程自动化</div>
              <div class="feature-content">使用可定制的工作流来自动化您当前手动执行的各种 IT 流程。</div>
            </div>
          </div>

          <div class="feature-right">
            <div class="feature-item">
              <div class="feature-title">任播支持</div>
              <div class="feature-content">通过 Anycast 功能确保多个 DNS 服务器之间的高可用性。 好处还包括更高 的查询性能，冗余和负载平衡。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">虚拟设备</div>
              <div class="feature-content">CLXOne® DDI 在 VMware上可用作虚拟机（VM），在Docker上可用作容器。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">专用设备</div>
              <div class="feature-content">提供专业的工业级硬件产品。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">多平台可移植性</div>
              <div class="feature-content">CLXOne® DDI 可通过硬件设备，VM 或容器进行水平扩展。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">灵活的 API</div>
              <div class="feature-content">通过用户可访问的 API 支持所有 UI 功能。 API 调用是针对云的，而不是直接针对 CLXOne® DDI 设备。 使用 API 需要用户凭据，并且需要相应的权限。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">高可用性</div>
              <div class="feature-content">远程位置的两个 CLXOne® DDI 实例共享信息和职责，因此，如果由于某种原因一个实例出现故障，另一个实例将接管该站点的 DDI 服务职责。</div>
            </div>
            <div class="feature-item">
              <div class="feature-title">零接触配置（ZTP）</div>
              <div class="feature-content">ZTP可以实现自动化，并极大地简化了CLXOne® DDI 的大规模部署。 CLXOne® DDI 设备可通过在所有远程站点上进行全局身份验证，下载和部署配置。</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ddi-solution ddi-section">
      <TitleGroup
        main-title="相关解决方案"
        subtitle="THE SOLUTIONS"
      />

      <div class="solution-list">
        <div
          class="solution-item"
          @click="$router.push({path: '/support/download', query: {title: 'CLXOne DNS'}})"
        >
          <img :src="`${require('~/assets/images/solution01.png')}`" />

          <div class="solution-item-title">集中管理和自动化DNS</div>
        </div>

        <div
          class="solution-item"
          @click="$router.push({path: '/support/download', query: {title: 'CLXOne IPAM'}})"
        >
          <img :src="`${require('~/assets/images/solution02.png')}`" />

          <div class="solution-item-title">以统一的方式管理异构组网环境下的IP地址</div>
        </div>

        <div
          class="solution-item"
          @click="$router.push({path: '/support#download'})"
        >
          <img :src="`${require('~/assets/images/solution03.png')}`" />

          <div class="solution-item-title">IPv6 地址规划工具</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleGroup from "~/components/TitleGroup";
import managementSrc1 from "./../../assets/images/ddi-manage-1.png";
import managementSrc2 from "./../../assets/images/ddi-manage-2.png";
import managementSrc3 from "./../../assets/images/ddi-manage-3.png";
import managementSrc4 from "./../../assets/images/ddi-manage-4.png";
import managementSrc5 from "./../../assets/images/ddi-manage-5.png";
import solutionSrc from "./../../assets/images/home-page-news.png";

export default {
  components: {
    TitleGroup
  },

  data() {
    return {
      managementSrc1,
      managementSrc2,
      managementSrc3,
      managementSrc4,
      managementSrc5,
      solutionSrc
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>