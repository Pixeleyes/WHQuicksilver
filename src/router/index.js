import Vue from 'vue'
import VueRouter from 'vue-router'

import quicksilver from '../views/quicksilver.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lobby',
    component: quicksilver
  },
  {
    path: '/:category',
    name: 'category',
    component: quicksilver
  },
  {
    path: '/:category/:subcategory',
    name: 'subcategory',
    component: quicksilver
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router