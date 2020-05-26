<template>
  <div class="download">
    <div class="wrapper">

      <div class="bread">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/support' }">支持中心</el-breadcrumb-item>
          <el-breadcrumb-item>下载中心</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <h1 class="title">{{title}}</h1>

    </div>
    <div class="modal">
      <header>
        <h1>白皮书下载</h1>
        <p>填写下面的表格可立即下载此白皮书</p>
      </header>
      <section class="my-form">
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
        >
          <el-form-item prop="name">
            <el-input
              v-model="form.name"
              placeholder="请输入您的姓名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input
              v-model="form.email"
              placeholder="请输入您的邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input
              v-model="form.phone"
              placeholder="请输入您的电话号码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="company">
            <el-input
              v-model="form.company"
              placeholder="请输入您的公司名称"
            ></el-input>
          </el-form-item>
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
</template>

<script>
import axios from "~/plugins/axios";
import { name, email, phone, company } from "~/utils/validate";
export default {
  components: {},
  props: {},
  data() {
    return {
      title: "",
      form: {},
      rules: {
        name,
        email,
        phone,
        company
      }
    };
  },
  computed: {},
  created() {
    console.log(this.$route)
    const { title } = this.$route.query
    this.title = title
  },
  mounted() { },
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

<style lang="less">
.download {
  position: relative;
  height: 988px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../assets/images/bg-dowload.png");
  .bread {
    padding: 20px;
    color: #fff;
    margin-bottom: 80px;

    .el-breadcrumb__inner {
      color: #ccc;
      &:hover {
        color: #fff;
      }
    }
  }
  .title {
    color: #fff;
    font-size: 40px;
    line-height: 60px;
    width: 520px;
  }
}

.wrapper {
  width: 1200px;
  margin: 0 auto;
}

.modal {
  position: absolute;
  top: 100px;
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