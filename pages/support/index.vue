<template>
  <div
    class="support"
    id="support"
  >
    <BigPicture :url="require('~/assets/images/bg-support.png')" />
    <section class="apply-support">
      <TitleGroup
        mainTitle="技术支持申请"
        subtitle="APPLY FOR TECHNICAL SUPPORT"
      />
      <div class="tips">
        <img
          src="../../assets/images/apply.png"
          alt
        />
        <p>如果您有新的支持需求，请提交请求支持；或者直接通过电话/邮件联系我们的专业技术支持人员（010-88708872； web@linkingthing.com），我们会尽快与您联系。带*的为必填项</p>
      </div>
      <div class>
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          class="form-body my-form"
        >
          <el-row :gutter="36">
            <el-col :span="8">
              <el-form-item prop="cname">
                <el-input
                  v-model="form.cname"
                  placeholder="请输入您的姓名*"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="email">
                <el-input
                  v-model="form.email"
                  placeholder="请输入您的邮箱"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="phone">
                <el-input
                  v-model="form.phone"
                  placeholder="请输入您的联系电话*"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="city">
                <el-input
                  v-model="form.city"
                  placeholder="请输入您所在的城市"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="company">
                <el-input
                  v-model="form.company"
                  placeholder="请输入您的公司名称*"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="industry">
                <el-input
                  v-model="form.industry"
                  placeholder="请输入您所在的行业"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="job">
                <el-input
                  v-model="form.job"
                  placeholder="请输入您的职位"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="product">
                <el-input
                  v-model="form.product"
                  placeholder="请输入产品或解决方案"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="budget">
                <el-input
                  v-model="form.budget"
                  placeholder="请输入您的预算"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="describe">
                <el-input
                  type="textarea"
                  v-model="form.describe"
                  placeholder="请输入您的需求描述"
                  :autosize="{ minRows: 8, maxRows: 8}"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <div class="check-confirm">
                <p>
                  <el-checkbox
                    v-model="isAccept"
                    class="tips-checkbox"
                  ></el-checkbox>我愿意收到连星科技及其授权合作伙伴的相关电子邮件信息。我知道我可以随时取消订阅
                </p>
                <p>
                  <el-checkbox
                    v-model="isAgree"
                    class="tips-checkbox"
                  ></el-checkbox>我理解并同意按照连星科技
                  <a href="javascript:;">隐私保护条款</a> 和
                  <a href="javascript::">使用条款</a> 使用和传递我的个人信息。
                </p>
              </div>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button
              :disabled="!(isAccept&& isAgree)"
              type="danger"
              @click="handleSubmit('form')"
            >提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
    <h1 id="download"></h1>
    <section class="newlast-resource-download">
      <div class="wrapper">
        <header>
          <div class="page">
            <div class="pag-btn-content">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>

            <strong>{{activeIndex}}</strong>
            <span>/ 02</span>
          </div>
          <TitleGroup
            mainTitle="最新资源下载"
            subtitle="DOWNLOAD THE LATEST RESOURCES"
          />
        </header>
        <section class="swiper">
          <swiper
            ref="mySwiper"
            :options="swiperOptions"
          >
            <swiper-slide>
              <el-row :gutter="36">
                <el-col :span="12">
                  <div
                    class="card"
                    title="CLXOne DDI 概要"
                  >
                    <h3 title="CLXOne DDI 概要">CLXOne DDI 概要</h3>
                    <p title="CLXOne DDI 概要">连星 CLXOne™ DDI 构建了国内第一个可扩展企业级云平台，该平台通过云管 理的服务和应用程序形式提供DDI和安全功能等</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div
                    class="card"
                    title="CLXOne DNS"
                  >
                    <h3 title="CLXOne DNS">CLXOne DNS</h3>
                    <p title="CLXOne DNS">高效管理的DNS服务，驱动您的数字业务</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div
                    class="card"
                    title="CLXOne IPAM"
                  >
                    <h3 title="CLXOne IPAM">CLXOne IPAM</h3>
                    <p title="CLXOne IPAM">CLXOne™ DHCP/IPAM 可以轻松应对最具挑战性的IPAM和DHCP要求</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div
                    class="card"
                    title="产品规格"
                  >
                    <h3 title="产品规格">产品规格</h3>
                    <p title="产品规格">连星 LT CLX 6100（S）、LT CLX 6100H产品规格</p>
                  </div>
                </el-col>
              </el-row>
            </swiper-slide>
            <swiper-slide>
              <el-row :gutter="36">
                <!-- <el-col :span="12">
                  <div
                    class="card"
                    title="监测平台页面截图"
                  >
                    <h3 title="监测平台页面截图">监测平台页面截图</h3>
                    <p title="监测平台页面截图">国家IPv6发展监测平台、海南IPv6发展监测平台、金融行业IPv6发展监测平台 、工业互联网网络监测平台部分页面截图</p>
                  </div>
                </el-col> -->
                <el-col :span="12">
                  <div
                    class="card"
                    title="CLXOne IPv6代际升迁解决方案"
                  >
                    <h3 title="CLXOne IPv6代际升迁解决方案">CLXOne IPv6代际升迁解决方案</h3>
                    <p title="CLXOne IPv6代际升迁解决方案">CLXOne™ IPv6代际升迁是一个IPv4向IPv6演进升迁各阶段管理的平台， 实现 以IPv6地址管理为权威源和业务流程</p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div
                    class="card"
                    title="CLXOne IPv6监测解决方案"
                  >
                    <h3 title="CLXOne IPv6监测解决方案">CLXOne IPv6监测解决方案</h3>
                    <p title="CLXOne IPv6监测解决方案">CLXOne™ IPv6发展监测平台，全面监测和深入分析互联网网络、应用、终端、 用户、流量等IPv6发展情况</p>
                  </div>
                </el-col>
                <!-- <el-col :span="12">
                  <div class="card">
                    <h3>产品规格</h3>
                    <p>这是一句简单的表述，这是一句简单的表述，这是一句简单的表述，这是一句 简单的表述，这是一句简单的表述</p>
                  </div>
                </el-col> -->
              </el-row>
            </swiper-slide>
          </swiper>
        </section>
      </div>
    </section>

    <section class="tool">
      <TitleGroup
        mainTitle="相关工具"
        subtitle="RELATED TOOLS"
      />
      <ul>
        <li>
          <a
            href="https://6map.infoblox.com/"
            target="_blank"
          >IPv6地址规划工具</a>
        </li>
        <li>
          <a
            href="http://dns.measurement-factory.com/tools/index.html"
            target="_blank"
          >DNS工具</a>
        </li>
        <!-- <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称工具名称这是一个</a>
        </li>
        <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称</a>
        </li>
        <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称</a>
        </li>
        <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称</a>
        </li>
        <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称</a>
        </li>
        <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称</a>
        </li>
        <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称</a>
        </li>
        <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称</a>
        </li>
        <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称</a>
        </li>
        <li>
          <a href="javascript:;">这是一个工具名称，这是一个工具名称这是一个工具名称</a>
        </li> -->
      </ul>
    </section>
  </div>
