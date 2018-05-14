import Vue from 'vue'
import VueRouter from 'vue-router'

import top from '../../vue/pages/top.vue'
import about from '../../vue/pages/about.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'top',
      path: '/',
      component: top,
    },
    {
      name: 'about',
      path: '/about',
      component: about,
    },
  ],
})

export default router
