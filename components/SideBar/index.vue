<template>
  <div class="side-bar">
    <label>
      <nuxt-link to="/support">如何购买</nuxt-link>
    </label>
    <div>
      <nuxt-link to="/news"> <img :src="search" /></nuxt-link>
    </div>
    <div>
      <el-popover
        placement="left"
        trigger="hover"
        popper-class="tel"
        content="400-666-789"
      >
        <img
          :src="phone"
          slot="reference"
        />
      </el-popover>
    </div>
  </div>
</template>

<script>
import phone from "~/assets/images/phone.png";
import search from "~/assets/images/search.png";

export default {
  data() {
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