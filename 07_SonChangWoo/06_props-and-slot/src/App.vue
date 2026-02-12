<script setup>
/*
* - 컴포넌트의 로직을 작성하며
*   상태, 메서드, props, emits 등을 정의한다.
* - Composition API를 사용하여
*   더 간결한 코드를 작성할 수 있다.
* */

/*
* import 여기서 부를 별칭 from '경로'
* @ == src 폴더 (vite.config.js 확인)
* */
import MyComp from "@/components/00_component/MyComponent.vue"
import PropsParent from "@/components/01_props/PropsParent.vue";

</script>

<template>
<!--
  - 사용자에게 보여지는 화면 요소를 정의한다.
  - HTML과 유사하게 작성되지만, Vue 디렉티브와 컴포넌트를 사용하여
    동적으로 데이터를 바인딩하고 조작할 수 있다.
-->
  <header>
    <h1>00.component</h1>
    <MyComp/>
  </header>

  <main>
    <h3>01.props</h3>
    <PropsParent/>
  </main>

</template>

<style scoped>
/* 컴포넌트의 스타일을 작성하며, 해당 컴포넌트에만 적용된다. */

/* 하위 컴포넌트의 지정된 선택자와 일치하는 요소를 선택해 css 적용 */
:deep(.container){
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  margin : 30px;
  padding: 30px;
}
</style>
