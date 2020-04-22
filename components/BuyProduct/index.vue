<template>
  <el-dialog
    :lock-scroll="false"
    class="buy-product"
    title="项目咨询"
    :visible="buyDialog"
    :close-on-click-modal="false"
    @close="handleClickModal"
    width="920"
    center
  >
    <span class="litter-title">请填写以下表单，我们的销售代表会尽快与您联系，带*的为必填项</span>

    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      class="form-product my-form"
    >
      <el-row :gutter="36">
        <el-col :span="12">
          <el-form-item prop="cname">
            <el-input
              v-model="form.cname"
              placeholder="请输入您的姓名*"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="email">
            <el-input
              v-model="form.email"
              placeholder="请输入您的邮箱"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="phone">
            <el-input
              v-model="form.phone"
              placeholder="请输入您的联系电话*"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="city">
            <el-input
              v-model="form.city"
              placeholder="请输入您所在的城市"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="company">
            <el-input
              v-model="form.company"
              placeholder="请输入您的公司名称*"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
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
              :autosize="{ minRows: 4, maxRows: 4}"
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
  </el-dialog>
</template>

<script>
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
import axios from "~/plugins/axios";
import { mapState, mapMutations } from 'vuex'

export default {
  components: {},
  props: {},
  data() {
    return {
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
    };
  },
  computed: {
    ...mapState({
      buyDialog: state => {
        return state.buyDialog
      }
    }),
  },
  mounted() { },
  methods: {
    ...mapMutations([
      'closeBuyDialog'
    ]),
    handleClickModal() {
      this.closeBuyDialog()
    },
    handleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/apis/customer", this.form)
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("提交成功");
                this.closeBuyDialog()
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
  watch: {},
};
</script>

<style lang="less" >
.buy-product {
  position: relative;
  .el-dialog__title {
    font-weight: bold;
  }
  .litter-title {
    position: absolute;
    width: 100%;
    left: 0;
    top: 40px;
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid #e6e6e6;
    color: #808080;
    font-size: 14px;
  }

  .form-product {
    padding-top: 60px;
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
</style>