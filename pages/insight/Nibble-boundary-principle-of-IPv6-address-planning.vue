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
        <h1>IPv6地址规划的nibble boundary原则</h1>
        <p><time>发布时间： 2020-08-06</time>新闻出处： <a href="/">连星科技</a> </p>
      </header>
      <div>

        <p>IPv6地址规划原则中，每个站点分配a/48是普遍认可的IPv6地址资源消耗的基本单位。这是为什么？在IPv6中可用的128位中，最多的64位预留给主机识别，最小的允许子网(除了少数具有特殊意义的除外)是a/64，，这是指定用于分配给单个网络接口的子网大小。 由于A/64中可供主机寻址的64位提供了1.8E19或18,446,744,073,709,551,616个主机地址，因此，给定这样一个庞大的存储池，使用IPv6前缀来度量IPv6地址消耗更有意义。
        </p>

        <p>我们先看看/64，我们可以考虑使用它。事实上，作为较小规模部署的消耗指标，它非常有效。负责分配IPv6(和IPv4)地址资源的区域因特网注册中心(RIR)使用a/48作为IPv6中地址消耗的基本衡量标准，a/48是最小的Internet可路由IPv6前缀。因此，向一个网站点分配一个/48可以确保该网站能够立即和将来直接连接到因特网，由此带来的路由策略的灵活性。注意，与超大型网络，或者出于操作、安全或路由策略的原因需要大量IPv6前缀的站点，可能需要我们将分配给这样一个站点的大小增加到a/48以外，即a/44甚至是a/40。
        </p>

        <p>我们先明确一下IPv6地址规划中站点的概念。企业和服务提供商将各种站点定义为企业校园网络、数据中心、物联网网关、地区办事处、家庭网关(例如电缆或dsl调制解调器)，甚至是用于将6to4隧道。
        </p>

        <p>将a/48视为分配到站点的首选前缀大小。一旦我们为一个站点分配了一个/48，我们就必须为如何划分和分配它包含的前缀做出一些设计选择。一些简单的组织原则可以使这项任务更容易有效地管理。
        </p>

        <h3>16位范围</h3>
        <p>
          将a/48分配给站点，a/64作为可分配给接口的最小前缀，我们可以确定我们所拥有的地址资源的范围。基本上，我们总共有16位要处理。选择如何组织这些可用的16位将决定地址计划的结构。

        </p>
        <p>
          最简单的选择是：从a/48中可用的池开始分配/64。例如，如果我们的站点前缀是2001：Db8：ABCD：：/48，那么我们将得到65,536/64前缀。这些措施的清单将从以下几个方面开始：

        </p>

        <pre>
2001：Db8：ABCD：：/64
2001：Db8：ABCD：1：：/64
2001：Db8：ABCD：2：：/64
.
.
.
2001：Db8：ABCD：ffff：：/64
</pre>
        <p>
          从65,536/64的池开始，可以从列表中的第一个/64分配到第一个接口开始，然后依次分配额外的/64。对于一个非常小的站点来说，这种方法是非常有意义的，因为它具有非常少的总接口和/或很少的内部组织结构或网络拓扑复杂性。

        </p>

        <p>
          但是，对于大多数更大或更复杂的站点，以反映站点内部的部分或全部层次结构和/或内部组织的方式分配IPv6子网可以提供近期和未来的运营效益。IPv6地址的十六进制结构及其相关的网络前缀提供了一种nibble boundary的方式，来实现高效、灵活地表示这种层次结构。

        </p>

        <h3>
          nibble boundary
        </h3>

        <p>
          nibble boundary 是在任意两个相邻的4位组之间自然产生的边界，其值可被 24n分解。首先，它为任何IPv6前缀生成CIDR值，这些前缀总是4的倍数。例如，a/48(12×4)。较小前缀的下一个nibble boundary 是a/52(13×4)，然后是/56，/60，最后是/64。如前所述，我们通常不会在a/64之外进行子网。当然，从单个站点移到更大的前缀，同样的概念也适用(/44、/40、/36、/32等)。

        </p>

        <p>
          在创建和分配IPv6前缀时，nibble boundary使特定的前缀更容易识别，用于地址管理和跟踪以及操作目的。
        </p>

        <p>子网位数是4的倍数</p>

        <pre>
前缀： 2001：db8:1：：/48
范围： 2001：db8:1：0000：：
       2001：db8:1：ffff：：
</pre>

        <p>子网位数不是4的倍数</p>
        <pre>
前缀： 2001：db8:1：0：/49
      2001：db8:1：8：/49
范围： 2001：db8:1：0000：：
       2001：db8:1：7fff：：
       2001：db8:1：8000：：
       2001：db8:1：ffff：：
</pre>

        <p>在上面的示例中，有两个前缀，前三个十六进制为2001：Db8：1。第一个前缀是a/48，第二个前缀是a/49。在/48的情况下，我们可以看到，2001：Db8：1的值总是精确地标识它分配给的任何实体(通常是一个特定的站点)。对于/49而言，同一2001：Db8：1所提供的信息不能立即识别。
        </p>

        <p>我们必须将CIDR值与字符中的一系列十六进制值关联起来，就在地址的nibble boundary右侧。此地址位置中的值将根据我们使用的non-nibble CID值而有所不同。相比之下，跳过non-nibble CID值到下一个nibble boundary(/52)将得到以下结果：
        </p>

        <p>子网位数是4的倍数</p>
        <pre>
前缀： 2001：db8:1：0：/52
范围： 2001：db8:1：0000：：
       2001：db8:1：0fff：：
</pre>

        <p>所有的/52 (2001：db8:1::/48)：
        </p>

        <pre>
2001：db8:1：0000：：/52
2001：db8:1：1000：：/52
2001：db8:1：2000：：/52
2001：db8:1：3000：：/52
2001：db8:1：4000：：/52
2001：db8:1：5000：：/52
2001：db8:1：6000：：/52
2001：db8:1：7000：：/52
2001：db8:1：8000：：/52
2001：db8:1：9000：：/52
2001：db8:1：a000：：/52
2001：db8:1：b000：：/52
2001：db8:1：c000：：/52
2001：db8:1：d000：：/52
2001：db8:1：e000：：/52
2001：db8:1：0fff：：/52
</pre>

        <p></p>
        <p>与分配给整个站点的/48一样，每个/52可能被分配给该站点内的特定逻辑实体(如路由或安全域)或物理实体(如建筑物或楼层)。但是，无论前缀分配给什么，前缀的可读性和通过依附于nibble boundary而获得的识别容易程度都有了很大的提高。

        </p>

        <p>
          关于详细的nibble boundary介绍以及“如何计算4位咬边外的子网？”，请参考APNIC官网的文章:https://blog.apnic.net/2018/08/10/how-to-calculating-ipv6-subnets-outside-the-nibble-boundary/

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
}
</style>