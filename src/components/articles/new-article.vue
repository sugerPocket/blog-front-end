<template lang="pug">
modal.basic('v-bind:show'='show')
  .content
    .editor-container
      header.ui.header.dividing Add An Article
        button.ui.circular.remove.icon.button(@click='close')
          i.remove.icon
      .editor-content.ui.container
        input.title(type='text' placeholder='Title')
        textarea.discription(placeholder='Add your article description.')
        .ui.segement.divider
        .tools
          span.ui.header.mini Add :
          button.ui.button.mini
            svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="17px" viewBox="0 0 18 17" class="bm-icon" style="width: 18px; height: 17px;")
              path(fillrule="evenodd" d="M 17.76 3.91C 17.76 1.75 16.01-0 13.85-0 13.85-0 3.41-0 3.41-0 1.25-0-0.5 1.75-0.5 3.91-0.5 3.91-0.5 13.04-0.5 13.04-0.5 15.2 1.25 16.96 3.41 16.96 3.41 16.96 13.85 16.96 13.85 16.96 16.01 16.96 17.76 15.2 17.76 13.04 17.76 13.04 17.76 3.91 17.76 3.91ZM 4.85 2.9C 5.93 2.9 6.94 4.13 6.94 5.21 6.94 6.29 5.9 7.33 4.82 7.33 3.74 7.33 2.7 6.29 2.7 5.21 2.7 4.13 3.77 2.9 4.85 2.9ZM 2.21 14.35C 2.21 14.35 6.12 10.43 6.12 10.43 6.12 10.43 7.43 13.03 7.43 13.03 7.43 13.03 11.34 7.82 11.34 7.82 11.34 7.82 15.25 14.35 15.25 14.35 15.25 14.35 2.21 14.35 2.21 14.35Z" fill="rgb(23,167,163)")
            span image
          button.ui.button.mini
            svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="17px" viewBox="0 0 20 13" class="bm-icon" style="width: 20px; height: 17px;")
              path(fillrule="evenodd" d="M 14.62 4.55C 14.62 4.55 14.62 3.38 14.62 3.38 14.62 1.45 13.14 0.04 11.22 0.04 11.22 0.04 3.08 0.04 3.08 0.04 1.15 0.04-0.5 1.45-0.5 3.38-0.5 3.38-0.5 9.19-0.5 9.19-0.5 11.12 1.15 12.83 3.08 12.83 3.08 12.83 11.22 12.83 11.22 12.83 13.14 12.83 14.62 11.12 14.62 9.19 14.62 9.19 14.62 8.04 14.62 8.04 14.62 8.04 19.27 11.53 19.27 11.53 19.27 11.53 19.27 1.06 19.27 1.06 19.27 1.06 14.62 4.55 14.62 4.55ZM 9.96 4.69C 9.96 4.69 4.15 4.69 4.15 4.69 3.51 4.69 2.99 4.17 2.99 3.53 2.99 2.89 3.51 2.37 4.15 2.37 4.15 2.37 9.96 2.37 9.96 2.37 10.61 2.37 11.13 2.89 11.13 3.53 11.13 4.17 10.61 4.69 9.96 4.69Z" fill="rgb(207,65,125)")
            span video
        .ui.segement.divider
        textarea.content(placeholder='Start writing your post here. You can insert images and videos by clicking on the icons above.')
      .tags-editor

</button>
</template>

<script>
import modal from '../utilies/modal'

export default {
  name: 'newArticle',
  data () {
    return {
      show: false
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

<style scoped lang="stylus">
  .editor-container
    text-align: left
    height: calc(100vh - 10rem)
    border-radius: 10px
    background: white
    overflow: hidden
    display: flex
    flex-direction: column
    flex-flow: column wrap
  @media only screen and (max-width: 991px)
    .editor-container
      height: calc(100vh - 5rem)
  @media only screen and (max-width: 767px)
    .editor-container
      height: calc(100vh - 4rem)
  .menu
    margin: 0
    display: inline-block !important
  .editor-content
    padding: 2rem 3rem
    flex: 1
    display: flex
    flex-direction: column
    flex-flow: column wrap
  .title
    width: 100%
    border: none
    box-shadow: none
    height: 3rem
    font-size: 3rem
    color: #162d3d
    outline: none
    &::-webkit-input-placeholder
      color: rgba(0, 0, 0, 0.3)
  .tools
    span
      margin-right: 10px
      vertical-align: middle
    button
      padding: .34em 0.75em .34em
    svg
      margin-right: 5px
      vertical-align: middle
  textarea
    border: none
    resize: none
    outline: none
    width: 100%
    font-size: 1.5rem
    margin-top: 1rem
    color: #162d3d
    &::-webkit-input-placeholder
      color: rgba(0, 0, 0, 0.3)
  textarea.content
    height: 100%
    flex: 1
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

