<template lang='pug'>
.articles-wrapper
  aside.side.ui.floated.right(v-bind:style='aside.styles')
    .ui.card.teal.search
      .content(style='text-align: center')
        .ui.category.search
          .ui.icon.input(style='width: 100%')
            input.prompt(type="text" placeholder="搜索文章")
            i.search.icon
    .ui.card.teal.user(v-if='isLogin')
      .content.h-37
        .ui.top.attached.label
          h4 {{ user.nickname }}
      .ui.image.avatar
        img(src='../../assets/images/images.jpg')
      .text-center.links
        .ui.buttons
          a.ui.github.icon.button(v-if="user.github" :link='user.github')
            i.icon.github
          a.ui.icon.button(v-if="user.gitlab" :link='user.gitlab')
            i.icon.gitlab
          a.ui.facebook.icon.button(v-if="user.facebook" :link='user.facebook')
            i.icon.facebook
      // .extra
        span posts: 100
    .ui.card.teal.tags(v-if='isLogin')
      .content.h-37
        .ui.top.attached.label
          h4 tags
      .content.labels
        a.ui.tag.label(v-for="tag in user.tags")
          | {{ tag.tag_name }}
          i.ui.label.teal.number
            span 12
  transition-group.articles.ui.relaxed.items(tag='div' name='box' @before-enter='beforeEnter' @enter='enter' @leave='leave')
    article-box.article-box(v-for='(article, index) in articles' v-bind:key="article.id" v-bind:data-index='index' v-bind:item="article")
</template>

<script>
import ArticleBox from './article-box'
import * as $ from 'jquery'
import { mapGetters, mapState } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('articles/loadAll')

    this.asideScroll = this.asideScroll.bind(this)
    $(window).scroll(this.asideScroll)
  },
  data () {
    return {
      aside: {
        styles: {
          paddingTop: 0
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      articles: 'articles/articles',
      isLogin: 'user/isLogin'
    }),
    ...mapState({
      user: 'user'
    })
  },
  components: {
    ArticleBox
  },
  methods: {
    asideScroll () {
      const offset = $(this.$el).offset()
      const scrollTop = $(window).scrollTop()
      const paddingTop = scrollTop - offset.top
      if (paddingTop + 10 > 0) {
        this.aside.styles.paddingTop = `${paddingTop + 10}px`
      } else this.aside.styles.paddingTop = '0px'
    },
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transform = 'translateX(30px)'
    },
    enter (el, done) {
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
<style scoped lang='stylus'>
  .h-37
    box-sizing: border-box
    height: 37px
  .text-center
    text-align: center
  aside.side
    display: none
  .user .links
    margin-bottom: 20px
  .labels > .tag.label
    margin: 0 .5em .5em 1em
    position: relative
    padding-left: 1.5em
    padding-right: 2.5em
    border-radius: 0 .28571429rem .28571429rem 0
    -webkit-transition: none
    transition: none
    & > .number
      height: 1.5em
      width: 1.5em
      padding: .25em
      border-radius: 50%
      text-align: center
      transform: translate(-25%, -50%)
      position: absolute
      top: 50%
      right: 0
      span
        position: absolute
        left: 50%
        transform: translateX(-50%)
  @media only screen and (min-width: 970px)
    .articles
      margin-right: 320px
    aside.side
      display: block
      width: 280px
      margin: 0px 20px
      float: right
      .avatar
        width: auto
        height: auto
        background: transparent
        margin: 20px auto
      .avatar > img
        width: 150px
        height: 150px
  .box-enter
    opacity: 0
  .box-enter-active, .box-leave-active
    transition: all 0.5s !important
  .box-leave
    opacity: 0
</style>
