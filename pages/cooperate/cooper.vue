<template>
  <div class="coopauth">
    <BigPicture :url="require('~/assets/images/bg-auth.png')" />
    <div class="auth">
      <aside class="aside">
        <header>
          <h1>合作代理</h1>
          <p>Cooperation</p>
          <span></span>
        </header>
        <a href="/cooperate/auth">渠道合作伙伴认证</a>
        <a
          href="javascript:;"
          class="active"
        >专业化认证</a>
      </aside>
      <div class="content">
        <header>
          <h1>专业化认证</h1>
          <p>请填写以下表单并上传相关资料，我们的工作人员会尽快与您联系；带*的为必填项</p>
        </header>
        <section>
          <el-form
            ref="form"
            :model="form"
            :rules="rules"
            class="form-body my-form"
          >
            <div class="group">
              <h3>公司基本情况</h3>
              <el-row :gutter="36">

                <el-col :span="12">
                  <el-form-item prop="company">
                    <el-input
                      v-model="form.company"
                      placeholder="公司名称*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="address">
                    <el-input
                      v-model="form.address"
                      placeholder="公司注册地址*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="registeredCapital">
                    <el-input
                      v-model="form.registeredCapital"
                      placeholder="注册资金*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="establishTime">
                    <el-input
                      v-model="form.establishTime"
                      placeholder="成立时间*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="unifiedSocialCreditCode">
                    <el-input
                      v-model="form.unifiedSocialCreditCode"
                      placeholder="统一社会信用代码*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="officeAddress">
                    <el-input
                      v-model="form.officeAddress"
                      placeholder="办公地址*"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="group">
              <h3>公司基本联络信息</h3>
              <el-row :gutter="36">

                <el-col :span="12">
                  <el-form-item prop="legalRepresentative">
                    <el-input
                      v-model="form.legalRepresentative"
                      placeholder="公司法人代表姓名*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="contacts">
                    <el-input
                      v-model="form.contacts"
                      placeholder="日常联系人姓名*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="phone">
                    <el-input
                      v-model="form.phone"
                      placeholder="公司法人代表手机号*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="contactPhone">
                    <el-input
                      v-model="form.contactPhone"
                      placeholder="日常联系人手机号*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="email">
                    <el-input
                      v-model="form.email"
                      placeholder="公司法人代表邮箱*"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="contactEmail">
                    <el-input
                      v-model="form.contactEmail"
                      placeholder="日常联系人邮箱*"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>

            <div class="group">
              <h3>上传提交资质文件</h3>
              <el-row :gutter="36">

                <el-col :span="6">
                  <el-form-item prop="IDFrontPicture">
                    <el-upload
                      class="avatar-uploader"
                      action="/apis/common/upload"
                      :show-file-list="false"
                      :on-success="handleIDFrontPictureSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img
                        v-if="imageUrlIDFrontPicture"
                        :src="imageUrlIDFrontPicture"
                        class="avatar"
                      />
                      <i
                        v-else
                        class="el-icon-plus avatar-uploader-icon"
                      ></i>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="IDBackPicture">
                    <el-upload
                      class="avatar-uploader"
                      action="/apis/common/upload"
                      :show-file-list="false"
                      :on-success="handleIDBackPictureSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img
                        v-if="imageUrlIDBackPicture"
                        :src="imageUrlIDBackPicture"
                        class="avatar"
                      />
                      <i
                        v-else
                        class="el-icon-plus avatar-uploader-icon"
                      ></i>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="licensePicture">
                    <el-upload
                      class="avatar-uploader"
                      action="/apis/common/upload"
                      :show-file-list="false"
                      :on-success="handleLicensePictureSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img
                        v-if="imageUrllicensePicture"
                        :src="imageUrllicensePicture"
                        class="avatar"
                      />
                      <i
                        v-else
                        class="el-icon-plus avatar-uploader-icon"
                      ></i>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <p>*包括上传营业执照、法人身份证复印件（正反面），复印件需加盖公章，最大不能超过10M</p>
                </el-col>
              </el-row>
            </div>
            <el-form-item>
              <el-button
                type="danger"
                @click="handleSubmit('form')"
              >提交</el-button>
            </el-form-item>
          </el-form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import BigPicture from "~/components/BigPicture";
import axios from "~/plugins/axios";

