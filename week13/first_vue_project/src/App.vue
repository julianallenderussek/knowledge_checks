<template>
  <div id="app">
    <h1> App components</h1>
    <my-header></my-header>
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  export default {
    name: 'App',
    components: {
      "my-header": PageHeader
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
