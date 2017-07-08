<template lang='jade'>
header.nav
  //header.topbar
    i.content.big.icon
    Breadcrumb.breadcrumb-wrapper
  div.menu-wrapper
    div.ui.menu.teal.inverted
      div.header.item Sugerpocket
      router-link(:to='{ name: \'main\' }' tag='a').item Blogs
      a.item Diaries
      a.right.item About me
</template>

<script>
import Breadcrumb from './Breadcrumb.vue'

export default {
  data () {
    return {}
  },
  components: {
    Breadcrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  header.topbar
    padding-left: 0.5em
    padding-right: 0.5em
    background: white
    box-shadow: 0 1px 5px 0 rgba(41,85,115,.21)
    @media (max-width: 768px)
      display: none
  .menu-wrapper
  .breadcrumb-wrapper
    margin-left: 0.5em
  .menu
    border-radius: 0
</style>
