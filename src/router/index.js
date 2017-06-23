import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('@/components/home/home')), 'home')
const aboutus = r => require.ensure([], () => r(require('@/components/aboutus/aboutus')), 'aboutus')
const news = r => require.ensure([], () => r(require('@/components/news/news')), 'news')
const contactus = r => require.ensure([], () => r(require('@/components/contactus/contactus')), 'contactus')
const superiority = r => require.ensure([], () => r(require('@/components/superiority/superiority')), 'superiority')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/aboutus',
      component: aboutus
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/contactus',
      component: contactus
    },
    {
      path: '/superiority',
      component: superiority
    }
  ]
})
