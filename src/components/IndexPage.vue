<template>
  <div>
    <h1>Hi 首页面</h1>

    <router-link to="/iview" tag="Button">
      <!--<Button>Default</Button>-->
      打开iView演示页面
    </router-link>

    <router-link to="/layout" tag="Button">打开Layout布局页面</router-link>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    props: {
      propName: {
        type: Number,
        default: 0,
        required: false
      }

    }
  }
</script>

<style scoped>

</style>
