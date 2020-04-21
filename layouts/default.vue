<template>
  <div class="main">
    <Header />
    <div class="middle">
      <nuxt />
      <Footer />
    </div>

    <SideBar />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SideBar from "~/components/SideBar";

export default {
  components: {
    Header,
    Footer,
    SideBar
  }
}
</script>

<style lang="less">
.main {
  .middle {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    left: 0;
    overflow-y: scroll;
  }
}
</style>
