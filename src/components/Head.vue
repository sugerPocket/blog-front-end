<template lang='jade'>
  div.head
    .user-photo
      img(src='../assets/images/images.jpg')
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .head
    background-image: url('https://opencollective.com/public/images/onboarding-bg.svg')
    background-color: white
    background-repeat: no-repeat
    background-position: center
    background-size: 800px 600px
    height: 600px
    position: relative
    .user-photo
      width: 156px
      height: 156px
      position: absolute
      top: 198px
      left: 50%
      transform: translateX(-50%)
      box-shadow: 0px 0px 0px 4px #00B5AD
      border-radius: 50%
      overflow: hidden
    img
      border-radius: 50% 
      border: 4px solid white
      width: 100%
      height: 100%
  
</style>
