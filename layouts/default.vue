<template>
  <div class="main">
    <Header />
    <div class="middle">
      <nuxt />
      <Footer />
    </div>

    <SideBar />
    <BuyProduct />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SideBar from "~/components/SideBar";
import BuyProduct from "~/components/BuyProduct";



export default {
  components: {
    Header,
    Footer,
    SideBar,
    BuyProduct
  }
}
</script>

<style lang="less">
.main {
  .middle {
    position: absolute;
    top: 70px;
    bottom: 0;
    width: 100%;
    left: 0;
    overflow-y: scroll;
  }
}
</style>
