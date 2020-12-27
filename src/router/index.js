import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "@/views/login"
import layout from "@/views/layout"


Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name: 'login',
    component:login
  },
  {
    path:'/layout',
    name: 'layout',
    component:layout
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
