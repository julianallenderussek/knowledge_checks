<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <life-cycle></life-cycle>
  </div>
</template>

<script>
  import LifeCycleExample from './components/LifeCycleExample.vue'

  export default {
    name: 'App',
    components: {
      "life-cycle": LifeCycleExample
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
