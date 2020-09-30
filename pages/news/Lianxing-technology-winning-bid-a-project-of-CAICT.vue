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
        <h1>连星科技中标中国信息通信研究院项目 </h1>
        <p><time>发布时间： 2020-09-30</time>新闻出处： <a href="/news/Lianxing-technology-winning-bid-a-project-of-CAICT">连星科技</a> </p>
      </header>

      <div>
          <p>北京连星科技有限公司（以下简称“连星科技”）于近期成功中标中国信息通信研究院重大科研基础平台-国家IPv6发展监测平台购置项目（招标编号：B0708-CMC20N7V66），成为国家IPv6基础设施的核心供应商之一。该项目是落实中共中央办公厅和国务院办公厅（两办）联合下发的《IPv6规模部署行动计划》的重大举措。连星科技凭借深厚的行业技术积淀、雄厚的研发实力、优异快捷的服务水平和良好的市场信誉，获得了评审专家组的一致认可，成功中标。</p>

          <p>连星科技将和中国信息通信研究院紧密合作，保证项目在规定的时间内顺利部署上线，全面支撑国家IPv6发展监测平台运营，为推动我国IPv6规模部署工作奠定坚实基础。</p>

          <p>更多中标详情请访问：<a href="http://www.mof.gov.cn/xinxi/zhongyangbiaoxun/zhongbiaogonggao/202009/t20200923_3593694.htm">http://www.mof.gov.cn/xinxi/zhongyangbiaoxun/zhongbiaogonggao/202009/t20200923_3593694.htm</a></p>
      </div>
    </div>
  </div>
</template>

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
}
</style>