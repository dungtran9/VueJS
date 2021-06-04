import Vue from 'vue'
import Router from 'vue-router'
import ListUser from '@/components/ListUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'ListUser',
      component: ListUser
    }
  ]
})
