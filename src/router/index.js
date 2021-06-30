/*
 * @Description: 路由跳转控制中心
 * @Author: 任录
 * @Date: 2019-07-22 15:13:52
 * @LastEditTime: 2021-04-02 01:12:06
*/

import Vue from 'vue'
import Router from 'vue-router'

import aboutRoutes from './about'
import customerRoutes from './customer'
import homeRoutes from './home'
import productRoutes from './product'
import solutionRoutes from './solution'
Vue.use(Router)

const children = [...aboutRoutes, ...customerRoutes, ...homeRoutes, ...productRoutes, ...solutionRoutes]

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => require(['@/views/Main'], resolve),
      children
    },
  ]
})

router.beforeEach((to, from, next) => {
  window.scroll(0, 0);
  next();
})

export default router