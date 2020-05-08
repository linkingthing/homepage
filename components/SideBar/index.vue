<template>
  <div class="side-bar">
    <label @click="openBuyDialog">如何购买 </label>
    <!-- <div>
      <nuxt-link to="/news"> <img :src="search" /></nuxt-link>
    </div> -->
    <div>
      <el-popover
        placement="left"
        trigger="hover"
        popper-class="tel"
        content="010-88708872"
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
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      phone,
      search
    }
  },
  methods: {
    ...mapMutations([
      'openBuyDialog'
    ]),
  }

}
</script>

<style lang="less">
@import "./index.less";
</style>