import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import PasswordCheck from '../components/PasswordCheck.vue';
import AccountDetails from '../components/AccountDetails.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/password-check',
        name: 'PasswordCheck',
        component: PasswordCheck,
        meta: { requiresAuth: true }
    },
    {
        path: '/account-details',
        name: 'AccountDetails',
        component: AccountDetails,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory('/'), // 기본 경로를 '/'로 설정
    routes
});

// 네비게이션 가드 설정
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;
