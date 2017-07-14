import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Main from '@/components/main'
import Article from '@/components/articles/article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      meta: {
        breadcrumb: 'Home'
      },
      component: Home,
      children: [
        {
          path: '',
          name: 'main',
          component: Main
        },
        {
          path: 'article/:articleId',
          name: 'article',
          component: Article
        }
      ]
    }
  ]
})
