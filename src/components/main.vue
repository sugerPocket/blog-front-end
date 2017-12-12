<template lang='pug'>
div.main
  display-head
  div.ui.container
    articles
  //Articles
</template>

<script>
import Articles from './articles/articles'
import Head from './header/head'

export default {
  data () {
    return {}
  },
  components: {
    Articles,
    DisplayHead: Head
  }
}
</script>

<style scoped lang='stylus'>
  .container
    padding: 4em 0.5em
  .main
    text-align: left
</style>
