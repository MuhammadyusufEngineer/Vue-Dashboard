import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import dashboard from '../views/dashboard.vue'
import chart from '../views/chart.vue'
import db from '../views/db.vue'
import copy from '../views/copy.vue'
import mail from '../views/mail.vue'
import chat from '../views/chat.vue'
import cart from '../views/cart.vue'
import more from '../views/more.vue'
import circle from '../views/circle.vue'
import calendar from '../views/calendar.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/chart',
    name: 'chart',
    component: chart
  },
  {
    path: '/db',
    name: 'db',
    component: db
  },
  {
    path: '/copy',
    name: 'copy',
    component: copy
  },
  {
    path: '/mail',
    name: 'mail',
    component: mail
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/more',
    name: 'more',
    component: more
  },
  {
    path: '/circle',
    name: 'circle',
    component: circle
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: calendar
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
