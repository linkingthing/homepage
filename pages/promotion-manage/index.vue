<template>
  <article class="promotion-manage">
    <section class="banner">
      <div class="manage-section">
        <p>通过网络可见性</p>
        <p>驱动下一代技术网络敏捷演进</p>
        <label>连星 CLXOne™ IPv6+ 协助组织持续代际升迁，实现规模部署</label>
      </div>
    </section>

    <section class="section-1 manage-section">
      <TitleGroup main-title="IPv6+：使能万物智慧互联的基石" subtitle="BACKGROUND INTRODUCTION" />

      <p class="sub-title">数字化变革进入快车道，网络基础设施面临巨大挑战</p>

      <p class="important-title">如何构建超宽极简的网络架构？网络如何高效敏捷使能云业务？网络如何释放网络智能潜能？</p>

      <div class="section-1-list">
        <div class="list-item" v-for="(item, idx) in section1Items" :key="idx">
          <div class="list-item-top">
            <img :src="item.src" />
            {{item.imgText}}
          </div>
          <div class="list-item-main">
            {{item.main}}<span>{{item.unit}}</span>
          </div>
          <div class="list-item-sub">{{item.sub}}</div>
        </div>
      </div>
    </section>

    <section class="section-2">
      <TitleGroup class=" manage-section" main-title="IPv6+方案介绍" subtitle="INTRODUCTION OF THE PLAN" />

      <img :src="src2bg" class="section-2-bg" />
      
      <div class="section-2-main manage-section">
        <div class="main-title">前所未有的网络可见性使能万物互联的基石</div>
        <p>连星 CLXOne™ IPv6+ 通过将DDI数据与网络基础设施数据、互联网基础服务全景数据集成在一起，提供可操作的网络智能管理</p>
        <p>实现以下方面的自动化IPv6目标：创建IPv6寻址规划、审核网络设备、IPv6基础网络架构管理、IPv6代际升迁管理以及通过IPv6提供应用等；同时通过可见的过程化管理帮助分析网络的内部和法规政策合规性</p>

        <button class="button--red" @click="$router.push({path: '/support/download', query: {title: 'CLXOne IPv6代际升迁解决方案'}})">阅读概览</button>

        <div class="section-2-infos">
          <div class="info-item" v-for="(item,idx) in section2Items" :key="idx">
            <img :src="item.src">
            <div class="info-item-content">
              <div class="item-title">{{item.title}}</div>
              <p class="item-info">{{item.info}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-3 manage-section">
      <div class="background-text">SOLUTIONS</div>
      <TitleGroup main-title="解决方案" subtitle="SOLUTIONS" />

      <div class="section-3-list">
        <div class="list-item-content" v-for="(child,idx) in setion3Items" :key="idx">
          <div class="list-item" v-for="(item,index) in child" :key="index">
            <!-- <div class="list-item-index">{{item.index}}</div> -->
            <div class="item-title">{{item.title}}</div>
            <div class="item-content">{{item.content}}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-4">
      <div class="manage-section">
        <TitleGroup main-title="连星服务" subtitle="SERVICES" />

        <p class="section-4-main">通过关键交付能力、自动化工具和网络可见性来实施严格的IPv6实践</p>
        <p class="section-4-main">利用我们的专家指导、久经验证的经验、最佳实践和创新工具，您可以充满信心地迁移到下一代新技术网络</p>

        <div class="section-4-list">
          <div class="list-item" v-for="(item,idx) in setion4Items" :key="idx">
            <img :src="item.src">
            <div class="item-title">
              <label>{{item.title}}</label>
              <label class="title-important">{{item.important}}</label>
            </div>
            <div class="item-details" v-for="(child,index) in item.items" :key="index">
              <label v-for="(last, i) in child" :key="i">{{last}}</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import TitleGroup from "~/components/TitleGroup";
import src11 from "~/assets/images/promption-section-1-1.png";
import src12 from "~/assets/images/promption-section-1-2.png";
import src13 from "~/assets/images/promption-section-1-3.png";
import src14 from "~/assets/images/promption-section-1-4.png";
import src21 from "~/assets/images/promption-section-2-1.png";
import src22 from "~/assets/images/promption-section-2-2.png";
import src23 from "~/assets/images/promption-section-2-3.png";
import src24 from "~/assets/images/promption-section-2-4.png";
import src41 from "~/assets/images/promption-section-4-1.png";
import src42 from "~/assets/images/promption-section-4-2.png";
import src43 from "~/assets/images/promption-section-4-3.png";
import src2bg from "~/assets/images/promption-section-2-bg.png";

export default {
  components:{
    TitleGroup
  },

  data(){
    return {
      src11,
      src12,
      src13,
      src14,
      src21,
      src22,
      src23,
      src24,
      src41,
      src42,
      src43,
      src2bg,

      section1Items:[
        {
          src:src11,
          imgText:"大流量",
          main:"4.8",
          unit:"ZB",
          sub:"全球网络流量（2020年）"
        },
        {
          src:src12,
          imgText:"大连接",
          main:"29",
          unit:"B",
          sub:"连接（2020年）"
        },
        {
          src:src13,
          imgText:"敏捷高效",
          main:"100",
          unit:"%",
          sub:"云上业务（2025年）"
        },
        {
          src:src14,
          imgText:"智能化",
          main:"",
          main:"86",
          unit:"%",
          sub:"企业引入AI业务（2025年）"
        },
      ],

      section2Items:[
        {
          src:src21,
          title:"更稳定的代际升迁",
          info:"通过关键交付能力、自动化工具和网络可见性来实施严格的IPv6实践，以过程化的管理帮助企业实现平稳的IPv6代际升迁"
        },
        {
          src:src22,
          title:"更好的管理和服务",
          info:"轻松地收集，分析和获取信息，并且采取适当的措施来更好地管理其网络并提供网络服务"
        },
        {
          src:src23,
          title:"更低风险、更安全",
          info:"轻松定位恶意端点及其物理位置来确保安全性，降低服务中断风险并打破IT中的运营孤岛"
        },
        {
          src:src24,
          title:"更高效的结构和数据库",
          info:"使用单一网络基础结构和IPAM数据库，可以在其中跟踪和同步网络、主机、服务器、动态客户端和虚拟环境相关的所有数据，同时在IT团队之间提供更高效的工作流"
        }
      ],

      setion3Items:[
        [
          {
            index:"01",
            title:"多层次的IPv6地址规划和管理",
            content:"向导式的多层次IPv6地址规划模式，提供按照区域、业务类型、自定义等分层或者混合模式，进行子网和IP地址的规划和分配，提供覆盖地址分配、回收、管理等全生命周期管理能力，同时通过报表及可视化等技术手段，可实时查看IP分配及使用情况，并自动探测IPv6设备在线情况等"
          },
          {
            index:"02",
            title:"动态跟踪和管理已在网络上运行的IPv6",
            content:"CLXOne™ IPv6+ 数字资产全景地图，实现跟踪和管理已在网络上运行的IPv6。连星IPv6全景视图利用自身的专有数据库和可扩展属性，将各种数据与设备、网络和服务整合到一个清晰且易于使用的界面中"
          }
        ],
        [
          {
            index:"03",
            title:"IPv6网络基础架构管理",
            content:"CLXOne™ IPv6+ 解决方案带来了前所未有的可见性，实现网络基础架构的动态管理和复杂环境（如虚拟化和云网络）的关键解决方案，为IPv6演进和规模部署提供管理支持"
          },
          {
            index:"04",
            title:"IPv6沙箱测试平台",
            content:"在IPv6演进过渡期构建评估验证平台对全业务流程测试验证，以及在IPv4向IPv6过渡过程中，发现问题，解决问题，实现生产网在IPv6升级演进前期、中期、后期三个阶段，网络和业务应用两个维度，不同阶段、叠加维度的仿真、研究和验证"
          }
        ]
      ],

      setion4Items:[
        {
          src:src41,
          title:"更好的",
          important:"可见性",
          items:[ 
            ["· 提高准确性", "· IP地址管理自动化"], 
            ["· 提高安全性"] 
          ]
        },
        {
          src:src42,
          title:"更好的",
          important:"可控性",
          items:[
            ["· 减少操作时间", "· 角色管理与委派权限"],
            ["· 实现自动化变更", "· 降低风险"]
          ]
        },
        {
          src:src43,
          title:"更好的",
          important:"可实践性",
          items:[ 
            ["· 保障合规性", "· 维护策略和标准"],
            ["· 更好的规则", "· 发现潜在配置问题"]
          ]
        },
      ]
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>