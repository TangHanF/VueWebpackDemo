<template>
  <div id="app">
    <router-view/>
    <!--<img src="./assets/logo.png" @click="goToHome">-->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
