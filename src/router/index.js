import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('@/components/home/home')), 'home')
const aboutus = r => require.ensure([], () => r(require('@/components/aboutus/aboutus')), 'aboutus')

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
    }
  ]
})
