import Vue, {
  VueRouter
} from './framework'
import Home from './pages/Home'
import Add from './pages/Add'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: Home,
  }, {
    path: '/add',
    component: Add
  }]
})

const app = new Vue({
  router,
  render(h) {
    return h('router-view')
  }
}).$mount('#app')