</template>

<script>
import BigPicture from "~/components/BigPicture";
import TitleGroup from "~/components/TitleGroup";
import axios from "~/plugins/axios";
import {
  name,
  email,
  phone,
  company,
  city,
  industry,
  job,
  product,
  budget,
  describe
} from "~/utils/validate";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    BigPicture,
    TitleGroup,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {},
  data() {
    const self = this;
    return {
      activeIndex: "01",
      isAccept: false,
      isAgree: false,
      form: {},
      rules: {
        cname: name,
        // email,
        phone,
        company,
        // city,
        // industry,
        // job,
        // product,
        // budget,
        // describe
      },
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          click: function (data) {
            const { title } = data.target
            self.$router.push({ path: '/support/download', query: { title } })
          },
          slideChangeTransitionEnd: function (data) {
            if (this.activeIndex === 0) {
              self.activeIndex = "01"
            } else {
              self.activeIndex = "02"
            }
          }
        },
      }
    };
  },
  computed: {},
  created() {
    console.log(this.$route.hash === "#download")
    if (this.$route.hash === "#download") {
      if (process.browser) {
        let support = document.getElementById('support');
        console.log(support.scrollHeight)
        support.scrollTop = support.scrollHeight + "px";
        window.onscroll = function (e) {
        }
      }
    }
  },
  mounted() { },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/apis/customer", this.form)
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("提交成功");
              } else {
                this.$message.error("提交失败，请电话联系");
              }
            })
            .catch(() => {
              this.$message.error("提交失败，请电话联系");
            });
        } else {
          return false;
        }
      });
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.apply-support {
  width: 1200px;
  margin: 0 auto;
  padding: 110px 0 100px;
  &::after {
    content: "";
    display: block;
    height: 2px;
    background-image: linear-gradient(
      to right,
      #ccc 0%,
      #ccc 50%,
      transparent 50%
    );
    background-size: 8px 1px;
    background-repeat: repeat-x;
  }
  .tips {
    padding-top: 20px;
    margin-bottom: 36px;
    border-bottom: 1px dashed #ddd;
    p {
      font-size: 14px;
      color: #808080;
      padding: 30px 0;
      line-height: 31px;
      margin-right: 440px;
    }
    img {
      float: right;
    }
  }
  .check-confirm {
    font-size: 14px;
    color: #333;
    p {
      font-size: 14px;
      color: #808080;
      & + p {
        margin-top: 10px;
      }
    }
    .tips-checkbox {
      margin-right: 20px;
    }
    a {
      color: #ee3434;
    }
  }
}

