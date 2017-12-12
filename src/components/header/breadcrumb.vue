<template lang='pug'>
nav.ui.big.breadcrumb
  template(v-for='breadcrumb in breadcrumbCollection')
    a.section(v-if='breadcrumb') {{breadcrumb}}
    i.right.chevron.icon.divider(v-else='breadcrumb')
</template>

<script>
export default {
  mounted () {
    console.log(this.$route)
    console.log(this.breadcrumbCollection)
  },
  computed: {
    breadcrumbCollection () {
      const matched = this.$route.matched
      let match = matched
        .map(val => val.meta.breadcrumb || '')
        .filter((val, index, arr) => val ? true : (index > 0 && arr[index - 1]))
      return match
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  .breadcrumb
    height: 50px
    line-height: 50px
</style>
