<template>
  <div class="download">
    <div class="modal">
      <header>
        <h1>白皮书下载</h1>
        <p>填写下面的表格可立即下载此白皮书</p>
      </header>
      <section class="my-form">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="form.email" placeholder="请输入您的邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input v-model="form.phone" placeholder="请输入您的电话号码"></el-input>
          </el-form-item>
          <el-form-item prop="company">
            <el-input v-model="form.company" placeholder="请输入您的公司名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="handleSubmit('form')">提交</el-button>
          </el-form-item>
        </el-form>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  components: {},
  props: {},
  data() {
    return {
      form: {},
      rules: {
        name: [
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
        phone: [
          { required: true, message: "请填写手机号码" },
          {
            pattern: /^1\d{10}$/,
            message: "目前只支持中国大陆的手机号码"
          }
        ],
        company: [
          { required: true, message: "请填写公司名称" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符" }
        ]
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/apis/whitebook", this.form)
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("留言成功");
                console.log("download 操作");
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
.download {
  height: 988px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/images/bg-dowload.png");
}

.modal {
  position: absolute;
  top: 210px;
  left: 50%;
  width: 550px;
  background: #fff;
  border-radius: 8px;

  header {
    padding: 36px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    h1 {
      font-size: 24px;
      color: #333;
      margin-bottom: 12px;
    }
    p {
      font-size: 14px;
      color: #808080;
    }
  }
  section {
    padding: 45px 65px;
  }
}
</style>