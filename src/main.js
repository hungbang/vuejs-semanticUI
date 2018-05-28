import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueRouter)
Vue.use(VueSweetalert2)

const router = new VueRouter({
	routes : Routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
