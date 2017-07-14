<template lang='jade'>
  router-link.ui.card(:to='{ name: \'article\', params: { articleId: 1 } }')
    .extra.content
      h1.ui.header.left.floated GIT 简易教程
      span.right.floated.like
        i.icon.like
        | 250
      span.right.floated.unhide
        i.icon.unhide
        | 1723
      .description
        // img.ui.avatar.image.floated.left(src='../../assets/images/images.jpg')
        // span.author sugerpocket
        span Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.
    .content
      .meta 2017 年 7 月 12 日
    //.image
      img.ui.image(src='../../assets/images/code.jpg')
      .description
        img.ui.avatar.image.floated.left(src='../../assets/images/images.jpg')
        span.author sugerpocket
        br
        span Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.
    //.content
      .meta 2 days ago

</template>

<script>

export default {
  name: 'ArticleBox',
  props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .card
    padding-top: 20px
    box-shadow: 0 11px 18px 0 rgba(32,48,60,.05) !important
  .content:not(.extra)
    padding-top: 5px !important
    border: none !important
  .extra
    span.floated
      margin-left: 10px
  .author
    font-weight: bold
    line-height: 2em
</style>
