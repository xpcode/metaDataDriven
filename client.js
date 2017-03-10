import Vue, {
  VueRouter
} from './framework'
import Home from './pages/Home'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: Home
  }]
})

const app = new Vue({
  router,
  render(h) {
    return h('router-view')
  }
}).$mount('#app')
