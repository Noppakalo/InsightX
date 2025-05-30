import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '/src/pages/Home.vue'
import NotFound from '/src/pages/404page.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/404',
        name: '404',
        component: NotFound,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
