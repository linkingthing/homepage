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
        <h1>关于印发《工业互联网专项工作组2020年工作计划》的通知 </h1>
        <p><time>发布时间： 2020-07-10</time>新闻出处： <a href="http://www.miit.gov.cn/n973401/n5993937/n5993958/c8004133/content.html">工业和信息化部信息通信管理局</a> </p>
      </header>

      <div>

        <p>导 读</p>

        <p>工业和信息化部近日印发《工业互联网专项工作组2020年工作计划》，包括提升基础设施能力、构建标识解析体系、建设工业互联网平台、突破核心技术标准、培育新模式新业态、促进产业生态融通发展、增强安全保障水平、推进开放合作、加强统筹推进、推动政策落地等10大任务类别的54项具体举措。</p>

        <h3>关于印发《工业互联网专项工作组2020年工作计划》的通知</h3>
        <p>工信厅信管函〔2020〕153号
        </p>
        <p>工业互联网专项工作组成员单位办公厅（办公室、综合司）：</p>

        <p>现将《工业互联网专项工作组2020年工作计划》印发给你们，请认真贯彻落实。</p>

        <p>附件：

        </p>

        <img
          src="~/static/notice-Industrial-Internet-2020/1.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/2.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/3.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/4.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/5.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/6.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/7.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/8.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/9.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/10.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/11.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/12.png"
          alt=""
        >                   
        <img
          src="~/static/notice-Industrial-Internet-2020/13.png"
          alt=""
        >                   
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