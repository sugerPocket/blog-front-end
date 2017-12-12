<template lang="pug">
.login
  button.ui.button.big.inverted.basic(@click='open()' v-if='!isLogin') Log in
  button.ui.button.big.inverted.basic(v-if='isLogin') Log out
  modal.login-modal.tiny.basic(v-bind:show='show')
    .content(style='text-align: center')
      .ui.stacked.segment.teal(style='max-width: 310px; margin: 0 auto')
        .ui.huge.header.teal
          | Log-in to your account
        .ui.left.icon.input.fluid
          input(type="text" placeholder="Username" v-model="username")
          i.ui.icon.user
        .ui.left.icon.input.fluid
          input(type="password" placeholder="Password" v-model="password")
          i.ui.icon.key
        .actions
          .ui.buttons.block.fluid
            .ui.teal.button('@click'='login()')
              i.checkmark.icon
              | OK
            .ui.red.button(@click='close()')
              i.remove.icon
              | NO

</template>

<script>
import modal from './utilies/modal'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      show: false
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'user/isLogin'
    })
  },
  methods: {
    close () {
      this.username = ''
      this.password = ''
      this.show = false
    },
    open () {
      this.show = true
    },
    async login () {
      const { password, username } = this
      await this.$store.dispatch('user/login', { password, username })
      this.close()
    },
    async logout () {
      await this.$store.dispatch('user/logout')
    }
  },
  components: { modal }
}
</script>

<style lang="stylus" scoped>
.login-modal
  font-size: 1.3em
  .header
    margin-bottom: 30px
  .input
    margin-top: 10px
  .actions
    margin-top: 20px
</style>

