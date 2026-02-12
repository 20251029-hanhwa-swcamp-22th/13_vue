<script setup>
import {useRoute, useRouter} from "vue-router";

// useRoute() (=>getter)
// useRoute는 현재 활성화된 라우트 객체에 접근할 수 있는 Vue 컴포지션 API 함수이다.
// 라우트의 1. 경로, 2. 파라미터, 3. 쿼리 등을 확인할 수 있다.

// useRouter() (<RouterLink> 태그 역할을 js로 함)
// - 라우터 인스턴스에 접근하여 프로그래밍 방식으로 라우팅을 처리할 수 있게 해준다.
//   push, replace와 같은 메소드를 이용해 라우트 이동을 제어할 수 있다.
// - push, state, go, replace 등을 제공

const currentRoute = useRoute(); // 현재 라우트 객체 확인

const router = useRouter(); // 라우팅 처리하는 객체

// push() : js의 pushState, 주소창 url만 변경 시키는 함수

const changeRouter
    // = () => router.push('/pathvariable/1')
    = () => router.push({
  name: 'path-variable', // 라우팅 테이블에 작성된 name 속성 값
  params: {id: '1'} // /pathvariable/:id => id에 대입될 값 지정
});

const changeUrlRouter
//     = () => router.push('/querystring?name=홍길동&age');
    = () => router.push({
  name: 'query-string',
  query: {name : '홍길동',age : 20,gender : '남'}
})

</script>

<template>
  <h1>Home</h1>
  <pre>
    useRoute() = {{ currentRoute }}
  </pre>
  <button @click="changeRouter">pathvariable</button>
  <button @click="changeUrlRouter">querystring</button>
</template>
