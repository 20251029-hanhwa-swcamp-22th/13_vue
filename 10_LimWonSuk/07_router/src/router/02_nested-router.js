import {useRouter, createWebHistory, createRouter} from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/nested',
            /*
            * Lazy Load : 사용자가 해당 경로에 접근할 때 비동기적으로 로드함. 초반 번들 크기를 줄여 성능을 개선할 수 있음.
            * */
            component: () => import('@/views/02_nested-router/HomeView.vue'),
            children: [
                {
                    path: 'home',
                    name: 'nested-home',
                    component: () => import('@/views/02_nested-router/NestedHomeView.vue')
                },
                {
                    path: 'other',
                    name: 'nested-other-view',
                    component: () => import('@/views/02_nested-router/NestedOtherView.vue')
                }
            ]

        }
    ],
    linkActiveClass: 'active',    // 모든 <RouterLink>에 기본 active-class설정
});

export default router;