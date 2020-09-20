import Vue from 'vue';
import App from './App.vue';
import eventBus from './eventBus';
// import './registerServiceWorker'

Vue.config.productionTip = false
new Vue({
  eventBus,
  render: h => h(App),
}).$mount('#app')