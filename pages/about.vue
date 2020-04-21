<template>
  <div class="about">
    <div class="banner bg"></div>
    <div class="introduce bg">
      <div class="intro-content">
        <TitleGroup
          mainTitle="关于我们"
          subtitle="ABOUT US"
        />
        <section class>
          <p>北京连星科技有限公司聚焦下一代信息技术数据服务，围绕IPv6技术的数据化、网络化、智能化的突出特征做深度挖掘</p>
          <p>公司坚持技术创新，运用新一代通信技术、数据挖掘、人工智能和云计算等新技术，实现各种技术的相互渗透和融合，为用户搭建终端、网络、数据和应用互连互通的超融合数字服务平台，协同推进信息技术产业和服务的代际升迁</p>
        </section>
      </div>
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
                  <dd>北京市石景山区古城金融街长安中心城通街26号院4号楼1305</dd>
                  <dd>成都市·高新区·天府三街大源国际中心B2栋1404</dd>
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
                <p>linking thing666</p>
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
  height: 680px;
  padding-top: 140px;
  background-image: url("../assets/images/bg-about.png");

  .intro-content {
    position: absolute;
    left: 50%;
    width: 450px;
  }
  section {
    padding-top: 80px;
  }
  p {
    font-size: 14px;
    line-height: 34px;
    color: #808080;
    margin-bottom: 40px;
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