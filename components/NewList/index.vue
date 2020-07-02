<template>
  <section class="news-list">
    <ul>

      <li
        v-for="item in data.slice(0,count)"
        :key="item.url"
      >
        <router-link :to="item.path">
          <div class="news-item">
            <div
              class="news-pic"
              :style="`background-image: url(${item.image})`"
            ></div>
            <div class="news-txt">
              <h3>{{item.title}}</h3>
              <p>{{item.info}}</p>
            </div>
            <div class="news-foot">
              <time>
                <em>{{item.date}} </em>
                <span> / {{item.year}}</span>
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

import data from "./_data";

export default {
  props: ["count"],
  data() {
    return {
      data
    }
  }
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
    margin-bottom: 26px;
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
        opacity: 1;
        margin-right: 0;
        // display: block;
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
      background-size: 400px auto;
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
      opacity: 0;
      margin-right: 20px;
      float: right;
      margin-top: 7px;
      transition: all 0.8s ease;
    }
  }
}
.page {
  float: right;
}
</style>
