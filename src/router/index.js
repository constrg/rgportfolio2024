import { createRouter ,createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import AboutMe from '../pages/AboutMe.vue';
import WebDesigns from '../pages/WebDesigns.vue';
import AppDesigns from '../pages/AppDesigns.vue';
import GraphicDesigns from '../pages/GraphicDesigns.vue';
import FrontEnds from '../pages/FrontEnds.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {title: 'Constrg - Home'}
    },
    {
        path: '/about-me',
        name: 'about-me',
        component: AboutMe,
        meta: {title: 'Constrg - About Me'}
    },
    {
        path: '/web-designs',
        name: 'web-designs',
        component: WebDesigns,
        meta: {title: 'Constrg - Web Designs'}
    },
    {
        path: '/app-designs',
        name: 'app-designs',
        component: AppDesigns,
        meta: {title: 'Constrg - App Designs'}
    },
    {
        path: '/graphic-designs',
        name: 'graphic-designs',
        component: GraphicDesigns,
        meta: {title: 'Constrg - Graphic Designs'}
    },
    {
        path: '/front-ends',
        name: 'front-ends',
        component: FrontEnds,
        meta: {title: 'Constrg - Front-Ends'}
    },
    {
        path: '/:PathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        } else {
          return { top: 0 };
        }
      }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Constrg Portfolio';
    next();
});

export default router;