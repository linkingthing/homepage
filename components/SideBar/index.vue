<template>
  <div class="side-bar">
      <label>如何购买</label>
      <div>
        <img :src="search" />
      </div>
      <div>
        <img :src="phone" />
      </div>
  </div>
</template>

<script>
import phone from "~/assets/images/phone.png";
import search from "~/assets/images/search.png";

export default {
    data(){
        return {
            phone,
            search
        }
    }
}
</script>

<style lang="less">
@import "./index.less";
</style>