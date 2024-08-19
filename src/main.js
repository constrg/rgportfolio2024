import { createApp } from 'vue';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';
import router from './router';

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

AOS.init();
const app = createApp(App);
app.use(router);
app.mount('#app');
