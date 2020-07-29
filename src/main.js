import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'

Vue.use(BootstrapVue);
Vue.use(Vuex);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {store} from "./store";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
});

