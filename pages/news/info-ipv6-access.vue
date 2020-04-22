<template>
  <div class="info wrapper">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/news' }">新闻列表</el-breadcrumb-item>
        <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="content">
      <header>
        <h1>工信部将优化提升IPv6网络接入能力</h1>
        <p>新闻出处： <a href="http://m.xinhuanet.com/gd/2020-03/23/c_1125755303.htm"> 新华网</a> </p>
      </header>

      <div>
        <p> 新华社北京3月23日电（记者张辛欣）记者23日从工信部获悉，工信部已经发文部署开展2020年IPv6端到端贯通能力提升专项行动，特别提出要优化提升IPv6网络接入能力，全面扩大数据中心IPv6覆盖范围，到2020年底IPv6活跃连接数达到11.5亿。</p>

        <p>　　IPv6能够提供充足的网络地址和广阔的创新空间，是互联网演进升级的必然趋势、技术产业创新的重大机遇和网络安全能力强化的迫切需要。

        </p>

        <p>　　工信部提出，将通过优化提升IPv6网络接入能力、加快提升内容分发网络IPv6应用加速能力、大幅提升云服务平台IPv6业务承载能力、全面扩大数据中心IPv6覆盖范围、着力提升终端设备IPv6支持能力、稳步提升行业网站及互联网应用IPv6浓度、着力强化IPv6网络安全保障能力等七个方面加大IPv6推进力度。
        </p>

        <p>　　工信部将组织成立IPv6规模部署专项协同推进工作组，制定可量化、可考核的技术规范和标准，建立任务台账，保障IPv6升级改造工作顺利推进。到2020年底，移动网络IPv6流量占比达到10%以上。

        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {},
  watch: {},
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 1200px;
  margin: 0 auto;
}
.bread {
  padding: 20px 0;
}
.content {
  padding: 80px 50px;
  box-shadow: 0 0 10px #eee;
  margin-bottom: 50px;
  color: #666;
  font-size: 16px;
  line-height: 1.4;

  header {
    margin-bottom: 40px;
    p {
      text-align: right;
    }
  }

  h1 {
    font-size: 24px;
    margin-bottom: 30px;
    color: #333;
    text-align: center;
  }
  h3 {
    margin: 20px 0;
    color: #333;
  }
  p {
    margin-bottom: 15px;
    text-indent: 2em;
  }
  ul {
    padding: 0;
  }
  li {
    margin-bottom: 12px;
    list-style: none;
    text-indent: 2em;
  }

  footer {
    p {
      margin: 20px;
    }
    dd {
      text-align: right;
      margin-bottom: 10px;
    }
  }
}
</style>