.newlast-resource-download {
  height: 734px;
  background: center center no-repeat
    url("../../assets/images/bg-support-dwonload.png");
  background-size: cover;
  padding: 120px 0;

  .wrapper {
    width: 1200px;
    margin: 0 auto;
  }
  header {
    position: relative;
    .page {
      position: absolute;
      right: 0;
      width: 300px;
      border-bottom: 4px solid #aaa;
      .pag-btn-content {
        position: absolute;
        right: 0;
        font-size: 16px;
        top: 20px;
        width: 80px;
        height: 30px;
        .swiper-button-next {
          right: 0;
        }
        .swiper-button-prev {
          left: 0;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
          color: #2c343a;
        }
      }
      strong {
        font-size: 48px;
        color: #333;
      }
      span {
        font-size: 20px;
        color: #808080;
      }
      &::before {
        position: absolute;
        bottom: -4px;
        content: "";
        display: block;
        height: 4px;
        width: 60px;
        background: #ee3434;
      }
    }
  }

  .swiper {
    height: 400px;
    margin-top: 20px;
    > * {
      height: 100%;
    }
    .card {
      height: 160px;
      padding: 30px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 4px;
      margin-top: 36px;
      transition: all 0.8s;
      cursor: pointer;

      &:hover {
        background: #fff;
        h3,
        p {
          color: #ee3434;
        }
      }
      h3 {
        font-size: 18px;
        color: #333;
        margin-bottom: 20px;
      }
      p {
        font-size: 14px;
        line-height: 30px;
        color: #808080;
      }
    }
  }
}

.tool {
  width: 1200px;
  margin: 0 auto;
  padding: 120px 0 100px;
  ul {
    overflow: hidden;
    padding-top: 50px;

    li {
      float: left;
      width: 580px;
      padding-right: 30px;
      font-size: 14px;
      color: #333;
      margin-bottom: 26px;
      &:hover {
        color: #ee3434;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>