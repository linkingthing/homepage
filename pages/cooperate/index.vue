<template>
  <div class="cooperate">
    <BigPicture :url="require('~/assets/images/cooperate.png')">
      <div class="title">
        <h1>寻找合作伙伴</h1>
        <p>我们的合作伙伴将与您合作，帮助您集成、构建和购买所需的解决方案、 软件和服务，并为您提供咨询建议</p>
      </div>
    </BigPicture>

    <div class="wrapper">
      <TitleGroup mainTitle="连星合作伙伴计划" subtitle="PARTNERS PROGRAM" />
      <p>连星合作伙伴计划可以给您提供相应的解决方案、培训、工具和支持，让您和您的客户在竞争中脱颖而出</p>
      <ul class="auth-list">
        <li>
          <img src="../../assets/images/channel.png" alt />
          <div class="auth-item">
            <h3>渠道合作伙伴认证</h3>
            <a href="/cooperate/auth">我要去认证</a>
          </div>
        </li>

        <li>
          <img src="../../assets/images/profession.png" alt />
          <div class="auth-item">
            <h3>专业化认证</h3>
            <a href="/cooperate/cooper">我要去认证</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BigPicture from "~/components/BigPicture";
import TitleGroup from "~/components/TitleGroup";

export default {
  components: {
    BigPicture,
    TitleGroup
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style lang="less" scoped>
.cooperate {
  .title {
    width: 1200px;
    margin: 0 auto;
    color: #fff;
    padding-top: 100px;
    h1 {
      font-size: 60px;
      margin-bottom: 60px;
    }
    p {
      width: 600px;
      font-size: 18px;
      line-height: 48px;
    }
  }

  .wrapper {
    width: 1200px;
    margin: 0 auto;
    padding: 120px 0;
    p {
      font-size: 14px;
      color: #808080;
      padding: 60px 0;
    }
    .auth-list {
      padding: 0;
      display: flex;
      li {
        list-style: none;
        & + li {
          border-left: 1px solid #ddd;
          padding-left: 120px;
        }
      }
      img {
        float: left;
        height: 150px;
      }
      .auth-item {
        margin-left: 190px;
        width: 330px;
        padding-top: 32px;
        h3 {
          font-size: 20px;
          color: #333;
          margin-bottom: 16px;
        }
        a {
          position: relative;
          font-size: 14px;
          display: inline-block;
          height: 36px;
          line-height: 36px;
          width: 112px;
          border-radius: 4px;
          color: #fff;
          background: linear-gradient(
            -39deg,
            rgba(238, 52, 52, 1),
            rgba(255, 142, 142, 1)
          );
          text-align: center;
          text-decoration: none;
          &:before {
            content: "";
            position: absolute;
            width: 10px;
            height: 100%;
            top: 0;
            left: -20px;
            overflow: hidden;
            background-image: linear-gradient(
              to right top,
              transparent,
              transparent,
              rgba(255, 255, 255, 0.6),
              transparent,
              transparent
            );
          }
          &:hover:before {
            left: 150%;
            transition: left 1s ease 0s;
          }
        }
      }
    }
  }
}
</style>