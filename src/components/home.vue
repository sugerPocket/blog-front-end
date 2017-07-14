<template lang='jade'>
  div.home
    Topbar.nav
    new-article
    router-view
</template>

<script>
import Topbar from './header/topbar'
import Modal from './utilies/modal'
import NewArticle from './articles/newArticle'

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
<style scoped lang='sass'>
.home
  min-height: 100vh
  background: #fafafa// radial-gradient(ellipse 59% 100% at 93% 30%,#f0d7ca,rgba(219,232,231,.2) 90%),radial-gradient(ellipse 59% 140% at 0 120%,#f0d7ca,rgba(219,232,231,.2) 60%),radial-gradient(ellipse 60% 100% at 5% 20%,#b3d7d5,rgba(219,232,231,.2) 100%),radial-gradient(ellipse 60% 100% at 100% 110%,#b3d7d5,rgba(219,232,231,.2) 90%)

.head
  background-color: white
.nav
  position: fixed
  top: 0
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
