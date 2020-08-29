<template>
  <div>
    <!-- <p>当前store当中的count值为：{{count}}</p> -->
    <p>{{showNum}}</p>
    <button @click="sub">-1</button>
    <button @click="subFun">-N</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNumFun">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    // 展开运算符，展开mutations当中的sub函数
    ...mapMutations(['sub', 'subNum']),
    ...mapActions(['subAsync', 'subNumAsync']),
    subFun () {
      this.subNum(5)
    },
    subNumFun () {
      this.subNumAsync(5)
    }
  }
}
</script>

<style scoped>
  button{
    margin: 0 20px;
  }
</style>
