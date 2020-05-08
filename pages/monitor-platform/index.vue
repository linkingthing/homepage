<template>
  <div class="monitor-platform">
    <section class="banner">
      <div class="platform-section">
        <div class="banner-main-text">
          懂你的网络，更懂你的压力
        </div>
        <div class="banner-sub-text">
          全面监测和深入分析，掌控IPv6部署和发展
        </div>
      </div>
    </section>

    <TitleGroup
      class="platform-section"
      main-title="CLXOne™ IPv6监测让您更智慧地开展工作"
      subtitle="TO BEGIN THE WORK"
    />

    <section class="section-1 platform-section">
      <img :src="src1" />

      <div class="section-1-content">
        <p>
          IPv6规模部署工作时间紧、任务重、跨度长、技术性强。在整个IPv6代际升迁的过程中，需要承担诸多职责、满足各种需求。必须时刻掌控持续变化的动态的网络状况，以提出安全、简单而灵活的应对方案和解决方案。所有的这一切，都必须是基于对当前IPv6发展状况的了解。CLXOne IPv6发展监测平台使您更智慧更安全的开展工作。 IPv6发展监测平台让您更智能更安全的开展工作。
        </p>

        <div>对互联网网络、应用、终端、用户、流量等IPv6发展情况全面监测和分析</div>
        <div>对IPv6支持度和部署率进行全面、多维度的监测及评估，定期发布监测报告</div>
        <div>为推动IPv6规模部署工作提供技术支持和决策参考</div>

        <button
          class="button--red"
          @click="$router.push({path: '/support/download', query: {title: 'CLXOne IPv6监测解决方案'}})"
        >阅读概览</button>
      </div>
    </section>

    <TitleGroup
      class="platform-section"
      main-title="通过 CLXOne™ IPv6 监测展示创新成果"
      subtitle="INNOVATION RESULTS"
    />

    <section class="section-2 platform-section">
      <div
        class="section-2-content"
        @mouseenter="stopPlay"
        @mouseleave="play"
      >
        <template v-for="(item,idx) in row2Content">
          <div
            class="content-item"
            :key="idx"
            :class="{'is-show': idx === row2Index}"
          >
            <div class="content-item-detail">
              <p class="detail-title">{{item.title}}</p>
              <p class="detail-content">{{item.content}}</p>
            </div>
            <img :src="item.img">

          </div>
        </template>

        <div class="section-2-footer">
          <div class="footer-pager">
            <label>0{{row2Index + 1}}</label>
            /0{{row2ContentLength}}
          </div>

          <div class="footer-arrow">
            <i
              class="el-icon-arrow-left footer-arrow-item"
              @click="handleRow2ContentChange('prev')"
            />
            <i
              class="el-icon-arrow-right footer-arrow-item"
              @click="handleRow2ContentChange('next')"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section-3">
      <div class="section-3-content platform-section">
        <h3 class="section-3-title">利用连星CLXOne™ IPv6 监测平台 <br/>加速您的创新</h3>
  
        <div class="section-3-text">利用我们的专家指导、最佳实践的经验和多种创新实用工具，您可以充满信心地快速平滑迁移到下一代新技术网络</div>

        <button
          class="button--red"
          @click="openBuyDialog"
        >平台定制服务，请联系我们的业务专家</button>
      </div>
    </section>
  </div>
</template>

<script>
import TitleGroup from "~/components/TitleGroup";
import src1 from "~/assets/images/monitor-img-1.png";
import src2 from "~/assets/images/monitor-img-2.png";
import src3 from "~/assets/images/monitor-img-3.png";
import src4 from "~/assets/images/monitor-img-4.png";
import { mapMutations } from 'vuex';
export default {
  components: {
    TitleGroup
  },

  data() {
    return {
      src1,
      src2,
      src3,
      src4,
      row2Content: [
        {
          img: src2,
          title: "国家IPV6发展监测平台",
          content: `国家IPv6发展监测平台通过主动监测采集
我国IPv6基础资源、网络基础设施、应用基础设施、互联网应用、IPv6用户等信息，
客观、准确、全面的反映当前我国IPv6发展现状，为推进IPv6规模部署提供必要的依据，
并最终形成中国IPv6发展监测体系`
        },
        {
          img: src3,
          title: "海南IPV6发展监测平台",
          content: `海南IPv6发展监测平台通过主动监测采集海南省内Pv6基础资源、网络基础设施、应用基础设施、互联网应用、IPv6用户等信息，客观、准确、全面的反映当前海南IPv6发展现状，为推进IPv6规模部署提供必要的依据，并最终形成海南IPv6发展监测体系`
        },
        {
          img: src4,
          title: "金融行业IPV6发展监测平台",
          content: `人民银行运用“互联网+人民银行运用“互联网+”思维，建设金融行业IPv6发展监测平台。实现金融行业2000多个监测点的动态监测，分地区、分类型的展示功能助力人民银行各级机构开展核查，可满足国家“IPv6规模部署行动计划”、“定期开展企业、行业、区域应用情况评测”的需要，鼓励金融服务机构开展对照自查，在实现基本改造目标的前提下精益求精，提高门户网站和子域名网站及应用系统规模部署改造效果。`
        }
      ],
      row2ContentLength: 3,
      row2Index: 0,
      autoPlay: true
    }
  },

  beforeDestroy() {
    this.stopPlay();
  },

  mounted() {
    if (this.autoPlay) {
      this.play();
    }
  },

  methods: {
    ...mapMutations([
      'openBuyDialog'
    ]),
    stopPlay() {
      clearInterval(this.timer);

      this.timer = null;
    },

    play() {
      if (this.timer) return;

      this.timer = setInterval(() => {
        this.handleRow2ContentChange()
      }, 5000)
    },

    handleRow2ContentChange(type) {
      if (type === "prev") {
        if (this.row2Index === 0) {
          this.row2Index = this.row2ContentLength - 1;
        }
        else {
          this.row2Index--;
        }
      }
      else {
        if (this.row2Index === this.row2ContentLength - 1) {
          this.row2Index = 0;
        }
        else {
          this.row2Index++
        }
      }
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>