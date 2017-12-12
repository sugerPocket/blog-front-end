import { login, logout } from '../../api/user'

export const namespaced = true

export const state = {
  id: 0,
  username: '',
  nickname: '',
  email: '',
  github: '',
  tags: []
}

export const getters = {
  isLogin (state) {
    return state.username && state.id
  }
}

export const mutations = {
  update (state, { id, username, nickname, tags }) {
    if (typeof id !== 'undefined') state.id = id
    if (typeof username !== 'undefined') state.username = username
    if (typeof nickname !== 'undefined') state.nickname = nickname
    if (Array.isArray(tags)) state.tags = tags
  },
  init (state) {
    state.id = 0
    state.username = ''
    state.nickname = ''
    state.email = ''
    state.github = ''
    state.tags = []
  }
}

export const actions = {
  async login ({ commit }, { username, password }) {
    const result = await login(username, password)
    const { data } = result.data
    data.id = data['user_id']
    commit('update', data)
    return result.data
  },
  async logout ({ commit }) {
    const result = await logout()
    commit('init', result.data.data)
    return result.data
  }
}
