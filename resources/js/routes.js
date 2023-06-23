import { createRouter, createWebHistory } from 'vue-router'

import mainPage from './pages/main'
import otherPage from './pages/other'
import noFoundPage from './pages/noFound'

const routes = [
    {
        path: '/',
        name: 'index',
        component: mainPage
    },
    {
        path: '/other',
        name: 'other',
        component: otherPage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: noFoundPage
    },
];

let router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
