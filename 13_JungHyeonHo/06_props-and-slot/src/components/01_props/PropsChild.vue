<script setup>
// <script setup> 사용 시 자동으로 defineProps, defineEmits import 됨
/* defineProps : 부모로부터 전달 받을 값을 정의하는 함수
* 전달 받는 값의 유효성 검사 가능*/

const props = defineProps({
  message: String
  /* 부모로부터 전달 받은 message가 String 타입인지 검사 */
});
</script>

<template>
  <h3>전달 받은 props : {{props.message}}</h3>
</template>

<style scoped>

</style>