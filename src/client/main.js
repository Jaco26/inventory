import { createApp } from 'vue';
import App from './App.vue';
import sharedComponents from './components/shared';
import router from './router';
const app = createApp(App);
app.use(router);
app.use(sharedComponents);
app.mount('#app');
//# sourceMappingURL=main.js.map