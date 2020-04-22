<template>
  <div class="footer">
    <div class="footer-top">
      <section class="footer-item">
        <div class="footer-item-title">
          关注我们
          <label>FOLLOW US</label>
        </div>

        <div class="title-line" />

        <div class="item-content">
          <img :src="qrcode" />
          <div>
            <p>扫一扫</p>
            <p>关注我们最新消息</p>
          </div>
        </div>
      </section>

      <section class="footer-item">
        <div class="footer-item-title">
          联系我们
          <label>CONCACT US</label>
        </div>

        <div class="title-line" />

        <div class="item-content">
          <p>服务热线：<span class="hot-line">010-88708872</span></p>
          <p>公司邮箱：web@linkingthing.com</p>
          <p>公司地址：北京市石景山区古城金融街长安中心城通街26号院4号楼1305</p>
          <p>成都市高新区天府三街大源国际中心B2栋1404</p>
        </div>
      </section>

      <section class="footer-item">
        <div class="footer-item-title">
          网站导航
          <label>WEBSITE NAVIGATION</label>
        </div>

        <div class="title-line" />

        <div class="item-content">
          <div class="website-nav">
            <label>
              <nuxt-link to="/home" class="link">首页</nuxt-link>
            </label>
            <label><nuxt-link to="/clxone-ddi" class="link">产品介绍</nuxt-link></label>
            <label><nuxt-link to="/cooperate" class="link">合作代理</nuxt-link></label>
            <label><nuxt-link to="/news" class="link">新闻中心</nuxt-link></label>
            <label><nuxt-link to="/support" class="link">支持中心</nuxt-link></label>
            <label><nuxt-link to="/about" class="link">关于我们</nuxt-link></label>
          </div>

          <div class="website-nav-fun">
            <img :src="search" />
            <img :src="question" />
          </div>
        </div>
      </section>
    </div>

    <div class="footer-bottom">
      <div class="footer-section">
        <label>版权所有：北京连星科技有限公司</label>
        <label>京ICP路1274848857938号</label>
        <label>Powered by LinkingThing</label>
      </div>
    </div>
  </div>
</template>

<script>
import qrcode from "~/assets/images/qrcode.jpg";
import search from "~/assets/images/search.png";
import question from "~/assets/images/question.png";

export default {
  data() {
    return {
      qrcode,
      search,
      question
    }
  },
  watch: {
    "$route" () {
      this.$router.go(0);
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>