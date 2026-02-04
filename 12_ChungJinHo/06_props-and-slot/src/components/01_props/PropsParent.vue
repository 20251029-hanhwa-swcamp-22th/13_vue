<script setup>
import {ref} from 'vue';
import PropsChild from "@/components/01_props/PropsChild.vue";
import DarkMode from "@/components/01_props/DarkMode.vue";
import ReadOnlyProps from "@/components/01_props/ReadOnlyProps.vue";


/* 자식에게 전달할 이벤트 핸들러(함수) <- emit */
const darkState = ref(false); // 상태 변수(반응형 변수)
const toggleDarkMode
    = () => darkState.value = !darkState.value;

/* props 읽기 전용 확인*/
const readValue = ref('읽기 전용 값');

</script>

<template>
  <div :class="{container : true, dark : darkState}">

    <!-- 자식 컴포넌트 추가   -->
    <PropsChild message="hello world"/>

    <!--  toggle이라는 이름의 이벤트 리스너를 자식 컴포넌트에 전달  -->
    <DarkMode @toggle="toggleDarkMode"/>

    <!--  자식 컴포넌트로  "readValue" 전달  -->
    <ReadOnlyProps :readValue = "readValue"  />

  </div>
</template>


<style scoped>
  .dark{
    background: black;
    color : white;
  }
</style>