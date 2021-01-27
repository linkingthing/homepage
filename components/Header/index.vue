<template>
  <div class="header">
    <div class="wrapper">
      <div class="header-logo">
        <img :src="src" />
      </div>
      <el-menu
        :default-active="activeIndex"
        active-text-color="#EE3434"
        text-color="#333"
        class="header-menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/home">
          <nuxt-link to="/home">首页</nuxt-link>
        </el-menu-item>
        <el-submenu
          index="2"
          popper-class="header-menu-popper"
        >
          <template slot="title">产品介绍</template>
          <el-menu-item index="/clxone-ddi">
            <nuxt-link to="/clxone-ddi">CLXOne® DDI</nuxt-link>
          </el-menu-item>
          <!-- <el-menu-item index="/monitor-platform">
            <nuxt-link to="/monitor-platform">IPV6发展监测平台</nuxt-link>
          </el-menu-item> -->
          <el-menu-item index="/promotion-manage">
            <nuxt-link to="/promotion-manage">代际升迁管理</nuxt-link>
          </el-menu-item>

          <el-menu-item index="/product/monitor-platform">
            <nuxt-link to="/product/monitor-platform">监控平台</nuxt-link>
          </el-menu-item>
          <el-menu-item index="/product/data-asset-platform">
            <nuxt-link to="/product/data-asset-platform">数据资产平台</nuxt-link>
          </el-menu-item>
          <el-menu-item index="/product/detect-cloud-services">
            <nuxt-link to="/product/detect-cloud-services">IPv6检测云服务</nuxt-link>
          </el-menu-item>

        </el-submenu>
        <el-submenu
          index="/solution"
          popper-class="header-menu-popper"
        >
          <template slot="title">解决方案</template>
          <el-menu-item index="/solution/clxone">
            <nuxt-link to="/solution/clxone">CLXOne®</nuxt-link>
          </el-menu-item>
          <el-menu-item index="/solution/too">
            <nuxt-link to="/solution/too">311</nuxt-link>
          </el-menu-item>
          <el-menu-item index="/solution/sot">
            <nuxt-link to="/solution/sot">sot</nuxt-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="/cooperate">
          <nuxt-link to="/cooperate">合作代理</nuxt-link>
        </el-menu-item>
        <el-menu-item index="/news">
          <nuxt-link to="/news">新闻中心</nuxt-link>
        </el-menu-item>
        <el-menu-item index="/support">
          <nuxt-link to="/support">支持中心</nuxt-link>
        </el-menu-item>
        <el-menu-item index="/insight">
          <nuxt-link to="/insight">行业洞察</nuxt-link>
        </el-menu-item>
        <!-- <el-menu-item index="6"><nuxt-link to="/download">下载中心</nuxt-link></el-menu-item> -->
        <el-menu-item index="/about">
          <nuxt-link to="/about">关于我们</nuxt-link>
        </el-menu-item>
      </el-menu>
    </div>

  </div>
</template>

<script>
import src from "~/assets/images/logo.png"

export default {
  data() {
    return {
      activeIndex: "/home",
      src,
      routes: [
        {
          path: "/home",
          label: "首页",
          index: "1"
        },
        {
          path: "/clxone-ddi",
          label: "CLXOne®DDI",
          index: "2-1"
        },
        {
          path: "/monitor-platform",
          label: "IPV6发展监测平台",
          index: "2-2"
        },
        {
          path: "/promotion-manage",
          label: "IPV6代际升迁管理",
          index: "2-3"
        },
        {
          path: "/cooperate",
          label: "合作代理",
          index: "3"
        },
        {
          path: "/news",
          label: "新闻中心",
          index: "4"
        },
        {
          path: "/support",
          label: "支持中心",
          index: "5"
        },
        {
          path: "/download",
          label: "下载中心",
          index: "6"
        },
        {
          path: "/about",
          label: "关于我们",
          index: "7"
        }
      ]
    }

  },

  created() {
    const path = this.$router.currentRoute.path
    const [, name] = path.split('/')
    this.activeIndex = ['', name].join('/')
  },

  methods: {
    handleSelect(item) {
      this.$router.push({ path: item })
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>