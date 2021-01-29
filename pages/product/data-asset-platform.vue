<template>
  <div class="data-asset-platform">
    <BigPicture :url="require('~/assets/images/banner-data-assets.jpg')">
      <div class="title wrapper">
        <h1 class="banner-title">连星CLXOne®</h1>
        <h1 class="banner-title">数据资产治理平台</h1>
      </div>
    </BigPicture>

    <section class="key-value wrapper">
      <TitleGroup
        main-title="关键价值"
        subtitle="Key values"
      />
      <p>数据资产是数字化转型的核心要素之一，企业网络已经扩展到不仅仅是数据中心和园区，现在已经包括云平台、物联网部署和分布应用程序组件，这些组件托管在无数的地方，海量的IP资产以及数据连接构成了企业关键的数字网络基础设施。现代企业网络的这一新现实，需要创建统一的，能够支持现代的、云本地无边界企业的数据资产治理来建立一个新的基础。</p>

      <ul>
        <li>
          <strong>01</strong>
          <h3>通过自动化和洞察力智能管理IP数据资产，实现数据资产治理</h3>
          <p>自动发现、置备和监视所有IP数据资产。借助广泛的集成和数据共享功能，实现整个基础设施IP数据资产分析，通过与监测平台（认证/安全系统等）联动，发现和洞察网络资产的运行状态、连接性等，并提供跟踪、报告和预测，以帮助确保客户的网络持续符合法规和公司政策。</p>
        </li>

        <li>
          <img
            src="~/assets/images/clxone-key-value.png"
            alt=""
          />
          <strong>02</strong>
          <h3>灵活的IPAM地址规划管理<br /> 支撑IPv6规模部署和演进升级</h3>
          <p>提供完善的IP地址流程规划和管理工具，支持IPv6代际升迁全周期管理。企业可以从自身组织架构和业务需求出发，灵活地进行IPv6演进规划、地址分配和过程管理，并提供全网网络监测和诊断服务，有效支撑IPv6演进升级过程。</p>
        </li>

        <li>
          <strong>03</strong>
          <h3>通过集中控制的唯一可信源SoT，实现异构网络的统一管理</h3>
          <p>支持单一可信数据源SoT（Source of Truth），无缝地管理来自DNS和DHCP组件的信息，提供对网络资产类型、属性、可用性、用户上下文、网络活动、位置、异构网络(自建、混合云、虚拟、5G等)、拓扑结构等的准确、可靠、接近实时的可见性，准确地反映网络状态。</p>
        </li>
      </ul>

    </section>

    <section class="product-components">
      <div class="wrapper">
        <TitleGroup
          theme="#fff"
          main-title="关键产品组件"
          subtitle="Key product components"
        />

        <div class="product-show">
          <aside>
            <ul class="product-menu">
              <li
                v-for="item in productShow"
                :key="item.id"
                :class="{active: item.id === currentMenu}"
                @click="handleChangeMenu(item)"
              >
                {{item.title}}
              </li>
            </ul>
          </aside>
          <div class="product-content">
            <div class="product-image">
              <img
                :src="require(`~/assets/images/product-show-${currentMenu}.png`)"
                alt=""
              >
            </div>
            <div>
              <h3>
                {{productShow[currentMenu-1].title}}
                <span>0{{currentMenu}}</span>
              </h3>
              <p>
                {{productShow[currentMenu-1].description}}
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>

    <section class="deploy">

      <div class="wrapper">
        <TitleGroup
          main-title="部署架构"
          subtitle="Deployment architecture"
        />

        <img
          src="~/assets/images/clxone-deploy.png"
          alt=""
        >

        <dl>
          <dd>数据资产治理平台采用高性能的底层硬件架构，并基于容器技术构建基础软件平台，实现快速部署和灵活的可扩展性。在产品架构设计上，CLXOne®采用管理平台和业务节点分离的设计模型，减少模块耦合，业务处理更加高效，满足部署的灵活性和可拓展性需要。</dd>
          <dd>平台支持部署在本地、私有云、公有云、边缘等混合环境中，由统一管理平台进行管理。支持多达数百台节点集中管理的基础上，确保数据一致性，并实现极高的通信效率和传输安全。管理平台和业务节点均支持高可用部署，避免因为局部功能故障而影响整体服务的连续性。</dd>
        </dl>
      </div>

    </section>

    <section class="product-form ">
      <div class="wrapper">
        <TitleGroup
          theme="#fff"
          main-title="产品形态"
          subtitle="Product form"
        />

        <ul>
          <li>
            <div>
              <img
                src="~/assets/images/clxone-device.png"
                alt=""
              >
            </div>
            <span>软硬一体化设备</span>
          </li>
          <li>
            <div>
              <img
                src="~/assets/images/clxone-software.png"
                alt=""
              >
            </div>
            <span>软件安装包</span>
          </li>
          <li>
            <div>
              <img
                src="~/assets/images/clxone-docker.png"
                alt=""
              >
            </div>
            <span>容器镜像</span>
          </li>
        </ul>

      </div>

    </section>

    <section class="high-available">
      <div class="wrapper">
        <TitleGroup
          main-title="系统高可用"
          subtitle="System high availability "
        />
        <div class="high-available-content">
          <img
            src="~/assets/images/clxone-high-available.png"
            alt=""
          >
          <ul>
            <li>
              分布式部署
            </li>
            <li>
              管理业务分离
            </li>
            <li>
              HA，设备级冗余
              <dl>
                <dd>管理HA \ DHCP节点HA </dd>
                <dd>DNS节点HA </dd>
                <dd>DNS节点AnyCas</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
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
    this.productShow = [{
      id: 1,
      title: "智能IPv6地址规划",
      image: "",
      description: "针对IPv6地址难以规划和管理的问题，CLXOne®提供完全自动化且灵活的IPv6地址规划方式，可根据区域、部门、业务等不同维度定义语义树，并为不同语义节点分配合适的地址块，实现企业的组织或业务架构与IPv6地址空间的映射关系，支持“一键规划”和“自定义规划”，支持总部和分支机构实行分级地址规划，并形成统一的IPv6地址规划地图。"
    }, {
      id: 2,
      title: "IP地址全生命周期管理",
      image: "",
      description: "CLXOne®提供IP地址的全生命周期管理，包括IP地址规划、IP地址分配、IP地址跟踪、IP地址监测、IP地址回收等，实现自动化和可视化的IP地址管理，支持详细的数据统计和分析，简化管理流程，大幅提升IP地址的利用率。连星自研高性能DHCP服务器，提供业界领先的海量地址分发能力，支持DHCPv4、DHCPv6、DHCPv6-PD等多种地址分配方式，满足园区网、移动网络、物联网、工业互联网等应用场景下双栈地址分配的需求。"
    }, {
      id: 3,
      title: "网络智能探测与感知",
      image: "",
      description: "CLXOne®通过多种探测方式，智能感知IP数据资产的位置和运行状态。利用网络设备的SNMP能力和DHCP租约数据，CLXOne®可以主动发现网络中所有的IP资产，定位其所处的上联设备/端口/VLAN，跟踪资产状态变化情况，纳入统一的可视化资产管理。并根据内置指纹库，智能识别IP资产的类型、厂商等信息，可联动认证准入系统，实现精细化的安全准入策略控制。"
    }, {
      id: 4,
      title: "融合异构网络管理",
      image: "",
      description: "异构网络是企业网络的常态，来自不同厂商的设备组成了不同功能的网络基础设施，如生产网络、无线网络、混合云、IoT等。CLXOne®通过统一集中平台提供自动化、高可用性、易于部署的融合网络服务管理，以实现扩展到所有领域的集中可见性；覆盖物理、虚拟或基于云的、嵌入设备，VMWare和OpenStack等网络。"
    }, {
      id: 5,
      title: "多视角IP数据资产画像",
      image: "",
      description: "CLXOne® IPAM通过智能的建模和分析，建立不同数据之间的深度关联关系，从设计、部署到检查、委派阶段，形成多视角IP数据资产画像，并支持用户行为分析。不管是通过域名或者IP地址，管理员可以查看完整可视的资产画像：域名访问源地址TOP10、IP状态、IP规划/地址池（语义树）、终端信息（上联设备/上联端口/VLAN/机柜位置）等，通过对IP资产的行为分析，审计和控制，可以实时感知网络的运行状态，并预测可能的故障风险和安全威胁。"
    }, {
      id: 6,
      title: "扩展性与开放性",
      image: "",
      description: "CLXOne®支持广泛的开放性，依赖于多样化的底层基础设施（本地、云、边缘等），融合网络设备管理、终端管理和应用管理，并支持标准、开放的协议规划和数据接口，可对接第三方用户认证系统、大数据分析平台、运维管理系统等，为用户提供完整、融合、开放、可扩展的融合方案。"
    }]
    return {
      currentMenu: 1
    };
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    handleChangeMenu(item) {
      this.currentMenu = item.id;
    }
  }
};
</script>

