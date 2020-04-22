<template>
  <section class="news-list">
    <ul>
      <li>
        <router-link to="/news/info-2020-ipv6">
          <div class="news-item">
            <div
              class="news-pic"
              :style="`background-image: url(${require('~/assets/images/home-page-dynamic-1.png')})`"
            ></div>
            <div class="news-txt">
              <h3>工业和信息化部关于开展 2020 年 IPv6 端到端贯通能力提升专项行动的通知</h3>
              <p>为贯彻落实《推进互联网协议第六版(IPv6)规模部署行动计划》（厅字〔2017〕47 号） 任务要求，加快提升 IPv6 端到端贯通能力，持续提升 IPv6 活跃用户和网络流量规模，我部 决定于 2020 年开展 IPv6 端到端贯通能力提升专项行动。有关事项通知如下：</p>
            </div>
            <div class="news-foot">
              <time>
                <em>03-19</em>
                <span>/ 2020</span>
              </time>
              <img src="~/assets/images/home-page-news-arrow.png" />

            </div>
          </div>
        </router-link>
      </li>

      <li>
        <router-link to="/news/info-ipv6-Internet-of-things">
          <div class="news-item">
            <div
              class="news-pic"
              :style="`background-image: url(${require('~/assets/images/home-page-dynamic-2.png')})`"
            ></div>
            <div class="news-txt">
              <h3>IPv6能为物联网带来什么？</h3>
              <p>随着互联网时代的到来，人们的工作、生活等习惯发生了翻天覆地的变化，而人们享受着互联网带来的便利性。</p>
            </div>
            <div class="news-foot">
              <time>
                <em>03-16</em>
                <span>/ 2020</span>
              </time>
              <img src="~/assets/images/home-page-news-arrow.png" />

            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/news/info-ipv6-access">
          <div class="news-item">
            <div
              class="news-pic"
              :style="`background-image: url(${require('~/assets/images/home-page-dynamic-3.png')})`"
            ></div>
            <div class="news-txt">
              <h3>工信部将优化提升IPv6网络接入能力</h3>
              <p>新华社北京3月23日电（记者张辛欣）记者23日从工信部获悉，工信部已经发文部署开展2020年IPv6端到端贯通能力提升专项行动，特别提出要优化提升IPv6网络接入能力，全面扩大数据中心IPv6覆盖范围，到2020年底IPv6活跃连接数达到11</p>
            </div>
            <div class="news-foot">
              <time>
                <em>03-23</em>
                <span>/ 2020</span>
              </time>
              <img src="~/assets/images/home-page-news-arrow.png" />
            </div>
          </div>
        </router-link>
      </li>

    </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.news-list {
  padding-top: 60px;
  width: 1200px;
  ul,
  li {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.news-item {
  width: 380px;

  &:hover {
    .news-txt {
      border-color: #ee3434;
    }
    h3,
    p,
    .news-foot {
      color: #ee3434 !important;
      img {
        display: block;
      }
    }
  }
  .news-pic {
    background: center center no-repeat;
    background-size: cover;
    height: 250px;
    border-radius: 4px;
    transition: all 1.2s;
    &:hover {
      background-position: center right;
    }
  }
  .news-txt {
    padding: 25px 0;
    border-bottom: 1px solid #f0eded;
    transition: all 0.6s;

    h3 {
      font-size: 18px;
      color: #333;
      margin-bottom: 16px;
      transition: all 0.6s;
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      height: 48px;
      color: #808080;
      transition: all 0.6s;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
    }
  }
  .news-foot {
    padding: 26px 0;
    color: #808080;
    transition: all 0.6s;

    em {
      font-size: 20px;
      font-style: normal;
    }
    span {
      font-size: 12px;
    }

    img {
      display: none;
      float: right;
      margin-top: 7px;
    }
  }
}
.page {
  float: right;
}
</style>
