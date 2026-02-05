import {createRouter, createWebHistory} from "vue-router";
import test01 from "@/router/test01.js";
import test02 from "@/router/test02.js";
const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'home',
            component : () => import('@/views/01_router/HomeView.vue')
        },
        ...test01, // ...을 붙이면 {A},{B}인 배열인데 A,B로 변경시켜주는것
        // ...[{},{}] -> {}, {} (전개 문법을 이용해 배열 기호 삭제)
        ...test02,
        {
            path : '/:pathMatch(.*)*',
            // -> : 앞에 잇는걸로 찾아라 -> /로시작하는걸 찾아라
            //      -> catch all(모든 요청 주소 찾기)
            component : () => import("@/views/NotFound.vue")
        }
    ],

    linkActiveClass: 'active',    // 모든 <RouterLink>에 기본 active-class설정
});

export default router;