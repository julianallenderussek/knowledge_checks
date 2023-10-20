<template>
  <h1>Life Cycle Component</h1>
</template>

<script>
  export default {
    name: 'LifeCycleExample',
    beforeCreate() {
      console.log("Stage 1 -> before Create")
    },
    created() {
      console.log("Stage 2 -> created")
    },
    beforeMount() {
      console.log("Stage 3 -> before Mount")
    },
    mounted() {
      console.log("Stage 4 -> Mounted")
    }
  }
</script>

<style scoped>

</style>
