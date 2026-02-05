/* routes 라는 요소 선언*/
const routes = [
    {
        /* :id == PathVariable 변수, 해당 위치의 값을 id 변수에 저장*/
        path: '/pathvariable/:id',
        name: 'path-variable',
        component: () => import('@/views/01_router/PathVariableView.vue')
    },
    {
        path: '/querystring',
        name: 'query-string',
        component: () => import('@/views/01_router/QueryStringView.vue')
    }
]

export default routes;
