export const state = () => ({
  buyDialog: false
})

export const mutations = {
  openBuyDialog(state) {
    state.buyDialog = true
  },
  closeBuyDialog(state) {
    state.buyDialog = false
  },
}
