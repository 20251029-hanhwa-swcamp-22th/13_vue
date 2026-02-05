<script setup>
/*  부모로 부터 전달 받은
* toggle 이라는 이름의 이벤트 리스너를 얻어옴 */
const emit = defineEmits(["toggle"])
</script>

<template>
<!-- 버튼 클릭 시 부모 컴포넌트의 반응형 변수(상태 변수) 값 변경
 === 자식이 부모에게 영향을 줌
-->
  <button @click="emit('toggle')" >다크 모드 토글 버튼</button>
</template>

<style scoped>

</style>