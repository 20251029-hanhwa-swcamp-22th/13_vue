<!--
  * props drilling : 상위 컴포넌트에서 자손 컴포넌트로 데이터 전달 시
                  여러 자손 컴포넌트를 거쳐서 전달하는 방식
  단점 : 복잡함, 유지보수성 떨어짐, 불필요한 중간 자손 컴포넌트에 코드를 작성해야 함.

  * provide : 여러 중첩된 컴포넌트를 통과해서 값을 제공할 수 있는 함수
      선언된 부모 컴포넌트 하위에서 모두 제공 받을 수 있음.
    단, 제공된 자식 중 어디서 값이 변경되었는지 추적이 어려울 수 있으므로
    readonly 옵션을 고려한다.

  * inject : provide에서 제공하는 값을 꺼내서 주입하는 함수
-->

<script setup>
  import DrillingChild from "@/components/02_props-drilling/DrillingChild.vue";
  import {ref, provide, readonly} from 'vue';

  const count = ref(0);
  const increaseCount = () => count.value++;

  /* provide test */
  const provideCount = ref(0);
  // provide('provideCount', provideCount);
  // 상태 변수 provideCount를 'provideCount' 이름으로 provide에 등록

  provide('provideCount', readonly(provideCount) ); // 읽기전용 적용

</script>

<template>
  <h1>Parent - count:{{count}} / provideCount:{{provideCount}}</h1>

  <DrillingChild :count="count" @plusCount="increaseCount"/>

</template>

<style scoped>

</style>