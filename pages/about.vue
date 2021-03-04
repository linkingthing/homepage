<template>
  <div class="about">
    <div class="banner bg"></div>
    <div class="introduce bg">

      <section class="intro-content wrapper">
        <div class="introduce-slogan">
          <TitleGroup
            mainTitle="关于我们"
            subtitle="ABOUT US"
          />
          <q> 我们相信，存在这样一个未来：每一个网络都是自我防御的、可动态配置的、可无限扩展的，而且永远不衰落。我们正在为这个未来而不断努力!</q>
          <img
            :src="require('~/assets/images/bar.png')"
            alt=""
            style="margin-top: 46px"
          >
        </div>
        <div class="introduce-text">
          <p>北京连星科技有限公司，聚焦下一代信息技术数据服务，围绕下一代信息技术的数据化、网络化、智能化的突出特征，坚持技术创新，运用新一代通信技术、数据挖掘、人工智能和云计算等新技术，对客户的网络基础核心服务进行深度挖掘，实现各种技术的相互渗透和融合，为用户搭建终端、网络、数据和应用互连互通的超融合数据服务平台，协同推进信息技术产业和服务的代际升迁。</p>
          <p>基于新一代信息网络的资源性特征，连星科技打造创新的CLX（Control Links Possibility）网络数据服务理念，远不止于分配空间和地址，其核心是透析IP地址全生命周期的管理，洞察网络上的设备、用户/应用与网络之间的实时连接数据，提供近实时的、精准的网络数字资产视图，动态掌控网络运行状况，进而提供面向新一代信息技术网络的超融合数据服务解决方案。其中包括专业的数字资产治理，网络和应用的自适应能力评测评估，新一代信息技术网络的代际升迁，新一代通信网络质量管理和优化，企业信息化发展建设的专业化、集约化和扁平化，企业数字化发展建设的标准和规范体系。</p>
          <p>连星科技以技术促创新，以实践促成长，以服务促共赢，提供定制化的敏捷服务。让数字化网络基础设施井然有序，仅仅是新一代信息科技一体化变革的开始。我们期待与您一起，牢牢把握新一代信息技术的技术发展，共同制定更长远的资源建设和发展战略，推动新一代信息技术的应用落地和推广。</p>
        </div>
      </section>
    </div>
    <div class="contact wrapper">
      <div class="guesbook">
        <header>
          <h3>给连星留言</h3>
        </header>
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          class="form-body my-form"
        >
          <el-form-item prop="cname">
            <el-input
              v-model="form.cname"
              placeholder="请输入您的姓名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input
              v-model="form.email"
              placeholder="请输入您的邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item prop="message">
            <el-input
              type="textarea"
              v-model="form.message"
              placeholder="请输入您的留言内容"
              :autosize="{ minRows: 10, maxRows: 10}"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="danger"
              @click="handleSubmit('form')"
            >提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="contact-way">
        <TitleGroup
          mainTitle="联系我们"
          subtitle="CONTACT US"
        />
        <section>
          <ul>
            <li>
              <h3>
                <img
                  src="../assets/images/tel.png"
                  alt
                />
                电话
                <span>/ Phone Number</span>
              </h3>
              <div>
                <strong>010-88708872</strong>
              </div>
            </li>
            <li>
              <h3>
                <img
                  src="../assets/images/email.png"
                  alt
                />
                邮箱
                <span>/ E-mail</span>
              </h3>
              <div>
                <strong>
                  <em>web@linkingthing.com</em>
                </strong>
              </div>
            </li>
            <li>
              <h3>
                <img
                  src="../assets/images/location.png"
                  alt
                />
                地址
                <span>/ Adress</span>
              </h3>
              <div>
                <dl>
                  <dd>北京市 · 石景山区 · 古城金融街长安中心城通街26号院4号楼1305</dd>
                  <dd>成都市 · 高新区 · 益州大道中段599号航天城上城13栋1403号</dd>
                </dl>
              </div>
            </li>
            <li>
              <h3>
                <img
                  src="../assets/images/wechat.png"
                  alt
                />
                微信公众号
                <span>/ WeChat</span>
              </h3>
              <div>
                <p>连星科技（gh_92694d86a5f1）</p>
              </div>
            </li>
          </ul>
        </section>
      </div>

    </div>
    <div class="join-us">
      <div class="wrapper">
        <TitleGroup
          mainTitle="加入我们"
          subtitle="Join us"
        />

        <div class="join-us-message">
          <div class="join-us-job">
            <ul>
              <li
                :class="{active: item.id === active}"
                v-for="(item, index) in recruitments"
                :key="item.id"
                @click="active = item.id"
              >
                {{item.title}}
              </li>

            </ul>
          </div>
          <div class="join-us-content">

            <div class="job-head">
              <h1>{{recruitment.title}}</h1>
              <span>{{recruitment.salary}}</span>

            </div>

            <div class="job-content">
              <h3>【岗位职责】</h3>
              <ul>
                <li
                  v-for="item in recruitment.responsibility"
                  :key="item.content"
                >{{item.content}} </li>
              </ul>

              <h3>【岗位要求】</h3>
              <ul>
                <li
                  v-for="item in recruitment.demand"
                  :key="item.content"
                >{{item.content}} </li>

              </ul>
            </div>

            <div class="deliver">
              <p>
                *简历请直接投递至邮箱：<span>xiett@linkingthing.com</span> 联系人：谢女士 183-2874-1968（同微信）
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import TitleGroup from "~/components/TitleGroup";
import axios from "~/plugins/axios";

