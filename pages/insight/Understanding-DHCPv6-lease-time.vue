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
        <h1>和小星一起学IPv6系列之 ---- 理解DHCPv6租约时间</h1>
        <p><time>发布时间： 2020-07-03</time>新闻出处： <a href="/">连星科技</a> </p>
      </header>
      <div>

        <p>
          通常认为，将IPv6的操作模型与IPv4的操作模型保持匹配是最佳实践。 例如，在数据中心或云环境中，将静态IPv4地址分配给服务器或者实例，因此，分配静态的IPv6地址也是合理的。如果一个企业或者组织使用DHCP (RFC 2131) 将IPv4地址租赁给终端节点，那么使用DHCPv6 (RFC 8415) 将IPv6地址接口标识符 (IID是128位IPv6地址的最后64位)租赁给终端节点也是合乎逻辑的。

        </p>

        <h3>
          关于DHCPv6
        </h3>
        <p>
          IPv6动态主机配置协议DHCPv6 (Dynamic Host Configuration Protocol for IPv6) 是针对IPv6编址方案设计，为主机分配IPv6地址/前缀和其他网络配置参数。

        </p>
        <p>
          IPv6协议具有地址空间巨大的特点，但同时长达128比特的IPv6地址又要求高效合理的地址自动分配和管理策略。IPv6无状态地址配置方式（参看协议RFC2462）是目前广泛采用的IPv6地址自动配置方式。配置了该协议的主机只需相邻设备开启IPv6路由通告功能，即可以根据通告报文包含的前缀信息自动配置本机地址。
        </p>

        <p>
          无状态地址配置方案中设备并不记录所连接的IPv6主机的具体地址信息，可管理性差。而且当前无状态地址配置方式不能使IPv6主机获取DNS服务器的IPv6地址等配置信息，在可用性上有一定缺陷。对于互联网服务提供商来说，也没有相关的规范指明如何向设备自动分配IPv6前缀，所以在部署IPv6网络时，只能采用手动配置的方法为设备配置IPv6地址。
        </p>

        <p>
          DHCPv6技术解决了这一问题。DHCPv6属于一种有状态地址自动配置协议。

        </p>

        <p>
          与其他IPv6地址分配方式（手工配置、通过路由器通告消息中的网络前缀无状态自动配置等）相比，DHCPv6具有以下优点：
        </p>

        <ul>
          <li>
            <span class="point"></span>更好地控制IPv6地址的分配。DHCPv6方式不仅可以记录为IPv6主机分配的地址，还可以为特定的IPv6主机分配特定的地址，以便于网络管理。
          </li>
          <li>
            <span class="point"></span>DHCPv6支持为网络设备分配IPv6前缀，便于全网络的自动配置和网络层次性管理。
          </li>

          <li>
            <span class="point"></span>除了为IPv6主机分配IPv6地址/前缀外，还可以分配DNS服务器IPv6地址等网络配置参数。

          </li>
        </ul>

        <p>

          DHCPv6服务器分配给客户端的IPv6 /前缀具有一定的租借期限。租借期限由有效生命期（Valid Lifetime）决定。/前缀的租借时间到达有效生命期后，客户端不能再使用该 /前缀。在有效生命期到达之前，如果客户端希望继续使用该 /前缀，则需求更新 /前缀租约。

        </p>

        <h3>
          典型的DHCP租赁时间有多长
        </h3>

        <p>
          由于IPv4地址的稀缺性，许多企业或者组织在其有线和无线接入网络上设置了相对较短的租赁时间。无线接入网络的租用时间往往比公司内部有线端口的时间更短。随着更多的最终用户、移动设备接入，很容易在一天的时间内使用完 /24地址范围。此外，无线访客接入的租赁时间要求最短，可以想象一下一个体育场的Wi-Fi网络和大量的移动设备接入场景，DHCP租赁时间可能需要短至一个小时内。

        </p>

        <p>

          服务提供商使用DHCP将公共IPv4地址租赁给住宅用户路由器。对于这些宽带互联网接入网络，DHCP租赁时间可以持续一天到一周。但是，家庭路由器外部的公共IPv4地址可能多年不会改变，几乎是静态的。其他服务提供商也可能会配置DHCP，使公共地址经常更改。如果用户想从互联网上访问家庭网络，可以使用动态DNS (DDNS)，以保证IP地址经常变化的情况下保持DNS记录更新。

        </p>

        <p>

          根据所使用的DHCP软件不同，默认租赁期限可能会有很大的不同。 例如：

        </p>

        <ul>
          <li>
            <span class="point"></span>CLXOne专用设备使用43,200秒（12小时）作为默认租赁时间。
          </li>
          <li>

            <span class="point"></span>ISC DHCP服务器的默认租赁时间为21,600秒（6小时）。
          </li>

          <li>
            <span class="point"></span>WindowsServer 2019使用默认租赁时间为8天（或691200秒！)。

          </li>
        </ul>

        <p>
          可以看到，默认的租赁时间不同的DHCP服务器软件差别还是很大的。 因此，根据网络范围类型、网络类型、终端节点的数量和所需要的变化频率，了解这些默认值并正确地配置它们是很有必要的。

        </p>

        <h3>
          IPv6有何不同
        </h3>
        <p>
          在基本协议结构方面，IPv4和IPv6有一些共同的特点，但也存在明显的不同。部署IPv6不会改变拓扑中VLAN的数量或访问网络的数量，我们通常只是在已经运行IPv4的现有网络拓扑之上添加IPv6，IPv6也不会改变网络上的主机数量，而是所有这些节点都将同时运行IPv4和IPv6。
        </p>

        <p>
          在配置DHCP范围时，假设/24子网，通常在低部排除几个地址 (例如： .1至.10)后，将剩余的地址 .11到 .254提供租赁。 对于DHCPv6，范围可从 :0000:0000:0000:0000到:ffff:ffff:ffff:ffff。从理论上讲，一个/64前缀可以支持2^64个节点（18,446,744,073,709,551,616），或18个百万的三次方。 通常配置路由器的静态IPv6接口地址使用/64前缀和::1 IID (例如，2001:db8:100:200::1)。 租赁地址与本地路由器的 (::1 IID) 的冲突几率非常低，因此不用担心。

        </p>
        <p>
          即使在双协议栈接入网络上有相同数量的IPv4节点和IPv6节点，DHCP(v4)和DHCPv6的租赁时间也可能有所不同。 由于IPv4地址的稀缺性，租赁时间通常被配置为更短。相比之下，考虑到IPv6地址的数量，租赁时间可以配置为更长。 例如，DHCPv6范围租赁时间可能是一个月或更长。 使用DHCPv6，限制因素是存储在DHCPv6服务器上的DHCPv6客户端DHCP唯一标识符 (DUID) 的数量。 然而，在今天的网络上这并不是问题，在任何 /24 IPv4子网上通常只有不到200个节点。

        </p>
        <p>
          DHCPv6还有许多其他方面与我们熟悉的DHCP存在差别。 明显的区别是IPv6路由器使用ICMPv6类型的134路由器广告（RA）消息向节点指示它们应该使用DHCPv6。 IPv4节点只需发出UDP广播消息，供本地路由器中继到DHCP服务器，或由本地DHCP服务器服务。 此外，用于IPv4的DHCP使用四个有状态的消息Discover / Offer / Request / Acknowledge (DORA)来获得租约，而DHCPv6使用Solicit / Advertise / Request / Reply (SARR)消息来实现相同的功能。 对于另一个例子，我们知道DHCPv6客户端使用DHCP唯一标识符 DUID (RFC 6355)，它可以不同于DHCPv4 (为客户端标识符使用链路层MAC地址)。 与DHCP相比，DHCPv6服务器在高可用性方面也使用不同的配置。最后，DHCP和DHCPv6之间创建静态保留的格式也是不同的。

        </p>
        <p>
          我们还应该注意到，终端节点在租赁期限的一半时间内执行续租。 如果租赁时间为8小时，则在4小时，节点将向DHCP服务器发送DHCP REQUEST单播消息，DHCP服务器将发送确认更新的DHCPACK单播消息。 对于消息类型，DHCPv6使用的名称与IPv4 DHCP不同。 当终端节点想要延长其租赁寿命时，它向服务器发送一个RENEW消息，服务器用REPLY消息回复。

        </p>
        <h3>
          IPv6首选和有效的寿命
        </h3>
        <p>
          正如邻居发现协议 (NDP，在RFC 4861中描述) 所指定的，接入网络路由器通常每200秒将ICMPv6 类型为134的路由器广告（RA）多播到本地网络上的所有节点。 RA也由路由器发送给加入网络的新主机。 这些新主机使用多播向所有本地路由器发送ICMPv6类型为133路由器请求（RS）消息。 RA包含网络前缀 (通常是128位IPv6地址的前64位)、有关该网络的终端节点的其他信息以及它们应该如何获得它们的IID。 为了指示终端节点只应该使用DHCPv6，管理地址配置标志 (M - 标志)设置为“1”，自治地址配置标志(A - 标志)设置为“0”。

        </p>
        <p>
          RA还包含一个“路由器生命时间”、一个“可到达时间”和一个“Retrans Timer”，供节点检查本地路由器是否可操作时使用。 “有效寿命”指定此前缀将在此网络上使用的秒数，而“首选寿命”指定当RA指示使用无状态地址自动配置(SLAAC)时，此前缀首选的秒数。 首选寿命永远不能超过有效寿命。 DHCPv6范围也可以配置有效和首选的寿命。 虽然RA发送的有效和首选寿命与DHCPv6服务器发送的有效和首选寿命具有类似的功能，但它们可能是不同的值。

        </p>
        <p>
          下面列出了一些DHCPv6服务器的默认DHCPv6首选和有效寿命：

        </p>

        <pre>
