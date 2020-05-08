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
                  <dd>成都市 · 高新区 · 天府三街大源国际中心B2栋1404</dd>
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
  </div>
</template>

<script>
import TitleGroup from "~/components/TitleGroup";
import axios from "~/plugins/axios";

export default {
  components: { TitleGroup },
  props: {},
  data() {
    return {
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
</style>