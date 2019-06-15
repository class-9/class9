import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.scss'
import './assets/styles/border.scss'
import './assets/styles/common.scss'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
