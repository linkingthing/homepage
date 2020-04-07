<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <SideBar />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SideBar from "~/components/SideBar";

export default {
  components:{
    Header,
    Footer,
    SideBar
  }
}
</script>
