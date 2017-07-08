<template lang='jade'>
transition-group.articles-wrapper.ui.three.stackable.cards(tag='div' name='box' @before-enter='beforeEnter' @enter='enter' @leave='leave')
  article-box.article-box(v-for='(article, index) in articles' v-bind:key="article.id" v-bind:data-index='index' v-bind:item="article")
</template>

<script>
import ArticleBox from './ArticleBox.vue'

export default {
  mounted () {
    let i = 3
    setTimeout(() => {
      this.articles = [{id: 0}, {id: 1}, {id: 2}]
      let interval = setInterval(() => {
        this.articles.push({id: i})
        i++
        if (i >= 10) clearInterval(interval)
      }, 1000)
    }, 3000)
  },
  data () {
    return {
      articles: []
    }
  },
  components: {
    ArticleBox
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transform = 'translateX(30px)'
    },
    enter (el, done) {
      console.log(done)
      let delay = el.dataset.index * 150
      setTimeout(() => {
        el.style.opacity = 1
        el.style.transform = ''
      }, delay)
    },
    leave (el) {
      el.style.opacity = 0
      el.style.transform = 'translateX(30px)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .box-enter
    opacity: 0
  .box-enter-active, .box-leave-active
    transition: all 0.5s !important
  .box-leave
    opacity: 0
</style>
