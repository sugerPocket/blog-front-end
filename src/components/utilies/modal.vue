<template lang="jade">
transition(name='fade')
  .modal(v-show='show')
    .modal-content
      slot
    .modal-backdrop

</template>

<script>
// import newArticle from './NewArticle'

export default {
  data () {
    return {
      mountedComp: null
    }
  },
  mounted () {
    let body = document.body
    let parent = this.$el.parentNode
    let node = this.$el

    this.mountedComp = this.$slots.default

    parent.removeChild(node)
    body.appendChild(node)
  },
  beforeDestroy () {
    let body = document.body
    body.removeChild(this.$el)

    if (this.mountedComp) {
      this.mountedComp.$destroy()
    }
  },
  methods: {
    // },
    // mountToTarget () {

    //   const attributes = extractAttributes(el)

    //   if (el) {
    //     const target = new Vue({
    //       ...Target,
    //       parent: this,
    //       propsData: {
    //         name: this.to,
    //         tag: el.tagName,
    //         attributes,
    //       },
    //     })
    //     target.$mount(el)
    //     this.mountedComp = target
    //   } else {
    //     console.warn('[vue-portal]: The specified targetEl ' + this.targetEl + ' was not found')
    //   }
    // }
  },
  // components: {
  //   newArticle
  // },
  props: {
    show: { type: Boolean, default: false }
  }
}
</script>

<style scoped lang="sass">
  .modal
    position: fixed
    width: 100%
    height: 100%
    z-index: 10
    top: 0
    left: 0
  .modal-content, .modal-backdrop
    position: absolute
  .modal-backdrop
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.4)
    z-index: 10
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity: 0
  .modal-content
    top: 50%
    left: 50%
    z-index: 11
    transform: translate(-50%, -50%)
</style>

