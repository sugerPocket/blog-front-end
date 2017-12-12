import { retrieveAll, createOne, getOneDetail } from '../../api/article'

export const namespaced = true

export const state = {
  articles: []
}

export const mutations = {
  load (state, articles) {
    state.articles = articles
  },
  unshift (state, articles) {
    state.articles.unshift([articles])
  }
}

export const getters = {
  articles (state) {
    return state.articles.map(article => ({
      id: article['article_id'],
      title: article['title'],
      description: article['description'],
      updateTime: article['update_time'],
      createTime: article['create_time'],
      tags: article['tags'],
      author: {
        id: article['author_id'],
        username: article['author_name'],
        nickname: article['author_nickname']
      }
    }))
  }
}

export const actions = {
  async loadAll ({ commit }, search) {
    const result = await retrieveAll(search || '')
    commit('load', result.data.data)
    return result.data
  },
  async loadOne ({ commit }, id) {
    const result = await getOneDetail(id)
    return result.data
  },
  async createOne ({ commit }, article) {
    const result = await createOne(article)
    commit('unshift', result.data.data)
    return result.data
  }
}
