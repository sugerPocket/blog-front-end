<template lang="pug">
.ui.modal
  slot
</div>

</template>

<script>
import * as $ from 'jquery'

export default {
  mounted () {
    if (this.show) this.modal('show')
  },
  methods: {
    modal (...args) {
      return $(this.$el).modal(...args)
    }
  },
  watch: {
    show () {
      if (this.show) this.modal('show')
      else this.modal('hide')
    }
  },
  props: {
    show: { type: Boolean, default: false }
  }
}
</script>

<style scoped lang="stylus">
</style>

