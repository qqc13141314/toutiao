import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "@/views/login"
import layout from "@/views/layout"
import articles from "@/views/article"
import shouye from "@/views/shouye"
import image from "@/views/image"
import publish from "@/views/publish"
import comment from "@/views/comment"
import fans from "@/views/fans"
import setting from "@/views/setting"




Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name: 'login',
    component:login
  },
  {
    path:'/',
    component: layout
    , children: [
      {
        path:'',
        name: 'shouye',
        component:shouye
      },
      {
        path:'articles',
        name: 'articles',
        component:articles
      },
      {
        path:'image',
        name: 'image',
        component:image
      }
      , {
        path:'publish',
        name: 'publish',
        component:publish
      },
      {
        path:'comment',
        name: 'comment',
        component:comment
      },
      {
        path:'fans',
        name: 'fans',
        component:fans
      },
      {
        path:'setting',
        name: 'setting',
        component:setting
      }
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
