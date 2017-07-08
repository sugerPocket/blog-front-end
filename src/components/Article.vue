<template lang='jade'>
div.article-wrapper
  div.article.ui.container
    .ui
      h1.ui.article-header Git 简易教程
      div.article-meta
        .ui.teal.image.label
          img(src='../assets/images/images.jpg')
          | sugerpocket
          .detail author
        span.like
          i.icon.like
          | 250
        span.unhide
          i.icon.unhide
          | 1723
        //span.article-nav
          span.github
            i.icon.github
      .ui.divider
      .tags
        span.title Tags :&nbsp;&nbsp;
        .ui.mini.label web
      .ui.raised.teal.segment.description
        p Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      Markdown.markdown(:content='content')
      h2.ui.dividing.header Comments
        .community-login
          h4.header 社交帐号登陆 :
          span
            i.icon.qq
          span
            i.icon.wechat
          span
            i.icon.weibo
      .ui.threaded.comments
        .comment
          a.avatar
            img(src="../assets/images/images.jpg")
          .content
            a.author Matt
            .metadata
              span.date Today at 5:42PM
            .text How artistic!
            .actions
              a.reply Reply
        .comment
          a.avatar
            img(src="../assets/images/images.jpg")
          .content
            a.author Elliot Fu
            .metadata
              span.date Yesterday at 12:30AM
            .text
              p This has been very useful for my research. Thanks as well!
            .actions
              a.reply Reply
          .comments
            .comment
              .avatar
                img(src="../assets/images/images.jpg")
              .content
                a.author Jenny Hess
                .metadata
                  span.date Just now
                .text Elliot you are always so right :)
                .actions
                  a.reply Reply
        .comment
          a.avatar
            img(src="../assets/images/images.jpg")
          .content
            a.author Joe Henderson
            .metadata
              .date 5 days ago
            .text Dude, this is awesome. Thanks so much
            .actions
              a.reply Reply
</template>

<script>
import Markdown from './Markdown'

export default {
  data () {
    return {
      content: '# Hello\n' + '```javascript\n' + 'function(){}\n' + '```\n'
    }
  },
  components: {
    Markdown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .article-wrapper
    min-height: 100vh
    background: white
  .article-header
    line-height: 1.3
    font-size: 34px !important
  .article-meta
    width: 100%
    padding: 0 2px
    overflow: hidden
    display: inline-block
    color: rgba(0,0,0,.4)
    .like, .unhide, .article-nav
      margin-left: 0.5em
      vertical-align: baseline
  .article-nav 
    float: right
    span
      line-height: 26px
      font-size: 20px
  .tags
    .title
      font-size: 16px
    margin: 0.5em 0
  .article
    padding: 100px 10px
    text-align: left
    & > .segment
      box-shadow: 0 11px 18px 0 rgba(32,48,60,.05) !important
      & > *
        position: relative
        z-index: 3 !important
      &:before
        z-index: 1 !important
      &:after
        z-index: 2 !important
  .description
    margin: 20px 0 10px 0
  .markdown
    margin: 10px 0 20px 0
  .community-login
    float: right
    display: inline-block
    font-size: 80%
    .header
      display: inline-block
      margin-right: 10px
      @media (max-width: 640px)
        display: none
    i
      transition: color 0.5s
      cursor: pointer
    .qq:hover
      color: #FBBD08
    .wechat:hover
      color: #21BA45
    .weibo:hover
      color: #DB2828
</style>