<style lang="less" scoped>
.key-value {
  padding: 90px 0 110px;

  p {
    color: #191817;
    font-size: 14px;
    line-height: 34px;
    margin-top: 20px;
  }
  ul {
    padding: 60px 0 0;
    width: 994px;
    margin: 0 auto;
  }
  li {
    list-style: none;
    overflow: hidden;
    margin-bottom: 20px;
    img {
      float: left;
      width: 508px;
      height: 531px;
      margin-left: 120px;
    }
    strong {
      font-size: 60px;
      color: #ee3434;
      float: left;
      line-height: 1;
      margin-top: -10px;
    }
    h3 {
      font-size: 16px;
      color: #1b1b1b;
      margin-left: 90px;
    }
    p {
      color: #363536;
      line-height: 26px;
      margin-top: 10px;
      margin-left: 90px;
    }

    &:nth-child(2) {
      strong {
        display: block;
        float: none;
        margin-bottom: 20px;
        margin-top: 100px;
        margin-left: 640px;
      }
      h3 {
        margin-left: 640px;
        margin-bottom: 26px;
        line-height: 24px;
      }
      p {
        margin-left: 640px;
      }
    }
  }
}

.product-components {
  height: 1008px;
  background-image: url("../../assets/images/clxone-component.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 90px;
}

.deploy {
  padding: 100px 0 80px;
  img {
    display: block;
    margin: 50px auto;
    width: 1122px;
    height: 323px;
  }

  dl {
    display: flex;
    justify-content: space-between;
    dd {
      display: block;
      width: 560px;
      font-size: 14px;
      color: #313030;
      line-height: 34px;
    }
  }
}

.product-form {
  height: 585px;
  background-image: url("../../assets/images/clxone-form.jpg");
  background-position: center;
  background-size: cover;

  padding: 90px 0 120px;

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-top: 45px;
    li {
      list-style: none;
      width: 365px;
      height: 250px;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.3);
      text-align: center;
      font-size: 14px;
      color: #333;
    }
    div {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 160px;
    }

    img {
    }
    span {
    }
  }
}

