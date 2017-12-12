<template lang='pug'>
  .item
    .ui.small.image
      div(style='display: table; height: 100%')
        span(style='display: table-cell; vertical-align: middle')
          img.main-image(src='../../assets/images/code.jpg')
    .content
      router-link(:to='{ name: \'article\', params: { articleId: 1 } }').header {{ item.title }}
      .meta {{ item.createTime }}
      .description
        span {{ item.description }}
      // .extra
        span.like
          i.icon.like
          | 250
        span.unhide
          i.icon.unhide
          | 1723
    // .content
      .meta 2017 年 7 月 12 日
    // .ui.small.image
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
<style scoped lang='stylus'>
  @media(min-width: 768px)
    .item
      padding-left: 2.0em !important
      border-left: 0.2em solid transparent !important
      &:hover
        border-color: #00bfb6 !important
  @media only screen and (max-width: 767px)
    .ui.items:not(.unstackable) > .item > .image
      max-height: none !important
  .item
    margin: 3.0em 0 !important
  .author
    font-weight: bold
    line-height: 2em
</style>
