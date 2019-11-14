import Vue from 'vue';
import Buefy from 'buefy';
import vueScrollTo from 'vue-scrollto';
import 'vue-material-design-icons/styles.css';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import router from './router';
import store from './store';
import App from './App.vue';
import './registerServiceWorker';
import 'buefy/dist/buefy.css';

Vue.component('chevron-down', ChevronDown);
Vue.component('chevron-up', ChevronUp);
Vue.use(Buefy);
Vue.use(vueScrollTo);

Vue.config.productionTip = false;
require('./assets/main.scss');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
