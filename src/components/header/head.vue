<template lang='jade'>
  div.head
    .head-content-wrapper
      h1.ui.header.massive Sugerpocket
      button.ui.button.huge(tabindex="0") 
        i.ui.icon.github
        | Github
      button.ui.button.huge(tabindex="0")
        | About me
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .head
    //background-image: url('https://opencollective.com/public/images/onboarding-bg.svg')
    background-color: lighten(#00b5ad, 3%)
    background-repeat: no-repeat
    background-position: center
    height: 450px
    position: relative
    text-align: center
  .head-content-wrapper
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
  h1
    font-size: 6rem !important
    color: white !important
    margin-bottom: 35px !important
    @media(max-height: 767px)
      font-size: 4rem !important
  button
    background: rgba(0, 0, 0, 0.1) !important
    color: white !important
    @media(min-height: 767px)
      margin: 0 40px !important
    transition: background 1s
    &:hover
      background: rgba(0, 0, 0, 0.15) !important
  
</style>
