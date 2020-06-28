import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import MessageDetial from '../components/MessageDetial.vue'
import NewsDetial from '../components/NewsDetial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/news'
      },
      {
        path: '/home/news',
        component: News,
        children:[
          {
            path:'/home/news/detial',
            component:NewsDetial
          }
        ]
      },
      {
        path: '/home/message',
        component: Message,
        children: [
          {
            path: '/home/message/detial/:id',
            component: MessageDetial
          }
        ],
      },
    ]
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router