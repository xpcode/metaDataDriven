/**
 * Created by c on 2017/3/8.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.component('yy-form-table', require('./ui-model/yy-form-table.vue'))

export default function (options) {
  return new Vue(options)
}

const QueryModel = {
  instance: function (api) {
    return {
      render(createElement){
        return createElement('yy-form-table', api)
      }
    }
  }
}

export {
  VueRouter,
  QueryModel
}
