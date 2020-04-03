<template>
  <div class="monitor-platform">
      <div class="banner">
        <div class="banner-main-text">
          懂你的网络，更懂你的压力
        </div>
        <div class="banner-sub-text">
          全面监测和深入分析，掌控IPv6发展状况
        </div>
      </div>

      <TitleGroup class="content-row-1-title" main-title="CLXOne™ IPv6监测让您能够更智能地开展工作" subtitle="TO BEGIN THE WORK" />

      <div class="content-row-1">
        <img :src="src1" />

        <div class="row-1-content">
          <p>
            IPv6规模部署工作时间紧、任务重、跨度长、技术性强。组织在整个IPv6代际升迁的过程中，需要承担诸多职责、满足各种需求。您必须始终掌控持续动态的网络状况，以及安全、简单而灵活地应对方案。所有的这一切，是基于对您当前IPv6发展状况的了解。CLXOne™ IPv6发展监测平台让您更智能更安全的开展工作。
          </p>

          <div>对互联网网络、应用、终端、用户、流量等IPv6发展情况全面监测和分析</div>
          <div>对IPv6支持度和部署率进行全面、多维度的监测及评估，定期发布监测报告</div>
          <div>为IPv6规模部署工作推动提供技术支持和决策参考</div>

          <button class="button--red">阅读概览</button>
        </div>
      </div>

      <TitleGroup class="content-row-2-title" main-title="通过 CLXOne™ IPv6 监测展示创新成果" subtitle="INNOVATION RESULTS" />

      <div class="content-row-2">
        <div class="row-2-content" @mouseenter="stopPlay" @mouseleave="play">
          <template v-for="(item,idx) in row2Content">
            <div class="content-item" :key="idx" :class="{'is-show': idx === row2Index}">
              <img :src="item.img">
              <div class="content-item-detail">
                <p class="detail-title">{{item.title}}</p>
                <p class="detail-content">{{item.content}}</p>
              </div>
            </div>
          </template>

          <div class="row-2-content-footer">
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
      </div>

      <div class="content-row-3">
        <TitleGroup class="content-row-3-title" main-title="利用连星CLXOne™ IPv6 监测平台 加速您的创新" subtitle="ACCELORATE INNOVATION" />

        <div class="row-3-text">利用我们的专家指导、久经验证的经验、最佳实践和创新工具，您可以充满信心地迁移到下一代新技术网络</div>
  
        <button class="button--red">平台定制服务，请联系我们的业务专家</button>
      </div>
  </div>
</template>

<script>
import TitleGroup from "~/components/TitleGroup";
import src1 from "~/assets/images/monitor-img-1.png";
import src2 from "~/assets/images/monitor-img-2.png";
import src3 from "~/assets/images/monitor-img-3.png";
import src4 from "~/assets/images/monitor-img-4.png";

export default {
  components:{
    TitleGroup
  },

  data(){
    return {
      src1,
      src2,
      src3,
      src4,
      row2Content:[
        {
          img:src2,
          title:"国家IPV6发展检测平台",
          content:"这是一段文字内容这是一段文字内容这是一段文字内容这是，一段文字内容这是一段文字内容这是一段文字内容这是一段文字内容这，段文字内容这，是一段文字内容"
        },
        {
          img:src3,
          title:"国家IPV8发展检测平台",
          content:"这是一段文字内容这是一段文字内容这，段文字内容这是一段文字内容这是一段文字内容这，是一段文字内容"
        },
        {
          img:src4,
          title:"国家IPV10发展检测平台",
          content:"这是一段文字内容这是一段文字内容这是一段文字内容这是，一段文字内容这是一段。段文字内容段文字内容段文字内容段文字内容段文字内容"
        }
      ],
      row2ContentLength: 3,
      row2Index: 0,
      autoPlay:true
    }
  },

  beforeDestroy(){
    this.stopPlay();
  },

  mounted(){
    if(this.autoPlay){
      this.play();
    }
  },

  methods:{
    stopPlay(){
      clearInterval(this.timer);

      this.timer = null;
    },

    play(){
      if(this.timer) return;

      this.timer = setInterval(() => {
        this.handleRow2ContentChange()
      }, 5000)
    },

    handleRow2ContentChange(type){
      if(type === "prev"){
        if(this.row2Index === 0){
          this.row2Index = this.row2ContentLength - 1;
        }
        else{
          this.row2Index--;
        }
      }
      else{
        if(this.row2Index === this.row2ContentLength - 1){
          this.row2Index = 0;
        }
        else{
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