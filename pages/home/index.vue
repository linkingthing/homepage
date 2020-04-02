<template>
    <div class="home-page">
        <Banner class="home-page-banner" />

        <div class="home-page-dynamic">
            <div class="dynamic-header">
                <TitleGroup main-title="连星最新动态" subtitle="LATEST NEWS" />
                <button class="dynamic-header-button">查看全部<i class="el-icon-right" /></button>
            </div>

            <div class="dynamic-content">
                <div class="dynamic-main-img">
                    <img :src="dynamicImg1">
                    <div class="dynamic-content-text">
                        CLXOne™ DDI 国内第一个可扩展企业级云平台
                        <div class="dynamic-content-text-sub">通过云管理的服务和应用程序提供DDI和安全功能等基础服务</div>
                    </div>
                </div>
                <div>
                    <div class="dynamic-sub-img">
                        <img :src="dynamicImg2">
                        <div class="dynamic-content-text">
                            全面监测和深入分析，掌控IPv6发展状况
                        </div>
                    </div>
                    <div class="dynamic-sub-img">
                        <img :src="dynamicImg3">
                        <div class="dynamic-content-text">
                            协同推进IPv6代际升迁
                        </div>
                    </div>
                </div>
            </div>

            <div class="dynamic-news">
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
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "./components/banner";
import TitleGroup from "~/components/TitleGroup";

import arrowRightSrc from "~/assets/images/home-page-news-arrow.png";
import dynamicImg1 from "~/assets/images/home-page-dynamic-1.png";
import dynamicImg2 from "~/assets/images/home-page-dynamic-2.png";
import dynamicImg3 from "~/assets/images/home-page-dynamic-3.png";
import newSrc from "~/assets/images/home-page-news.png";

export default {
    components:{
        Banner,
        TitleGroup
    },

    data(){
        return {
            dynamicImg1,
            dynamicImg2,
            dynamicImg3,
            arrowRightSrc,
            newsList:[
                {
                    src:newSrc,
                    title:"这是一个新闻标题最多20字",
                    content:"了司法局来看第三节课了范德萨李逵负荆额外废旧塑料开发，解放了康定斯基分类范德萨尽力考发动机索拉卡",
                    date:"04-01",
                    year:"2020"
                },
                {
                    src:newSrc,
                    title:"这是一个新闻标题最多20字",
                    content:"了司法局来看第三节课了范德萨李逵负荆额外废旧塑料开发，解放了康定斯基分类范德萨尽力考发动机索拉卡",
                    date:"04-01",
                    year:"2020"
                },
                {
                    src:newSrc,
                    title:"这是一个新闻标题最多20字",
                    content:"了司法局来看第三节课了范德萨李逵负荆额外废旧塑料开发，解放了康定斯基分类范德萨尽力考发动机索拉卡",
                    date:"04-01",
                    year:"2020"
                },
            ]
        }
    }
}
</script>

<style lang="less">
@import "./index.less";
</style>