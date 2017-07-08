<template lang='jade'>
div.main
  display-head
  div.ui.container
    articles
  //Articles
</template>

<script>
import Articles from './Articles'
import Head from './Head'

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .container
    padding: 4em 0.5em
  .main
    text-align: left
</style>
