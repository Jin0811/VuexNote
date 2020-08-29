<template>
  <div id="app">
    <p>Vuex</p>
    <my-addition></my-addition>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition'
import Subtraction from './components/Subtraction'
export default {
  name: 'App',
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
