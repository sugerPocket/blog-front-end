<template lang='pug'>
  div.home
    new-article
    router-view
</template>

<script>
import Topbar from './header/topbar'
import Modal from './utilies/modal'
import NewArticle from './articles/new-article'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Topbar,
    Modal,
    NewArticle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.home
  min-height: 100vh
.head
  background-color: white
.nav
  width: 100%
  z-index: 10
.newArticle
  min-height: 80vh
  background: white
h1, h2
  font-weight: normal
ul
  list-style-type: none
  padding: 0
li
  display: inline-block
  margin: 0 10px
a
  color: #42b983
</style>
