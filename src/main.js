import Vue from 'vue';
import App from './app/App.vue';
import router from './router';
import VueCompositionApi from '@vue/composition-api';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faThumbtack, faShareSquare } from '@fortawesome/free-solid-svg-icons';

import './registerServiceWorker';
import './theme/style/global-style.css';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add([faThumbtack, faShareSquare]);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
