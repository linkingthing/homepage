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
        <h1>连星科技提出业内领先的IPv6平滑演进全生命周期管理方案 </h1>
        <p><time>发布时间： 2020-08-28</time>新闻出处： <a href="/news/Lianxing-technology-puts-forward-the-industry-leading-full-life-cycle-management-scheme-of-IPv6-smooth-evolution">连星科技</a> </p>
      </header>

      <div>

        <p>由“推进IPv6规模部署专家委员会”主办，中国信通院、CERNET网络中心、赛尔网络与华为技术有限公司协办的“2020中国IPv6发展论坛”于2020年8月28日在北京下一代互联网及重大应用技术创新园举行。
          本次论坛以“协同贯通、创新发展”为主题，中央网信办、工业和信息化部、国务院办公厅信息公开办、国务院国资委、教育部、人民银行、广电总局、北京市人民政府、清华大学、海淀区人民政府、中关村管委会等部门领导出席了会议，并就推进IPv6规模部署工作做了重要讲话，邬贺铨院士和吴建平院士发表了主旨演讲，基础电信企业、互联网企业、网络设备企业、央企、金融机构等重点领域代表，就IPv6升级改造与“IPv6+”技术创新实践进行了典型发言与经验交流。
        </p>

        <img
          src="~/static/ipv6-meeting.jpg"
          alt=""
        >
        <p style="font-size: 12px;color:#999;text-align:center">中央网信办副主任杨小伟致辞</p>

        <p> 作为国内领先的IPv6解决方案提供商，连星科技（LinkingThing.com）解决方案总监柏成勇在此次大会上发表了题为《IPv6平滑演进全生命周期管理解决方案》的演讲。柏成勇表示，IPv6 直接影响依赖网络的每一个服务，包括应用程序和流程（并间接影响其他所有方面）。机构、企业或者组织的每个业务部门或子部门可能需要对IPv6平滑演进计划的各个阶段和任务做出独特的管理和技术响应。工程团队需要考虑如何应对IPv6平滑演进过程中，来自开发人员、服务台、生命周期管理和其他团队的协作和网络请求；有效处理这些请求所花费的时间可能会严重延迟项目交付、故障排除，并会分散对更具战略性和时间敏感性的计划的注意力。

        </p>
        <img
          src="~/static/bo-boss.jpg"
          alt=""
        >

        <p style="font-size: 12px;color:#999;text-align:center">连星科技柏成勇在会议上发表演讲</p>
        <p>

          为确保IPv6演进与业务敏捷性目标保持一致，而不成为阻碍，需要对IPv6平滑演进的整个生命周期进行很好的掌控。基于此出发点，连星科技提出了 IPv6 平滑演进的3+1+1模型和架构。同时，连星科技推出了业内领先的CLXOne IPv6代际升迁管理平台。

        </p>

        <p>
          企业在工程技术、治理能力、可见性、知识储备和业务可伸缩性等方面的能力各不相同，因此实践“3+1+1”模型的IPv6目标的过程也会不同，相对应的价值体现也有所不同。总体上，连星科技提倡首先注重效率提升、其次是生产力改进，最后是降低成本。连星CLXOneIPv6代际升迁管理平台可以很好的帮助客户循序渐进的实现一个可预测的、减少风险的、可伸缩的和可问责的IPv6平滑演进。

        </p>
        <p>2020年作为贯彻落实《行动计划》第二阶段的收官之年，也是规模部署攻坚战决胜之年。连星科技将一如既往地聚焦IPv6，实践“IPv6+”技术创新，共同促进IPv6产业和生态发展。               
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
      text-align: center;
    }
    time {
      padding-right: 30px;
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

  img {
    max-width: 100%;
  }
}
</style>