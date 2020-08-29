import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // mutations当中的函数不支持异步操作
    // mutations当中函数，第一个形参永远都是state
    // num为外部传递过来的参数
    add (state) {
      state.count++
    },
    addNum (state, num) {
      state.count = state.count + num
    },
    sub (state) {
      state.count--
    },
    subNum (state, num) {
      state.count = state.count - num
    }
  },
  actions: {
    // 可以认为context即定义出来的vuex
    // 在action当中不能直接修改state中的数据
    // 必须通过context.commit()触发某个函数才行
    // 只有mutations当中的函数才有权利修改state当中的数据
    // action只负责进行异步操作
    addAsync (context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNumAsync (context, num) {
      setTimeout(() => {
        context.commit('addNum', num)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNumAsync (context, num) {
      setTimeout(() => {
        context.commit('subNum', num)
      }, 1000)
    }
  },
  getters: {
    showNum: state => {
      return `当前最新的数量是：${state.count}`
    }
  },
  modules: {}
})
