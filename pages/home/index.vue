<template>
  <div class="home-page">
    <el-carousel
      class="home-page-banner"
      height="558px"
      :interval="5000"
      indicator-position="none"
      arrow="never"
    >
      <el-carousel-item>
        <div class="banner-item-1 banner-item">
          <div class="banner-item-content">
            <div class="main-title">
              <div>CLXOne™ DDI</div>
              <div>驱动下一代信息技术代际升迁</div>
            </div>

            <div class="sub-title">
              一致的集中式用户界面 · 灵活的元数据标记 · 自定义报告和警报 ·灵活的 API...
            </div>

            <button class="button--red" @click="$router.push({path: '/clxone-ddi'})">了解详情</button>

            <!-- <div class="banner-pager">
              <span>01</span>
              /01
            </div> -->
          </div>
        </div>
      </el-carousel-item>

      <!-- <el-carousel-item>
        <div class="banner-item-2 banner-item">
          <div class="banner-item-content">
            <div class="banner-pager">
              <span>02</span>
              /02
            </div>
          </div>
        </div>
      </el-carousel-item> -->
    </el-carousel>

    <div class="home-page-dynamic">
      <div class="dynamic-section">
        <div class="dynamic-header">
          <TitleGroup
            main-title="连星最新动态"
            subtitle="LATEST NEWS"
          />
          <nuxt-link class="dynamic-header-button" to="/news">查看全部<i class="el-icon-right" /></nuxt-link>
        </div>

        <div class="dynamic-content">
          <div class="dynamic-main-img dynamic-hover">
            <nuxt-link to="/clxone-ddi">
              <img :src="dynamicImg1">
              <div class="dynamic-content-text">
                CLXOne™ DDI 国内第一个可扩展企业级云平台
                <div class="dynamic-content-text-sub">通过云管理的服务和应用程序提供DDI和安全功能等基础服务</div>
              </div>
            </nuxt-link>

          </div>
          <div>
            <div class="dynamic-sub-img dynamic-hover">

              <nuxt-link to="/monitor-platform">

                <img :src="dynamicImg2">
                <div class="dynamic-content-text">
                  全面监测和深入分析，掌控IPv6发展状况
                  <div class="dynamic-content-text-sub">全面监测和深入分析，掌控IPv6发展状况</div>
                </div>
              </nuxt-link>
            </div>
            <div class="dynamic-sub-img dynamic-hover">
              <nuxt-link to="/promotion-manage">
                <img :src="dynamicImg3">
                <div class="dynamic-content-text">
                  协同推进IPv6代际升迁
                  <div class="dynamic-content-text-sub">智能管理，实现前所未有的可见性</div>
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

        <NewList style="margin-bottom: 40px;padding-top: 0" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleGroup from "~/components/TitleGroup";

import arrowRightSrc from "~/assets/images/home-page-news-arrow.png";
import dynamicImg1 from "~/assets/images/home-page-dynamic-1.png";
import dynamicImg2 from "~/assets/images/home-page-dynamic-2.png";
import dynamicImg3 from "~/assets/images/home-page-dynamic-3.png";
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
      dynamicImg2,
      dynamicImg3,
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