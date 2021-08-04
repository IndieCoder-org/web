import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/registration/LogIn.vue'
import Register from '../views/registration/Register.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
