<!-- HTML Goes Here -->
<template>
  <div>
    <ul>
      <li>Home Page</li>
      <li>About</li>
      <li>Contact Us</li>
    </ul>
  </div>
</template>


<!-- Javascript Goes Here -->
<script>
  export default {
    name: 'my-header',
  }
</script>


<!-- CSS Goes Here -->
<style scoped>
  div {
    display: flex;
    flex-direction: row;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style-type:none
  }
  li {
    text-decoration: none;
    margin-left: 10px;
  }
</style>