export default {
  components: {
    BigPicture
  },
  props: {},
  data() {
    return {
      form: {
        IDFrontPicture: "",
        IDBackPicture: "",
        licensePicture: ""
      },
      rules: {
        company: [
          { required: true, message: "请输入公司名" },
          { min: 2, max: 20, message: "长度在 3 到 20 个字符" }
        ],
        address: [{ required: true, message: "请输入公司地址" }],
        registeredCapital: [{ required: true, message: "请输入注册资金" }], // 注册资金
        establishTime: [{ required: true, message: "请输入成立时间" }], // 成立时间
        unifiedSocialCreditCode: [
          { required: true, message: "请输入统一社会信用代码" }
        ], // 统一社会信用代码
        officeAddress: [{ required: true, message: "请输入办公地址" }], // 办公地址
        legalRepresentative: [{ required: true, message: "请输入法人代表" }], // 法人代表
        contacts: [{ required: true, message: "请输入联系人" }], // 联系人
        phone: [{ required: true, message: "请输入手机号" }],
        contactPhone: [{ required: true, message: "请输入联系人手机号" }],
        email: [{ required: true, message: "请输入邮箱" }],
        contactEmail: [{ required: true, message: "请输入联系人邮箱" }],
        IDFrontPicture: [
          { required: true, message: "请上传身份证正面", trigger: "change" }
        ],
        IDBackPicture: [
          { required: true, message: "请上传身份证背面", trigger: "change" }
        ],
        licensePicture: [
          { required: true, message: "请上传执照图片", trigger: "change" }
        ] // 执照图片
      },
      imageUrlIDFrontPicture: "",
      imageUrlIDBackPicture: "",
      imageUrllicensePicture: ""
    };
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {
    beforeAvatarUpload() { },
    handleIDFrontPictureSuccess(res, file) {
      this.imageUrlIDFrontPicture = URL.createObjectURL(file.raw);
      this.form.IDFrontPicture = res.data.fullpath;
      this.$refs.form.validateField("IDFrontPicture");
    },
    handleIDBackPictureSuccess(res, file) {
      this.imageUrlIDBackPicture = URL.createObjectURL(file.raw);
      this.form.IDBackPicture = res.data.fullpath;
      this.$refs.form.validateField("IDBackPicture");
    },
    handleLicensePictureSuccess(res, file) {
      this.imageUrllicensePicture = URL.createObjectURL(file.raw);
      this.form.licensePicture = res.data.fullpath;
      this.$refs.form.validateField("licensePicture");
    },
    handleSubmit(formName) {
      console.log(this.form);
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/apis/cooperate", this.form)
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("留言成功");
                this.form = {};
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
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.auth {
  width: 1200px;
  margin: 0 auto;
}
.aside {
  float: left;
  width: 200px;
  height: 436px;
  box-shadow: 0px 30px 43px 0px rgba(158, 158, 158, 0.1);
  border-radius: 4px;
  background: #fff;
  margin-top: -120px;
  padding: 70px 40px 60px;

  h1 {
    font-size: 30px;
    color: #333;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    color: #808080;
    margin-bottom: 20px;
  }
  span {
    display: block;
    width: 40px;
    height: 6px;
    background: #ee3434;
    margin-bottom: 60px;
  }

  a {
    display: block;
    width: 201px;
    height: 68px;
    line-height: 68px;
    text-decoration: none;
    font-size: 16px;
    color: #333;
    padding: 0 20px;
    margin-bottom: 20px;

    &.active {
      color: #fff;

      background: linear-gradient(
        -39deg,
        rgba(238, 52, 52, 1),
        rgba(255, 142, 142, 1)
      );
      box-shadow: 8px 10px 27px 0px rgba(180, 72, 72, 0.17);
      border-radius: 4px;
    }
  }
}
.content {
  margin-left: 300px;
  padding: 100px 0 150px;
  h1 {
    font-size: 48px;
    color: #333;
    margin-bottom: 32px;
  }
  p {
    font-size: 14px;
    color: #808080;
    margin-bottom: 80px;
  }
  .group {
    margin-bottom: 20px;
  }
  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 30px;
  }
}
</style>

<style lang="less">
.avatar-uploader {
  .el-upload {
    border: 1px dashed #ddd;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 148px;
    line-height: 148px;
  }

  .el-upload:hover {
    border-color: #409eff;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 148px;
  line-height: 148px;
  text-align: center;
}
.coopauth {
  .el-input__inner {
    border: none;
  }
}
</style>