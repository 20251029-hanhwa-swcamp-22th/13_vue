<script setup>

/* defineProps() : 부모 컴포넌트로부터 전달받은 데이터를 정의하는 함수
*  - props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 데 사용된다.
*  - props는 읽기 전용이며, 자식 컴포넌트에서 직접 수정할 수 없다.
*  - props는 객체 형태로 정의하며, key는 props의 이름, value는 props의 타입을 나타낸다.
*/
  
  const props = defineProps({
    message : String 
    // message : Number
    // message : Boolean
    // message : Array
    // message : Object
    // message : Function
    // 타입검사 후 콘솔에서만 경고하고, 화면에는 정상적으로 출력됨
    /* 부모로 부터 전달 받은 message가 String 타입인지 검사*/
  });
</script>

<template>
  <h3>전달 받은 props : {{ message }}</h3> 
  <!-- 부모로 부터 전달 받은 message를 화면에 출력 -->
</template>

<style scoped>

</style>