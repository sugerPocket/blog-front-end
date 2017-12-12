import Vue from 'vue'
import Vuex from 'vuex'
import * as user from './modules/user'
import * as articles from './modules/articles'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    articles
  },
  strict: debug,
  plugins: []
})
