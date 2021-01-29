<template>
  <div class="home-page">
    <img
      style="display: none"
      src="~/static/baidu-show.jpg"
      alt=""
    >
    <el-carousel
      class="home-page-banner"
      height="450px"
      :interval="3000"
      trigger="click"
    >
      <el-carousel-item>
        <div class="banner-item-1 banner-item">
          <div class="banner-item-content">
            <div class="main-title">
              <div>CLXOne®</div>
              <div>IPv6检测云服务</div>
              <div>助力企业快速升级到IPv6基础架构</div>
            </div>
            <!-- 
            <div class="sub-title">
              贴合现状的实践向导、自顶向下的分解目标、平滑迭代的演进路线、繁杂有序的过程追踪、上下统一的技术标准、持续优化的升级保障...
            </div> -->

            <button
              class="button--red"
              @click="$router.push({path: '/product/detect-cloud-services'})"
            >了解详情</button>

            <!-- <div class="banner-pager">
              <span>01</span>
              /01
            </div> -->
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <nuxt-link
          class="banner-item-2 banner-item"
          :style="`background-image:url(ipv6-talk.png)`"
          to="/news/Lianxing-technology-puts-forward-the-industry-leading-full-life-cycle-management-scheme-of-IPv6-smooth-evolution"
        >

          <div class="banner-item-content">

 

          </div>
        </nuxt-link>
      </el-carousel-item>
      <el-carousel-item>
        <div
          class=" banner-item"
          :style="`background-image:url(bg-home.png)`"
          to="/news/Lianxing-technology-puts-forward-the-industry-leading-full-life-cycle-management-scheme-of-IPv6-smooth-evolution"
        >

          <div class="banner-item-content">

            <div class="main-title">
              <div style="font-size: 24px">CLXOne® 数字基础设施平台</div>
              <div>轻松启动新一代信息技术网络</div>
            </div>

            <div class="sub-title">
              建立在云基础之上，以云为动力实现数据中心、云、网络和边缘IPv6代际升迁统一管理。
            </div>

            <button
              class="button--red"
              @click="$router.push({path: '/solution/clxone'})"
            >了解详情</button>

          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="home-page-dynamic">
      <div class="dynamic-section">
        <div class="dynamic-header">
          <TitleGroup
            main-title="连星最新动态"
            subtitle="LATEST NEWS"
          />
          <nuxt-link
            class="dynamic-header-button"
            to="/news"
          >查看全部<i class="el-icon-right" /></nuxt-link>
        </div>

        <div class="dynamic-content">
          <div class="dynamic-main-img dynamic-hover">
            <nuxt-link to="/product/data-asset-platform">
              <img :src="dynamicImg1">
              <div class="dynamic-content-text">
                CLXOne® 数据资产治理平台
                <div class="dynamic-content-text-sub">通过自动化和洞察力智能管理IP数据资产，实现数据资产治理</div>
              </div>
            </nuxt-link>

          </div>
          <div>
            <div class="dynamic-sub-img dynamic-hover">

              <nuxt-link to="/solution/sot">

                <img src="~/static/home-sot.jpg">
                <div class="dynamic-content-text">
                  <!-- 全面监测和深入分析，掌控IPv6部署和发展 -->
                  <!-- <div class="dynamic-content-text-sub">用实测运行数据支撑IPv6部署，掌握网络运行和发展状况</div> -->

                  IPAM真实源SoT（Source of Truth）
                  <div class="dynamic-content-text-sub">提供一种权威或声明性的方法来管理用于设备配置和管理清单的数据。</div>
                </div>
              </nuxt-link>
            </div>
            <div class="dynamic-sub-img dynamic-hover">
              <nuxt-link to="/product/monitor-platform">
                <img src="~/static/ipv6-monitor.jpg">
                <div class="dynamic-content-text">
                  IPv6发展监测平台
                  <div class="dynamic-content-text-sub">融合深度应用检测技术，实现对网站、APP应用的全方位发展监测。</div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>

        <!-- <div class="dynamic-news">
          <div
            class="dynamic-news-item"
            v-for="(item, idx) in newsList"
            :key="idx"
          >
            <img :src="item.src" />
            <div class="news-item-title">{{item.title}}</div>
            <div class="news-item-content">{{item.content}}</div>

            <div class="news-item-footer">
              <div class="news-item-date">
                <label>{{item.date}}</label>
                /{{item.year}}
              </div>

              <img :src="arrowRightSrc" />
            </div>
          </div>
        </div> -->

        <NewList
          style="margin-bottom: 20px;padding-top: 0"
          :count="3"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TitleGroup from "~/components/TitleGroup";

import arrowRightSrc from "~/assets/images/home-page-news-arrow.png";
import dynamicImg1 from "~/assets/images/home-page-dynamic-1.png";
import newSrc from "~/assets/images/home-page-news.png";

import NewList from "~/components/NewList"

export default {
  components: {
    TitleGroup,
    NewList
  },

  data() {
    return {
      dynamicImg1,
      arrowRightSrc,
      newsList: [
        {
          src: newSrc,
          title: "这是一个新闻标题最多20字",
          content: "了司法局来看第三节课了范德萨李逵负荆额外废旧塑料开发，解放了康定斯基分类范德萨尽力考发动机索拉卡",
          date: "04-01",
          year: "2020"
        },
        {
          src: newSrc,
          title: "这是一个新闻标题最多20字",
          content: "了司法局来看第三节课了范德萨李逵负荆额外废旧塑料开发，解放了康定斯基分类范德萨尽力考发动机索拉卡",
          date: "04-01",
          year: "2020"
        },
        {
          src: newSrc,
          title: "这是一个新闻标题最多20字",
          content: "了司法局来看第三节课了范德萨李逵负荆额外废旧塑料开发，解放了康定斯基分类范德萨尽力考发动机索拉卡",
          date: "04-01",
          year: "2020"
        },
      ]
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>