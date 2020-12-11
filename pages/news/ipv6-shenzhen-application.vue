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
        <h1>IPv6技术与应用论坛在深圳开讲，为高校IPv6部署提供经验 </h1>
        <p><time>发布时间： 2020-12-11</time>新闻出处： <a href="https://www.eol.cn/info/huiyi/202012/t20201204_2052314.shtml"> 中国教育和科研计算机网</a> </p>
      </header>

      <div>
        <p>12月2日，中国教育和科研计算机网CERNET第二十七届学术年会IPv6技术与应用分论坛在深圳举行。</p>　

        　　<p>IPv6技术与应用论坛由北京邮电大学教授马严主持，来自清华大学、中国科学技术大学、北京邮电大学、西北工业大学和东南大学等高校的专家学者围绕IPv6网站支持情况、IPv6部署实践与思考、真实源地址验证体系结构SAVA等主题进行深度研讨。
        </p>　
        <img
          src="~/static/ipv6-shenzhen-application-big.jpg"
          alt=""
        >
        　<p style="font-size: 12px;color:#999;text-align:center">　IPv6技术与应用论坛现场</p>　

        　　<p>中国科学技术大学网络信息中心副主任张焕杰介绍了中国科学技术大学DNS服务器针对IPv6升级开展的升级工作和运行状态，包括为支持DNSSEC、邮件系统的SPF、DKIM等安全功能增加的相关解析。
        </p>　
        　<p>　北京邮电大学信息网络中心讲师张沛基于测试数据比较了不同支持模式下的网站性能、安全、连通性以及网站对IPv6的内容支持度差异情况，为加速校园网IPv6的部署升级提供数据支撑。
        </p>　
        　　<p>西北工业大学信息化建设与管理处处长薛静指出，在高校校园网进行IPv6部署实践是顺应时代发展，更是建设智慧校园的关键环节。西北工业大学通过网络环境改造、业务应用提升、网络安全配套和用户生态营造等手段，在IPv6部署方面做了探索。
        </p>　
        　　<p>清华大学信息化技术中心高级工程师马云龙介绍，清华大学校园网通过设计和实施基于IPoE的双栈准入控制，可以有效减少身份冒用、流量冒用、地址假冒等安全问题，大大增强校园网安全状况，同时做到双栈一次认证通过，提高用户体验。
        </p>　
        　　<p>本场论坛特设SAVA专场，来自清华大学的三位专家分别进行分享。据介绍，SAVA是清华大学在国际上首次提出的真实源地址验证体系结构，研究了接入网内、域内和域间三个层次的源地址验证关键技术和基于真实地址的用户标识与管理技术，现已形成系列化IETF国际标准。
        </p>　
        　　<p>清华大学计算机科学与技术系副主任徐恪以互联网安全攻击路径为起点，以基于地址伪造的安全攻击为实例，以实现互联网跨域可信访问为牵引，同与会老师们探讨了下一代互联网面临的安全问题和解决思路，并提出一种真实、可信、可验证的新一代互联网体系结构构建思路。
        </p>　
        　　<p>清华大学网络所副所长李丹表示，uRPF等技术主要是在单点构建源地址验证表，但当存在路由不对称情况时，验证准确性就难以得到保障。为了有效弥补互联网体系结构除了路由协议之外所缺失的“另外一半”，提出了互联网源地址验证表的一种分布式生成协议，系统性地构建准确的互联网源地址验证表。
        </p>　
        　　<p>清华大学网络研究院副院长刘莹介绍了真实源地址验证技术体系结构及关键技术基本情况，重点分享了接入网真实源地址验证技术以及用户溯源和管理技术在校园网的部署实践。
        </p>　
        　　<p>此外，东南大学的优秀学术论文作者也在此次论坛上进行了交流和分享。</p>　
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

  img {
    max-width: 100%;
  }

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