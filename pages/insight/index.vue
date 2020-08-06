<template>
  <div class="news">
    <BigPicture :url="require('~/assets/images/insight-pic.jpg')" />
    <div class="content">
      <TitleGroup
        mainTitle="行业洞察"
        subtitle="INDUSTRY INSIGHT"
      />

      <NewList />
    </div>
  </div>
</template>

<script>
import BigPicture from "~/components/BigPicture";
import TitleGroup from "~/components/TitleGroup";
import NewList from "~/components/InsightList"

export default {
  components: {
    BigPicture,
    TitleGroup,
    NewList
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() { 
  },
  mounted() { },
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