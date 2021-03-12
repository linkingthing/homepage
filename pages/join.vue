<template>
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
            <!-- <span>{{recruitment.salary}}</span> -->

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
</template>

<script>
import TitleGroup from "~/components/TitleGroup";

export default {
  components: {
    TitleGroup
  },
  props: {},
  data() {

    this.recruitments = [{
      id: 1,
      title: "高级产品经理",
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
      title: "解决方案工程师",
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
    }];

    return {
      active: 1
    };
  },
  computed: {
    recruitment() {
      return this.recruitments.find(item => item.id === this.active)
    }
  },
  watch: {},
  created() { },
  mounted() { },
  methods: {}
};
</script>

<style lang="less" scoped>
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