export default {
  components: { TitleGroup },
  props: {},
  data() {


    this.recruitments = [{
      id: 1,
      title: "IPv6产品经理",
      salary: "10K-25K",
      responsibility: [{
        content: "岗位方向：负责工业互联网网络评估评测平台产品的设计、规划和管理；"
      }, {
        content: "岗位内容：产品沟通、产品设计、产品规划、产品交付、版本管理；"
      }, {
        content: "协助维护重点客户的产品需求，提升客户满意度；"
      }],
      demand: [{
        content: "通信、电子、计算机及相关专业， 本科及以上学历",
      }, {
        content: "精通office，Visio、Mindmanager",
      }, {
        content: "良好的英语读写能力，能独立阅读英文文档",
      }, {
        content: "至少负责过3个以上成功产品设计及开发管理经验，独立完成产品需求分析文档、产品逻辑流程图、产品原型设计，独立与各相关部门进行沟通合作，跟踪产品实现和改进",
      }, {
        content: "精通产品交互设计的相关流程，包括功能分析、原型设计、界面开发、产品测试等"
      }, {
        content: "熟悉网络通信协议、云计算、大数据相关技术优先"
      }, {
        content: "优秀的沟通、协调能力及团队精神及抗压能力"
      }, {
        content: "熟悉APM或NPM优先。"
      }]
    },
    {
      id: 2,
      title: "golang开发工程师",
      salary: "10K-20K",
      responsibility: [{
        content: "负责后端服务器开发。"
      }, {
        content: "负责方案的设计和实现，文档的编写。"
      },],
      demand: [{
        content: "计算机相关专业，2年以上工作经验；",
      }, {
        content: "最近至少2年以上golang开发经验；",
      }, {
        content: "熟练使用常用数据结构与算法知识；",
      }, {
        content: "熟悉一种或多种常用数据库，一种或多种开源No-SQL存储；",
      }, {
        content: "熟悉Linux环境下编程，熟悉TCP/UDP/HTTP等协议；"
      }, {
        content: "了解消息中间件基本原理；"
      }, {
        content: "能够以开放热情的态度拥抱各种新的技术。"
      }, {
        content: "熟悉DNS/DHCP协议优先。"
      }]
    },
    {
      id: 3,
      title: "爬虫工程师",
      salary: "10K-20K",
      responsibility: [{
        content: "负责核心模块设计和开发，单元测试，文档编写"
      }, {
        content: "负责爬虫和容器化方向开发"
      }, {
        content: "负责与产品经理沟通，技术实现兼顾稳定性，易用性，可扩展"
      }, {
        content: "负责线上维护和升级"
      }],
      demand: [{
        content: "3年以上工作经验，热爱编程，有良好的代码风格，对代码质量有追求",
      }, {
        content: "精通爬虫与反爬原理，熟悉常见的爬虫框架",
      }, {
        content: "有实际Golang大型项目经验优先（C++/JAVA经验丰富也可）",
      }, {
        content: "对产品有强烈的责任心，具有良好的沟通能力和团队协作能力",
      }, {
        content: "熟悉docker, k8s优先。"
      },]
    },
    {
      id: 4,
      title: "JAVA工程师",
      salary: "10K-20K",
      responsibility: [{
        content: "参与系统架构的设计和方案讨论，完成系统架构设计；"
      }, {
        content: "进行系统分析、架构设计以及核心功能的开发；"
      }, {
        content: "进行业务系统的缓存、消息、服务分布式架构优化与新技术引入；"
      }, {
        content: "解决系统遇到的业务、技术方面问题，寻找可行的改进方案并推行。"
      }],
      demand: [{
        content: "3-5年以上JAVA开发经验；",
      }, {
        content: "熟悉常见的主流框架的使用方法，熟悉常见前端技术框架，具备全栈开发能力优先；",
      }, {
        content: "熟悉微服务架构的基本原则与思想，熟悉Spring Cloud或Dubbo等相关技术，具备大型分布式平台构建能力；",
      }, {
        content: "熟悉分布式系统的设计和应用，熟悉分布式、缓存、消息等机制；",
      }, {
        content: "熟悉系统的非功能性设计及评估：可靠性、安全性、运行效率、可维护性等；"
      },]
    },
    {
      id: 5,
      title: "测试开发工程师",
      salary: "10K-20K",
      responsibility: [{
        content: "负责公司的测试开发相关工作，包括UI自动化测试，接口自动化测试，集成测试和性能测试，以及编写相关测试文档；"
      }, {
        content: "负责自动化测试平台的搭建和维护；"
      }, {
        content: "推动自动化测试体系，协助团队提升质量和效率。"
      }],
      demand: [{
        content: "具备3年以上的测试经验，精通软件测试理论和方法。",
      }, {
        content: "熟悉自动化测试框架。",
      }, {
        content: "掌握Python或者Ruby语言编程。",
      }, {
        content: "熟悉进行UI自动化测试，接口自动化测试。 ",
      }, {
        content: "熟悉编写shell脚本，常用的linux命令。 "
      }, {
        content: "具备良好的沟通表达能力，团队合作精神。"
      }, {
        content: "具备优秀的团队意识和工作态度，良好的沟通能力，良好的自我提升意识。"
      },]
    },
    {
      id: 6,
      title: "售前工程师",
      salary: "8K-20K",
      responsibility: [{
        content: "企业网、IPv6、工业互联网领域相关产品和解决方案的售前支持；"
      }, {
        content: "方案咨询、方案设计、客户交流、产品宣讲、文档编写、项目招投标等；"
      }, {
        content: "需求调研、产品规划、营销工作等。"
      }],
      demand: [{
        content: "大学本科及以上学历，通信、计算机、软件及相关专业；",
      }, {
        content: "熟悉TCP/IP、路由、交换、安全等网络技术，熟悉Linux基础知识; ",
      }, {
        content: "具备3年售前、产品或市场相关工作经验；",
      }, {
        content: "熟悉PPT/Word等工具，具备优秀的文案编写能力和沟通表达能力；",
      }, {
        content: "善于组织协调，责任心强，有较强的学习能力和抗压能力；"
      }, {
        content: "熟悉IPv6/DHCP/DNS/工业互联网等产品技术领域优先；"
      }, {
        content: "熟悉能源、政府、教育、金融等行业，具有系统集成项目经验优先；"
      }, {
        content: "有CCNP、CCIE或同级别证书优先。"
      },]
    }
    ];

    return {
      active: 1,
      form: {},
      rules: {
        cname: [
          { required: true, message: "请输入姓名" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址" },
          {
            type: "email",
            message: "请输入正确的邮箱地址"
          }
        ],
        message: [
          { required: true, message: "请填写留言信息" },
          { min: 10, max: 140, message: "长度在 10 到 140 个字符" }
        ]
      }
    };
  },
  computed: {
    recruitment() {
      return this.recruitments.find(item => item.id === this.active)
    }
  },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/apis/guestbook", this.form)
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("留言成功");
              } else {
                this.$message.error("留言成功");
              }
            })
            .catch(() => {
              this.$message.error("留言成功");
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.bg {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.wrapper {
  width: 1200px;
  margin: 0 auto;
}
.banner {
  height: 450px;
  background-image: url("../assets/images/company.png");
}

.introduce {
  position: relative;
  height: 927px;
  padding-top: 140px;
  background-image: url("../assets/images/bg-about.png");

  .intro-content {
    display: flex;
    justify-content: space-between;

    .introduce-slogan {
      padding-top: 80px;

      width: 540px;
      q {
        position: relative;
        display: block;
        width: 100%;
        font-size: 18px;
        font-style: italic;
        letter-spacing: 2px;
        color: #333;
        line-height: 34px;
        padding: 34px 26px 0;
        margin: 80px 0 128px;
        &::after {
          position: absolute;
          right: 0;
          bottom: 0;
          content: "";
          display: block;
          width: 20px;
          height: 18px;
          background-image: url("../assets/images/q-end.png");
          background-repeat: no-repeat;
          background-size: cover;
        }

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          display: block;
          width: 20px;
          height: 18px;
          background-image: url("../assets/images/q-start.png");
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
    .introduce-text {
      width: 580px;
    }
  }

  p {
    font-size: 14px;
    line-height: 34px;
    color: #666;
    margin-bottom: 40px;
    text-indent: 2em;
  }
}
.contact {
  padding: 110px 0;
  &::before,
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  .contact-way {
    padding-top: 80px;

    section {
      padding-top: 80px;

      ul,
      li {
        list-style: none;
        padding: 0;
      }
      img {
        vertical-align: middle;
        margin-right: 18px;
      }
      h3 {
        font-size: 16px;
        color: #333;
        margin-bottom: 10px;
      }
      span {
        font-size: 12px;
        color: #808080;
      }
      strong {
        display: block;
        font-size: 24px;
        line-height: 1;
        background-image: -webkit-linear-gradient(bottom, #ee3434, #ff8e8e);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #ee3434;

        em {
          line-height: initial;
          font-style: normal;
        }
      }
      div {
        margin-left: 44px;
        padding-bottom: 50px;
      }
      dd {
        font-size: 14px;
        color: #808080;
        margin-bottom: 16px;
      }
      p {
        font-size: 14px;
        color: #808080;
      }
    }
  }
  .guesbook {
    float: right;
    width: 580px;
    background: #fff;
    box-shadow: 7px 13px 65px 0px rgba(107, 107, 107, 0.13);

    header {
      padding: 45px 0 40px 0;
      border-bottom: 1px solid #e5e5e5;
      h3 {
        text-align: center;
        font-size: 18px;
        color: #333;
      }
    }
    .form-body {
      padding: 50px 66px 40px;
      .el-button {
        display: block;
        width: 100%;
        margin-top: 44px;
        height: 60px;
        background: linear-gradient(
          -39deg,
          rgba(238, 52, 52, 1),
          rgba(255, 142, 142, 1)
        );
        border-radius: 4px;
      }
    }
  }
}
.join-us {
  // min-height: 890px;
  height: 1046px;
  background-image: url("../assets/images/bg-join-us.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 90px 0 94px;

  .join-us-message {
    padding-top: 50px;
    display: flex;
    min-height: 620px;

    .join-us-job {
      width: 220px;
      border-radius: 6px;
      background: rgba(0, 0, 0, 0.15);
      ul {
        padding: 15px 0;
      }
      li {
        color: #111;
        font-size: 14px;
        height: 66px;
        line-height: 66px;
        list-style: none;
        padding-left: 30px;
        cursor: pointer;

        &.active,
        &:hover {
          font-weight: bold;
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
    .join-us-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-left: 60px;
      .job-head {
        display: flex;
        height: 72px;
        line-height: 72px;
        color: #111;
        font-size: 24px;
        font-weight: bold;
        border-bottom: 1px solid #999;

        h1 {
          font-size: 24px;
        }
        span {
          margin-left: auto;
        }
      }
      .job-content {
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          font-size: 14px;
          color: #111;
          margin-bottom: 16px;
          line-height: 24px;
        }
        h3 {
          font-size: 14px;
          color: #111;
          margin-top: 30px;
          margin-bottom: 20px;
        }
      }

      .deliver {
        margin-top: auto;
        font-size: 14px;
        color: #111;
        padding: 30px 0 16px;
        border-top: 1px solid #999;
        span {
          font-weight: bold;
          padding-right: 40px;
        }
      }
    }
  }
}
</style>