.high-available {
  padding-top: 110px;
  padding-bottom: 124px;
  .high-available-content {
    display: flex;
    margin-top: 70px;
  }
  img {
    width: 704px;
    height: 428px;
  }
  ul {
    padding-left: 80px;
    padding-top: 60px;
    padding-bottom: 60px;
    border-top: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
    margin-left: 100px;
    width: 360px;
  }
  li {
    font-size: 16px;
    color: #1c1d1d;
    margin-bottom: 56px;
    &::marker {
      color: #d1211c;
      font-size: 1.5em;
    }
    &:last-child {
      margin-bottom: 0;
    }
    dl {
      margin-top: 16px;
    }
    dd {
      font-size: 14px;
      color: #464647;
      line-height: 30px;
    }
  }
}

.product-show {
  display: flex;

  height: 670px;
  background-color: rgba(246, 246, 246, 0.1);
  border-radius: 8px;

  margin-top: 60px;

  .product-menu {
    padding: 90px 30px;
    li {
      list-style: none;
      display: block;
      height: 46px;
      width: 188px;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      font-size: 14px;
      line-height: 26px;
      padding: 10px;
      margin-bottom: 45px;
      cursor: pointer;
      &.active {
        background-color: #217aff;
      }
      &:hover {
        background-color: #217aff;
      }
    }
  }

  .product-content {
    flex: 1;
    padding: 40px 50px;
    border-left: 1px solid rgba(246, 246, 246, 0.3);
    .product-image {
      height: 285px;
      margin-bottom: 20px;
    }
    img {
      height: 285px;
      min-width: 10px;
    }
    h3 {
      font-size: 18px;
      color: #fefefe;
      line-height: 70px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      margin-bottom: 20px;
      span {
        float: right;
        font-size: 36px;
        font-weight: bold;
      }
    }
    p {
      color: #fff;
      font-size: 14px;
      line-height: 36px;
    }
  }
}
</style>