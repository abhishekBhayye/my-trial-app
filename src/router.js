import { createWebHistory, createRouter } from 'vue-router';

import HomeComnponent from './components/Home.vue';
import AboutUsComponent from './components/AboutUs.vue';

const routes = [
    { 
        path: '', 
        name: '',
        component: HomeComnponent 
    },
    { 
        path: '/home', 
        name: 'Home',
        component: HomeComnponent 
    },
    { 
        path: '/about-us', 
        name: 'About Us',
        component: AboutUsComponent 
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
