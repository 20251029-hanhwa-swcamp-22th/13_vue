import {createRouter, createWebHistory} from "vue-router";

// 앱 실행 시점에 컴포넌트 미리 로드하기
import HomeView from "@/views/01_router/HomeView.vue";
import PathVariableView from "@/views/01_router/PathVariableView.vue";
import QueryStringView from "@/views/01_router/QueryStringView.vue";

/* router 인스턴스 생성 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pathvariable/:id',
      name: 'path-variable',
      component: PathVariableView
    },
    {
      path: '/querystring',
      name: 'query-string',
      component: QueryStringView
    }
  ]
});

// 외부에서 해당 js파일을 import할 경우
// 기본 값으로 내보낼 값(변수)를 지정
export default router;
