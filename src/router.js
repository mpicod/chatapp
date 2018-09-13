import Vue from 'vue'
import Router from 'vue-router'
import ChatView from './views/ChatView.vue'
import LoginView from './views/LoginView.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ // un tableau, qui gère les routes
    {
      path: '/',
      name: 'chatroom',
      meta: {
        requireAuth: true
      },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.user()) {
      next({
        path: '/login'

      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
