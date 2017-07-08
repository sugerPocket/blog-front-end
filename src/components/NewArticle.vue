<template lang="jade">
modal(v-bind:show='show')
  .container
    header.ui.header.dividing Add An Article
      button.ui.circular.remove.icon.button(@click='close')
        i.remove.icon
    .section
      .ui.secondary.vertical.pointing.menu.small
        a.item.teal.active Edit article
        a.item Edit tags
</button>
</template>

<script>
import modal from './Modal'

export default {
  name: 'newArticle',
  data () {
    return {
      show: true
    }
  },
  methods: {
    close () {
      this.show = false
    }
  },
  components: { modal }
}
</script>

<style scoped lang="sass">
  .container
    text-align: left
    height: 98vh
    border-radius: 10px
    width: 98vw
    background: white
  header.header
    padding: 14px 15px !important
    font-weight: 400
    margin: 0 !important
    button
      float: right
      position: relative
      color: #00B5AD
      background-color: rgba(0, 181, 173, 0.2)
      &:hover
        background-color: rgba(0, 181, 173, 0.4)
        color: #00B5AD
      i::before
        position: absolute
        font-size: 18px
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
</style>

