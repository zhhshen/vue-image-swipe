import Vue from 'vue'
import App from './App.vue'
import Preview from './lib/index.js'
Vue.use(Preview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})