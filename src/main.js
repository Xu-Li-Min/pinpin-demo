import '@/assets/css/tailwind.css';
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

library.add(faHeart, faShareAlt);

const app = createApp(App);
app.config.productionTip = false;

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');

// createApp(App)
//   .use(router)
//   .mount('#app');
