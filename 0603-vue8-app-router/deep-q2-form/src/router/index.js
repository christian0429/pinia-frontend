import { createRouter, createWebHistory } from 'vue-router';

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

const NotFound = () => import(/* webpackChunkName: "not-found" */ '../components/NotFound.vue');

const routes = [
    {
        path: '/',
        name: 'FormPage',
        component: FormPage
    },
    {
        path: '/confirm',
        name: 'ConfirmPage',
        component: ConfirmPage,
        props: route => ({ formData: route.query })
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;
