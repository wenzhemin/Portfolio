import Vue from 'vue'
import Router from 'vue-router'
import Resume from './views/Resume.vue'
import Blog from './views/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'resume',
      component: Resume
    },
    {
      path: '/portfolio',
      name: 'portefølje',
      component: () => import( './views/Portfolio.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import( './views/Blog.vue')
    }
  ]
})
