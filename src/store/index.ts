import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNew: false,
    characters:
      [0, 0, 0, 0, 0, 0],
    places: [0, 0, 0, 0, 0, 0]
    //幼儿园园长 吃货 刷夜人 宝藏男孩 小甜甜 大橘
    //         韵酒 喻家山 东九  梧桐语  集贸  科技楼
  },
  mutations: {
    handleC(state, index) {
      state.characters[index]++
    },
    handleP(state, index) {
      state.places[index]++
    },
    newOrOld(state, b: boolean) {
      state.isNew = b;
    }
  },
  actions: {
  },
  modules: {
  }
})
