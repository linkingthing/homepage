<template>
  <div class="news">
    <BigPicture :url="require('~/assets/images/new-pic.png')" />
    <div class="content">
      <TitleGroup mainTitle="新闻中心" subtitle="NEWS" />

      <section class="news-list">
        <ul>
          <li>
            <router-link to="/news/info">
              <div class="news-item">
                <div
                  class="news-pic"
                  :style="`background-image: url(${require('~/assets/images/new-pic.png')})`"
                ></div>
                <div class="news-txt">
                  <h3>这是一个新闻标题最多20字</h3>
                  <p>这是新闻内容，提取新闻内容前50个字，最多显示两行超出省略，超出省略对减肥很深刻的</p>
                </div>
                <div class="news-foot">
                  <time>
                    <em>08-26</em>
                    <span>/ 2019</span>
                  </time>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <div class="news-item">
                <div
                  class="news-pic"
                  :style="`background-image: url(${require('~/assets/images/new-pic.png')})`"
                ></div>
                <div class="news-txt">
                  <h3>这是一个新闻标题最多20字</h3>
                  <p>这是新闻内容，提取新闻内容前50个字，最多显示两行超出省略，超出省略对减肥很深刻的</p>
                </div>
                <div class="news-foot">
                  <time>
                    <em>08-26</em>
                    <span>/ 2019</span>
                  </time>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <div class="news-item">
                <div
                  class="news-pic"
                  :style="`background-image: url(${require('~/assets/images/new-pic.png')})`"
                ></div>
                <div class="news-txt">
                  <h3>这是一个新闻标题最多20字</h3>
                  <p>这是新闻内容，提取新闻内容前50个字，最多显示两行超出省略，超出省略对减肥很深刻的</p>
                </div>
                <div class="news-foot">
                  <time>
                    <em>08-26</em>
                    <span>/ 2019</span>
                  </time>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <div class="news-item">
                <div
                  class="news-pic"
                  :style="`background-image: url(${require('~/assets/images/new-pic.png')})`"
                ></div>
                <div class="news-txt">
                  <h3>这是一个新闻标题最多20字</h3>
                  <p>这是新闻内容，提取新闻内容前50个字，最多显示两行超出省略，超出省略对减肥很深刻的</p>
                </div>
                <div class="news-foot">
                  <time>
                    <em>08-26</em>
                    <span>/ 2019</span>
                  </time>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <div class="news-item">
                <div
                  class="news-pic"
                  :style="`background-image: url(${require('~/assets/images/new-pic.png')})`"
                ></div>
                <div class="news-txt">
                  <h3>这是一个新闻标题最多20字</h3>
                  <p>这是新闻内容，提取新闻内容前50个字，最多显示两行超出省略，超出省略对减肥很深刻的</p>
                </div>
                <div class="news-foot">
                  <time>
                    <em>08-26</em>
                    <span>/ 2019</span>
                  </time>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <div class="news-item">
                <div
                  class="news-pic"
                  :style="`background-image: url(${require('~/assets/images/new-pic.png')})`"
                ></div>
                <div class="news-txt">
                  <h3>这是一个新闻标题最多20字</h3>
                  <p>这是新闻内容，提取新闻内容前50个字，最多显示两行超出省略，超出省略对减肥很深刻的</p>
                </div>
                <div class="news-foot">
                  <time>
                    <em>08-26</em>
                    <span>/ 2019</span>
                  </time>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <!-- <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination> -->
      </section>
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
.content {
  width: 1200px;
  margin: 0 auto;
  padding: 110px 0;
}

.news-list {
  padding-top: 60px;
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
  }
}
.page {
  float: right;
}
</style>