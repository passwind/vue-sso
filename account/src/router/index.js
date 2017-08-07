import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
import Hello from '@/components/Hello'
import { routes as app } from '../components'

Vue.use(Router)

const routes = [...app, {
  path: '/',
  name: 'Hello',
  component: Hello
}]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach(beforeEach)

export default router
