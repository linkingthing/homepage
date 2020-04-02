<template>
  <div class="header">
    <div class="header-logo">
      <img :src="src" />
    </div>

    <el-menu 
      :default-active="activeIndex" 
      active-text-color="#EE3434"
      text-color="#333"
      class="header-menu" 
      mode="horizontal" 
      @select="handleSelect">
      <el-menu-item index="1"><nuxt-link to="/home">首页</nuxt-link></el-menu-item>
      <el-submenu index="2" popper-class="header-menu-popper">
        <template slot="title">产品介绍</template>
        <el-menu-item index="2-1"><nuxt-link to="/clxone-ddi">CLXOne™DDI</nuxt-link></el-menu-item>
        <el-menu-item index="2-2"><nuxt-link to="/monitor-platform">IPV6发展监测平台</nuxt-link></el-menu-item>
        <el-menu-item index="2-3"><nuxt-link to="/promotion-manage">IPV6代际升迁管理</nuxt-link></el-menu-item>
      </el-submenu>
      <el-menu-item index="3">合作代理</el-menu-item>
      <el-menu-item index="4">新闻中心</el-menu-item>
      <el-menu-item index="5">下载中心</el-menu-item>
      <el-menu-item index="6">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import src from "~/assets/images/logo.png"

export default {
  data(){
    return {
      activeIndex:"1",
      src
    };
  },

  methods:{
    handleSelect(item){
      // this.   
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>