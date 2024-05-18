import { createRouter, createWebHistory } from 'vue-router';

const NotFound = () => import(/* webpackChunkName: "home" */ '@/pages/NotFound.vue');

const FormPage = () => ({
    component: import(/* webpackChunkName: "form-page" */ '../components/FormPage.vue'),
    loading: require('../components/Loading.vue').default,
    delay: 200,
    timeout: 3000
});

const ConfirmPage = () => ({
    component: import(/* webpackChunkName: "confirm-page" */ '../components/ConfirmPage.vue'),
    loading: require('../components/Loading.vue').default,
    delay: 200,
    timeout: 3000
});

const routes = [
    {
        path: '/',
        name: 'FormPage',
        component: FormPage
    },
    {
        path: '/confirm',
        name: 'ConfirmPage',
        component: ConfirmPage
    },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;