CLXOne
首选寿命为27000秒（7.5小时）。
有效寿命为43200秒（12小时）。

ISC DHCPv6
首选生存期默认为默认租赁时间的5/8（27,000秒，或7.5小时）。
默认租赁时间为43,200秒(与DHCPv6有效租赁时间相同：12小时)。

Windows Server 2019
优选的寿命默认值为8天。
有效寿命默认值为12天。
</pre>

        <h3>
          范围耗尽攻击
        </h3>

        <p>
          DHCPv6租赁时间的另一个考虑因素是攻击者如何请求多个租赁并使用租赁池中的所有可用地址。 很容易执行DHCP范围消耗攻击，因为范围内只有~250个IPv4地址（其中一半可能已经被主动租用），攻击只需几秒钟就能成功。 事实上，当IPv4范围被填满，并且需要减少租赁期限时，许多企业或者组织会在日常基础上无意中体验到这种情况。

        </p>
        <p>

          使用IPv6，DHCPv6范围是巨大的，永远不会被常规使用填满。 如果攻击者生成随机DUID并不断从DHCPv6服务器请求额外的租赁(通过DHCPv6中继)，DHCPv6租赁消耗攻击仍然可能发生。 虽然它不会像DHCP那样迅速发生，但它仍然可能对DHCPv6服务器产生破坏性影响：由于所有的DUID绑定到IPv6 IID和租赁信息，DHCPv6服务器的数据库可能会溢出。 因此，DHCPv6服务器可能需要一定的上限（例如，每/64前缀10,000个租约）或速率限制，以防止发生此类攻击。

        </p>

        <p>
          了解这些差异是很重要的，并根据你正在配置的IPv6网络的类型决定如何最好地为您的企业或者组织部署DHCPv6。 DHCPv6租赁时间可以远远超过DHCP租赁时间，但是DHCP和DHCPv6的许多其他操作方面是相似的。
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
.point {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #333;
  border-radius: 50%;
  margin-right: 5px;
}
</style>