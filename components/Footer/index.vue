<template>
    <div class="footer">
        <div class="footer-top">
            <div class="footer-section">
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
                        <p>服务热线：<span class="hot-line">400-666-789</span></p>
                        <p>公司传真：028-38578393</p>
                        <p>公司邮箱：2858839jjd@163.com</p>
                        <p>公司地址：成都市高新区天府三街大源国际中心B2栋1404</p>
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
                            <label>首页</label>
                            <label>产品简介</label>
                            <label>合作与代理</label>
                            <label>新闻中心</label>
                            <label>下载中心</label>
                            <label>关于我们</label>
                        </div>

                        <div class="website-nav-fun">
                            <img :src="search" />
                            <img :src="question" />
                        </div>
                    </div>
                </section>
            </div>
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
import qrcode from "~/assets/images/qrcode.png";
import search from "~/assets/images/search.png";
import question from "~/assets/images/question.png";

export default {
    data(){
        return {
            qrcode,
            search,
            question
        }
    }
}
</script>

<style lang="less">
@import "./index.less";
</style>