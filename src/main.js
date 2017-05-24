import Vue from 'vue'
import helper from './helper'
global.helper = helper

import config from './config'

import store from './store/'
global.store = store

import router from './router'
import i18n from './i18n/'
import menu from './menu'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import './http'

// import 'vuetify/src/stylus/main.styl'
import 'src/css/main.styl'
import 'src/css/main.css'

import App from './App.vue'

import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: config.locale,
  locales: {
    'en': require('vue-timeago/locales/en-US.json'),
    [config.locale]: require(`vue-timeago/locales/${config.locale}.json`),
  }
})

import VForm from './components/Form.vue'
import VGrid from './components/Grid.vue'

// import Modal from './components/Modal'
// Vue.use(Modal)


Vue.component('v-form', VForm)
Vue.component('v-grid', VGrid)

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App),
  mounted() {
    
  },
  created() {
    this.$store.commit('setMenu', menu)
    this.$store.dispatch('checkPageTitle', this.$route.path)
    this.$store.dispatch('checkAuth')

    
  }
});