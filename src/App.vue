<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'jquery'
import 'semantic-ui/dist/semantic.min.js'

export default {
  name: 'sugerpocket'
}
</script>

<style lang='sass'>
@import '../node_modules/semantic-ui/dist/semantic.min.css'

#app 
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  display: fixed
</style>
