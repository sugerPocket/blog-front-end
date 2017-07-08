<template lang='jade'>
  router-link.ui.card(:to='{ name: \'article\', params: { articleId: 1 } }')
    .content
      .header cute Dog
      .meta 2 days ago
    .image
      img.ui.image(src='../assets/images/code.jpg')
    .content
      .description
        img.ui.avatar.image.floated.left(src='../assets/images/images.jpg')
        span.author sugerpocket
        br
        span Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.
    .extra.content
      span.left.floated.like
        i.icon.like
        | 250
      span.right.floated.unhide
        i.icon.unhide
        | 1723

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
    box-shadow: 0 11px 18px 0 rgba(32,48,60,.05) !important
  .author
    font-weight: bold
    line-height: 2em
</style>
