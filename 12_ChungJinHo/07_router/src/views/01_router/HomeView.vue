<script setup>
import {useRoute, useRouter} from "vue-router";

// useRoute()  (=> getter)
// - 현재 라우트 객체에 접근할 수 있도록 하는 메서드
// - 라우트의 경로, 파라미터, 쿼리 등을 확인 가능

// useRouter() (<RouterLink> 태그 역할을 js로 함)
// - 라우트 객체에 접근하여 프로그래밍 방식으로 라우팅 처리를
//   할 수 있게하는 메서드
// - push, state, go 등을 제공

  const currentRoute = useRoute(); // 현재 라우트 객체 확인

  const router = useRouter(); // 라우팅 처리하는 객체

  // push() == js의 pushState() == 주소창 url만 변경 시키는 함수

  const changeRouter
     // = () => router.push('/pathvariable/1');
     = () => router.push({name: 'path-variable', params: {id: 1}});

  const changeUrlRouter
     // = () => router.push('/querystring?name=홍길동&age=20');
     = () => router.push({name: 'query-string', query: {name: '홍길동', age: 20}});

</script>

<template>
  <h1>Home</h1>
  <pre>
    useRoute() = {{currentRoute}}
  </pre>
  <button @click="changeRouter">Router 경로 변경</button>
  <button @click="changeUrlRouter">Router 경로 변경(querystring)</button>

</template>
