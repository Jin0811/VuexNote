<template>
  <div>
    <!-- <p>当前store当中的count值为：{{$store.state.count}}</p> -->
    <p>{{$store.getters.showNum}}</p>
    <button @click="additionFun">+1</button>
    <button @click="addNum">+N</button>
    <button @click="addAsync">+1 Async</button>
    <button @click="addNumAsync">+N Async</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    additionFun () {
      this.$store.commit('add')
    },
    addNum () {
      this.$store.commit('addNum', 5)
    },
    // 异步增加count
    addAsync () {
      this.$store.dispatch('addAsync')
    },
    addNumAsync () {
      this.$store.dispatch('addNumAsync', 3)
    }
  }
}
</script>

<style scoped>
  button{
    margin: 0 20px;
  }
</style>
