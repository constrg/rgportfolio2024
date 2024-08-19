import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// document.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
//   });

const app = createApp(App);
app.use(router);
app.mount('#app');
