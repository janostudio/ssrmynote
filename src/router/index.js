import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Note = () => import('../views/Note.vue')
const Home = () => import('../views/Home.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/note', component: Note },
      { path: '/home', component: Home },
      { path: '/', redirect: '/note' }
    ]
  })
}
