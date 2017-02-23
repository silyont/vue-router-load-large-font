// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'

import Home from './components/Home.vue'

import Modal from './components/Modal.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '/',
                    name: 'home',
                    components: {
                        page: Home
                    }
                },
                {
                    path: 'modal',
                    name: 'modal',
                    components: {
                        page: Home,
                        modal: Modal
                    }
                }
            ]
        },
        {
            path: '*',
            redirect: ''
        }
    ]
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  template: '<router-view></router-view>',

  components: {App},
  router,
})
