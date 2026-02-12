<!--손자-->
<script setup>
import {inject} from 'vue';
/* props로 전달 받은 값 얻어오기 */
const props = defineProps({
  count : Number // 부모로 부터 전달받은 count 속성(+ Number 타입인지 검사)
})
const emit = defineEmits(['plusCount']);
// 상태변수의 값만 가져오는 것이 아니라 원본 수정 가능
const provideCount = inject("provideCount");
</script>

<template>
<!-- props.count : Parent -> Child -> GrandChild 넘어온 값 -->
  <h3>GrandChild : {{props.count}}</h3>
  <button @click="emit('plusCount')">count 플러스 1</button>

  <h3>provideCount : {{provideCount}}</h3>
  <!--  원본 값 변화 확인-->
  <button @click="provideCount++">provide 1up</button>
</template>

<style scoped>

</style>