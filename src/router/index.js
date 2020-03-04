import Vue from 'vue'
import VueRouter from 'vue-router'

import quicksilver from '../views/quicksilver.vue'
import game from '../views/game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lobby',
    component: quicksilver
  },
  {
    path: '/game',
    name: 'game',
    component: game
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