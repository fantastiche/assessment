import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition/PageTransition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        path: '/',
        redirect: '/pageOne'
      }, {
        path: '/pageOne',
        name: 'pageOne',
        component: resolve => require(['../view/PageOne/pageOne.vue'], resolve)
      }, {
        path: '/pageTwo',
        name: 'pageTwo',
        component: resolve => require(['../view/PageTwo/pageTwo.vue'], resolve)
      }]
    }
  ]
})
