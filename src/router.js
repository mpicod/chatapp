import Vue from 'vue'
import Router from 'vue-router'
import ChatView from './views/ChatView.vue'
import LoginView from './views/LoginView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ // un tableau, qui gère les routes
    {
      path: '/',
      name: 'home',
      component: ChatView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    }
  ]
})
