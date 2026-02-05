<script setup>
import PropsChild from "@/components/01_props/PropsChild.vue";
import {ref} from "vue";
import DarkMode from "@/components/01_props/DarkMode.vue";
import ReadOnlyProps from "@/components/01_props/ReadOnlyProps.vue";

/* 자식에게 전달할 이벤트 핸들러(함수) <- emit */
const darkState = ref(false) // 반응형 변수(상태 변수)
 const toggleDarkMode = () => darkState.value = !darkState.value;

/* props 읽기 전용 확인 */
const readValue = ref("조아요")
</script>

<template>
  <div :class="{container : true, dark : darkState}">

    <!-- 자식 컴포넌트 추가   -->
    <PropsChild message="안녕 세상아"/>

<!-- toggle 이라는 이름의 이벤트 리스너를 자식 컴포넌트에 전달-->
    <DarkMode @toggle="toggleDarkMode"/>  <!--toggle 이라는 이름을 쓸건데 이건 이벤트 리스너임-->

    <!--  자식 컴포넌트로  "readValue" 전달  -->
<ReadOnlyProps :readValue="readValue"/>


  </div>
</template>

<style scoped>
.dark{
  background: rgba(14, 185, 24, 0.51);
  color: #ff0000;
}
</style>