<template lang='pug'>
div.head
  .ui.container
    login.login
    .wrapper
      .ui.huge.header Sugerpocket Blog
      br
      small 唯有想象，方能改变一切
      small 想像力こそが、すべてを変える
      small Imagination is the only thing that changes everything
      br
      .ui.buttons.big.teal.inverted
        a.ui.button
          i.ui.icon.github
          | Github
        .or(data-text='or')
        a.ui.button
          i.ui.icon.gitlab
          | Gitlab
</template>

<script>
import login from '../login'
export default {
  components: { login }
}
</script>

<style scoped lang='stylus'>
  .head
    background: rgba(0, 0, 0, .3)
    background-image: url('../../assets/images/coding-cat.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    height: 100vh
    text-align: center
    position: relative
    z-index: 3
    &:after
      top: 0
      left: 0
      z-index: -1
      width: 100%
      height: 100%
      display: block
      content: ' '
      position: absolute
      background-color: rgba(0, 0, 0, .6)
  @media (min-width: 0px)
    .container
      font-size: 1.2em
  @media (min-width: 768px)
    .container
      font-size: 1.5em
  @media (min-width: 992px)
    .container
      font-size: 2em
  @media (min-width: 1200px)
    .container
      font-size: 2.5em
  .container
    height: 100%
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
  .or:before
    background-color: #6dffff !important
  .login
    position: absolute
    top: 20px
    right: 20px
  .wrapper
    border-left: 0.3em solid #6dffff
    padding-left: 1em
    text-align: left
    & > *
      text-align: left
      color: white
    small
      display: block
      margin-bottom: 0.4em
</style>
