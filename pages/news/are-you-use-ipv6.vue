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
        <h1>IPv6规模部署进行时，你的网站用上IPv6了吗？ </h1>
        <p><time>发布时间： 2020-12-11</time>新闻出处： <a href="https://page.om.qq.com/page/O5dM2Qced0NJSdPd5W62dIBA0">新网xinnet</a> </p>
      </header>

      <div>
        <p> 我国IPv6规模部署取得重大进展。</p>

        <p> 在日前举行的第二届中国互联网基础资源大会上，中国工程院院士邬贺铨发表了《开发IPv6功能，增强网络设施能力》主题演讲。邬贺铨介绍，我国IPv6用户快速增长。据数据统计，2020年8月，我国IPv6活跃用户数达3.65亿，占互联网用户之比达40.32%。
        </p>
        <p> 随着互联网在社会生活各个领域的广泛应用和商业化的深入发展,IPv4作为一种基础资源，在过去20多年中支撑了全球互联网的发展和壮大，现在未分配的IPv4地址将在二十年后耗尽。同时IPv4协议由于本身所存在的缺陷已经逐渐成为限制下一代网络发展的瓶颈。
        </p>
        <p> 尤其是地址空间问题更显突出,针对此种情况，IETF设计了IPv6协议并且已完成IPv6的标准化工作。目前国内的网络正在快速的向IPv6升级中，从网络基础设施如运营商骨干网、城域网，到互联网服务商等各类云服务，以及各类终端设备厂商如手机、电脑、路由器、交换机等，均在IPv4向IPv6网络的升级改造中。
        </p>
        <h3>IPv6规模部署正在进行时</h3>
        <p> 在一系列政策支持以及产业链的努力下，目前，我国IPv6的发展已然走在了世界前列。</p>

        <p> 2017年，中办、国办发布《推进互联网协议第六版(IPv6)规模部署行动计划》文件后，IPv6在国内的发展进入关键节点。今年3月，工信部《关于开展2020年IPv6端到端贯通能力提升专项行动的通知》中明确指出，要优化提升IPv6网络接入能力，全面扩大数据中心IPv6覆盖范围，到2020年底IPv6活跃连接数达到11.5亿。
        </p>
        <p> 根据亚太互联网络信息中心发布的全球IPv6地址分配数据显示，截至2019年12月底，在全球IPv6地址资源拥有量排名中，美国位居第一，中国第二，德国第三。
        </p>
        <p> 据中国互联网络信息中心数据显示，截至2019年12月底，中国IPv6地址分配总数为47885(块/32)。全球IPv6用户平均占比为27%，我国的IPv6部署应用程度目前位居世界前列，可见IPv6在我国真正被使用起来了。
        </p>
        <img
          src="~/static/are-you-use-ipv6.png"
          alt=""
        >
        <h3>为什么要用IPv6？
        </h3>
        <p> 其一，更高的安全性。</p>

        <p>之前所有的安全机制都来源于应用层的加密，如SNMPv2网络管理安全、E-mail加密等，并不能从IP层来保证Internet的安全，而IPv6则实现了IP级的安全。
        </p>
        <p> 在使用IPv6网络中，用户可以对网络层的数据进行加密，并对IP报文进行校验</p>
        <p>
          IPv6的IPSec设计，加密传输文件，极大的增强了网络的安全性，用起来也更加安心。</p>

        <p> 其二，更好的扩容能力和更快的访问速度。</p>

        <p> 如果新的应用或技术需要时，IPv6允许协议进行扩充。</p>

        <p> 此外，IPv6使用更小的路由表，这让路由器转发数据包的速度更快，因此网页访问速度，数据上传或者下载速度等会更快，从而进一步增强用户体验。
        </p>
        <p>其三，抢占市场先机。</p>

        <p>自从进入21世纪后，互联网开始爆发性发展，越来越多的人开始用各种设备上网。这就意味着，需要越来越多的IP地址。
        </p>
        <p> IPv4迄今为止已经使用了30多年，地址资源即将枯竭，正在逐渐被IPv6取代。</p>

        <p>使用IPv6地址不仅可以节约成本，还可把握互联网发展方向。国内三大运营商正在陆续向终端宽带用户下发IPv6地址，2020年底IPv6活跃连接数将达11.5亿，不支持IPv6的网站在获客能力上劣势明显。
        </p>
        <h3>IPv6是下一代互联网创新的起点
        </h3>
        <p> 作为下一代互联网创新的起点，拥有一个支持IPv6的网站已成为必然的趋势。IPv6真的来了，你家的网站支持了吗？
        </p>
        <p> IPv6规模部署已是箭在弦上，企业应结合自有业务应用场景和网络推广需求，部署IPv6的先发优势，抢占先机。需要注意的是，可实现Ipv6的网站服务商屈指可数，新网拥有27年互联网基础应用服务经验，是千万企业网站建设及IPv6部署的信赖之选。
        </p>
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