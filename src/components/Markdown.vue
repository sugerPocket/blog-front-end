<template lang='jade'>
div(v-html='markdownContent' v-highlight='')
</template>

<script>
import Vue from 'vue'
import marked from 'marked'
import hljs from 'highlight.js'

Vue.directive('highlight', el => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

export default {
  computed: {
    markdownContent () {
      if (typeof this.content !== 'string') return ''
      return marked(this.content, { sanitize: true })
    }
  },
  props: ['content']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
@import '../../node_modules/highlight.js/styles/monokai.css'
.hljs
  border-radius: 4px
  overflow: hidden
</style>
