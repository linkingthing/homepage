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
        <h1>2020年5月全球IPv6普及度突破32%</h1>
        <p><time>发布时间： 2020-5-31</time>新闻出处： <a href="https://baijiahao.baidu.com/s?id=1671018580103261489&wfr=spider&for=pc">新民晚报</a> </p>
      </header>

      <div>
        <p>根据 Google 的统计，全球的 IPv6 普及度突破了 32%。按国别统计，中国只有 0.24%，美国 42%，加拿大 27.8%，俄罗斯 3.82%，印度 46%。因为移动网络、家庭宽带和企业网络在普及 IPv6 上的差异。
        </p>

        <p>当人们在工作时，统计数据会显示 IPv6 普及度出现下降，原因是移动网络和家庭宽带比企业网络更快普及 IPv6。
        </p>
        <p>而当人们在家远程办公时，普及度下跌幅度有所收窄，这种统计也能观察到企业的复工情况。</p>  
        <img src="~/static/In-May-2020-the-global-IPv6-penetration-rate-will-exceed-0.32.png" alt="">                   
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
  img {
    display: block;
    margin: 0 auto;
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